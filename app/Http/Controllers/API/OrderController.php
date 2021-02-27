<?php

namespace App\Http\Controllers\API;

use App\Order;

use  App\Models\Palette;

use  App\Models\Discount;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\OrderResquest;
use Illuminate\Support\Facades\Validator;
use App\Rules\instock;


class OrderController extends Controller
{
    private $methods = [
        'VISA' => '8ac7a4ca76890c29017689e9c445025e',
        'MASTER' => '8ac7a4ca76890c29017689e9c445025e',
        'MADA' => '8ac7a4ca76890c29017689ea16610262',

    ];
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($order = null, $method = null, Request $request)
    {
        $entityID = $this->methods[$method];
        // dd($request);
        $order = Order::find($order);
        $url = "https://test.oppwa.com/";
        $url .= $request->resourcePath;
        $url .= "?entityId=$entityID";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Authorization:Bearer OGFjN2E0Y2E3Njg5MGMyOTAxNzY4OWU5ODE4YjAyNWF8aFh0M2JoR3pSOA=='
        ));
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // this should be set to true in production
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $responseData = curl_exec($ch);
        if (curl_errno($ch)) {
            return curl_error($ch);
        }
        curl_close($ch);

        $responseData = json_decode($responseData);
        // dd($responseData);
        //  dd($request->all(),$order->items,$responseData);
        if (isset($responseData->id) && isset($responseData->result->description) &&  str_contains($responseData->result->description, 'successfully')) {
            //  return 'error' ;
            $key['small'] = "S_avalible";
            $key['medium'] = 'M_avalible';
            $key['large'] = 'L_avalible';

            foreach ($order->items as  $item) {
                $palette  =  Palette::find($item->palatte_id);
                $palette_arr = $palette->toArray();
                $quantity_left =  $palette_arr[$key[$item->size]];
                $sub = $quantity_left - $item->quantity;
                $subcopies = $palette->avalible_copies -  $item->quantity;
                $palette->update([$key[$item->size] => $sub, 'avalible_copies' => $subcopies]);
            }
            $order->update(['paymentstatus' => 'Processing']);
            return view('checkout.success', ['id' => $responseData->id]);
        } else {
            $order->update(['paymentstatus' => 'Failed']);
            if (isset($responseData->result->description)) {
                return view('checkout.error', ['msg' => $responseData->result->description]);
            } else {
                return view('checkout.error', ['msg' => 'error accured please contact us ']);
            }
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrderResquest $request)
    {

        // $validator = Validator::make($request->all(), [

        //     ]);
        // app()->setLocale('ar');
        $locale = app()->getLocale();
        // if ( $validator->errors()->count()>0)
        // {
        //     return response()->json(['status'=>false,'errors'=>$validator->errors()->all(),__('orderrequest.failed')]);
        //     // discount_percentage
        // }
        $totalprice = $this->totalprice($request->items, $request->promocode);
        $request['paymentstatus'] = 'pending';
        $request['totalprice'] = $totalprice['totalprice'];
        $request['discount'] = $totalprice['discount_amount'];

        $checkoutid =  $this->get_checkout_id(floatval(str_replace('.', ',', $request['totalprice'])), $this->methods[$request->paymentMethod], $request);
        if ($checkoutid) {
            $request['paymentid'] = $checkoutid->id;
        } else {
            $request['paymentid'] = 'failed transaction';
            $order = Order::create($request->except('items'));
            $retitems = $this->save_order_items($order, $totalprice['baletteitems']);
            return response()->json(['status' => false, 'errors' => ['transaction request failed and we calling you shortly'], __('orderrequest.failed'), $totalprice, floatval($request['totalprice'])]);
        }


        $order = Order::create($request->only(['promocode', 'email', 'fname', 'lname', 'address', 'apartment', 'city', 'postcode', 'goverment', 'country', 'goverment', 'country', 'phone', 'phonecode', 'paymentid', 'paymentstatus', 'discount', 'totalprice', 'payment-transaction-return']));
        $retitems = $this->save_order_items($order, $totalprice['baletteitems']);
        $view = view('ajax.form')->with(['checkoutid' => $checkoutid->id, 'orderid' => $order->id])
            ->renderSections();

        return response()->json(['status' => true, 'data' => $order, 'items' => $retitems, 'checkid' => $checkoutid->id, 'orderid' => $order->id, $totalprice]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }
    public function totalprice($arr = null, $promocode = null)
    {
        $retarr['totalprice'] = 0;
        $retarr['items'] = [];
        $retarr['discount_amount'] = null;

        $retarr['baletteitems'] = [];
        $key['small'] = "S_price";
        $key['medium'] = 'M_price';
        $key['large'] = 'L_price';


        foreach ($arr as &$item) {
            $palette =   Palette::find($item['paletteid']);
            // dump($palette);
            if ($palette) {

                // $price = $palette->toArray()[$key[$item['palettesize']]];
                $price = $palette->M_price_sar;
                // dump($price);
                $retarr['totalprice'] += $price * $item['quantity'];

                $palette_items_data['size'] = $item['palettesize'];
                $palette_items_data['price'] = strval($price);
                $palette_items_data['quantity'] = strval($item['quantity']);
                $palette_items_data['id'] = $palette->id;
                array_push($retarr['baletteitems'], $palette_items_data);
            }
        }

        if ($promocode) {
            $discount = Discount::where('code', '=', $promocode)->first();
            if ($discount) {
                $discount =  $discount->discount_percentage;
                $discount_amount =  $retarr['totalprice'] * ($discount / 100);

                $retarr['totalprice'] =   $retarr['totalprice'] -  $discount_amount;
                $retarr['discount_amount'] =  $discount;
            }
        }
        return $retarr;
        return count($arr);
    }

    public function save_order_items($order = null, $arr = null)
    {
        $retarr = [];
        if ($order) {
            foreach ($arr as &$palette_items_data) {

                $orderitem = $order->items()->create(['size' => $palette_items_data['size'], 'price' => $palette_items_data['price'], 'quantity' => $palette_items_data['quantity'], 'palatte_id' => $palette_items_data['id']]);
                array_push($retarr, $orderitem);
            }
            return $retarr;
        }
    }

    public function get_checkout_id($price = 0, $entityID, $orderData)
    {
        if ($price > 0) {

            $rand = md5(uniqid(rand(), true));
            $email = $orderData['email'];
            $firstName = $orderData['fname'];
            $lastName = $orderData['lname'];
            $address = $orderData['address'];
            $city = $orderData['city'];
            $postcode = $orderData['postcode'];
            $country = $orderData['country'];
            $countryCode = $this->getCountryCode($country);
            $url = "https://test.oppwa.com/v1/checkouts";
            $data = "entityId=$entityID" .
                "&amount=$price" .
                "&merchantTransactionId=$rand" .
                "&customer.email=$email" .
                "&customer.givenName=$firstName" .
                "&customer.surname=$lastName" .
                "&billing.street1=$address" .
                "&billing.state=$city" .
                "&billing.city=$city" .
                "&billing.postcode=$postcode" .
                "&billing.country=$countryCode" .
                "&currency=SAR" .
                "&paymentType=DB" .
                "&testMode=EXTERNAL";

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Authorization:Bearer OGFjN2E0Y2E3Njg5MGMyOTAxNzY4OWU5ODE4YjAyNWF8aFh0M2JoR3pSOA=='
            ));
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // this should be set to true in production
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $responseData = curl_exec($ch);
            if (curl_errno($ch)) {
                return curl_error($ch);
            }
            curl_close($ch);

            if ($responseData)
                $responseData =  json_decode($responseData);
            if ($responseData->result->description == 'successfully created checkout')
                return $responseData;
            return null;
        } else {
            return null;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
    private function getCountryCode($country)
    {
        $json = '
    [
    {
        "name": "Belarus",
        "code": "BY"
    },
    {
        "name": "Belgium",
        "code": "BE"
    },
    {
        "name": "Belize",
        "code": "BZ"
    },
    {
        "name": "Benin",
        "code": "BJ"
    },
    {
        "name": "Bermuda",
        "code": "BM"
    },
    {
        "name": "Bhutan",
        "code": "BT"
    },
    {
        "name": "Bolivia",
        "code": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "code": "BW"
    },
    {
        "name": "Bouvet Island",
        "code": "BV"
    },
    {
        "name": "Brazil",
        "code": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "code": "IO"
    },
    {
        "name": "Brunei Darussalam",
        "code": "BN"
    },
    {
        "name": "Bulgaria",
        "code": "BG"
    },
    {
        "name": "Burkina Faso",
        "code": "BF"
    },
    {
        "name": "Burundi",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "code": "CM"
    },
    {
        "name": "Canada",
        "code": "CA"
    },
    {
        "name": "Cape Verde",
        "code": "CV"
    },
    {
        "name": "Cayman Islands",
        "code": "KY"
    },
    {
        "name": "Central African Republic",
        "code": "CF"
    },
    {
        "name": "Chad",
        "code": "TD"
    },
    {
        "name": "Chile",
        "code": "CL"
    },
    {
        "name": "China",
        "code": "CN"
    },
    {
        "name": "Christmas Island",
        "code": "CX"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "code": "CC"
    },
    {
        "name": "Colombia",
        "code": "CO"
    },
    {
        "name": "Comoros",
        "code": "KM"
    },
    {
        "name": "Congo",
        "code": "CG"
    },
    {
        "name": "Congo, Democratic Republic",
        "code": "CD"
    },
    {
        "name": "Cook Islands",
        "code": "CK"
    },
    {
        "name": "Costa Rica",
        "code": "CR"
    },
    {
        "name": "Cote D\"Ivoire",
        "code": "CI"
    },
    {
        "name": "Croatia",
        "code": "HR"
    },
    {
        "name": "Cuba",
        "code": "CU"
    },
    {
        "name": "Cyprus",
        "code": "CY"
    },
    {
        "name": "Czech Republic",
        "code": "CZ"
    },
    {
        "name": "Denmark",
        "code": "DK"
    },
    {
        "name": "Djibouti",
        "code": "DJ"
    },
    {
        "name": "Dominica",
        "code": "DM"
    },
    {
        "name": "Dominican Republic",
        "code": "DO"
    },
    {
        "name": "Ecuador",
        "code": "EC"
    },
    {
        "name": "Egypt",
        "code": "EG"
    },
    {
        "name": "El Salvador",
        "code": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "code": "GQ"
    },
    {
        "name": "Eritrea",
        "code": "ER"
    },
    {
        "name": "Estonia",
        "code": "EE"
    },
    {
        "name": "Ethiopia",
        "code": "ET"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "code": "FK"
    },
    {
        "name": "Faroe Islands",
        "code": "FO"
    },
    {
        "name": "Fiji",
        "code": "FJ"
    },
    {
        "name": "Finland",
        "code": "FI"
    },
    {
        "name": "France",
        "code": "FR"
    },
    {
        "name": "French Guiana",
        "code": "GF"
    },
    {
        "name": "French Polynesia",
        "code": "PF"
    },
    {
        "name": "French Southern Territories",
        "code": "TF"
    },
    {
        "name": "Gabon",
        "code": "GA"
    },
    {
        "name": "Gambia",
        "code": "GM"
    },
    {
        "name": "Georgia",
        "code": "GE"
    },
    {
        "name": "Germany",
        "code": "DE"
    },
    {
        "name": "Ghana",
        "code": "GH"
    },
    {
        "name": "Gibraltar",
        "code": "GI"
    },
    {
        "name": "Greece",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "code": "GL"
    },
    {
        "name": "Grenada",
        "code": "GD"
    },
    {
        "name": "Guadeloupe",
        "code": "GP"
    },
    {
        "name": "Guam",
        "code": "GU"
    },
    {
        "name": "Guatemala",
        "code": "GT"
    },
    {
        "name": "Guernsey",
        "code": "GG"
    },
    {
        "name": "Guinea",
        "code": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "code": "GW"
    },
    {
        "name": "Guyana",
        "code": "GY"
    },
    {
        "name": "Haiti",
        "code": "HT"
    },
    {
        "name": "Heard Island and Mcdonald Islands",
        "code": "HM"
    },
    {
        "name": "Holy See (Vatican City State)",
        "code": "VA"
    },
    {
        "name": "Honduras",
        "code": "HN"
    },
    {
        "name": "Hong Kong",
        "code": "HK"
    },
    {
        "name": "Hungary",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "code": "IS"
    },
    {
        "name": "India",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "code": "ID"
    },
    {
        "name": "Iran",
        "code": "IR"
    },
    {
        "name": "Iraq",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "code": "IE"
    },
    {
        "name": "Isle of Man",
        "code": "IM"
    },
    {
        "name": "Israel",
        "code": "IL"
    },
    {
        "name": "Italy",
        "code": "IT"
    },
    {
        "name": "Jamaica",
        "code": "JM"
    },
    {
        "name": "Japan",
        "code": "JP"
    },
    {
        "name": "Jersey",
        "code": "JE"
    },
    {
        "name": "Jordan",
        "code": "JO"
    },
    {
        "name": "Kazakhstan",
        "code": "KZ"
    },
    {
        "name": "Kenya",
        "code": "KE"
    },
    {
        "name": "Kiribati",
        "code": "KI"
    },
    {
        "name": "Korea (North)",
        "code": "KP"
    },
    {
        "name": "Korea (South)",
        "code": "KR"
    },
    {
        "name": "Kosovo",
        "code": "XK"
    },
    {
        "name": "Kuwait",
        "code": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "code": "KG"
    },
    {
        "name": "Laos",
        "code": "LA"
    },
    {
        "name": "Latvia",
        "code": "LV"
    },
    {
        "name": "Lebanon",
        "code": "LB"
    },
    {
        "name": "Lesotho",
        "code": "LS"
    },
    {
        "name": "Liberia",
        "code": "LR"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "code": "LY"
    },
    {
        "name": "Liechtenstein",
        "code": "LI"
    },
    {
        "name": "Lithuania",
        "code": "LT"
    },
    {
        "name": "Luxembourg",
        "code": "LU"
    },
    {
        "name": "Macao",
        "code": "MO"
    },
    {
        "name": "Macedonia",
        "code": "MK"
    },
    {
        "name": "Madagascar",
        "code": "MG"
    },
    {
        "name": "Malawi",
        "code": "MW"
    },
    {
        "name": "Malaysia",
        "code": "MY"
    },
    {
        "name": "Maldives",
        "code": "MV"
    },
    {
        "name": "Mali",
        "code": "ML"
    },
    {
        "name": "Malta",
        "code": "MT"
    },
    {
        "name": "Marshall Islands",
        "code": "MH"
    },
    {
        "name": "Martinique",
        "code": "MQ"
    },
    {
        "name": "Mauritania",
        "code": "MR"
    },
    {
        "name": "Mauritius",
        "code": "MU"
    },
    {
        "name": "Mayotte",
        "code": "YT"
    },
    {
        "name": "Mexico",
        "code": "MX"
    },
    {
        "name": "Micronesia",
        "code": "FM"
    },
    {
        "name": "Moldova",
        "code": "MD"
    },
    {
        "name": "Monaco",
        "code": "MC"
    },
    {
        "name": "Mongolia",
        "code": "MN"
    },
    {
        "name": "Montserrat",
        "code": "MS"
    },
    {
        "name": "Morocco",
        "code": "MA"
    },
    {
        "name": "Mozambique",
        "code": "MZ"
    },
    {
        "name": "Myanmar",
        "code": "MM"
    },
    {
        "name": "Namibia",
        "code": "NA"
    },
    {
        "name": "Nauru",
        "code": "NR"
    },
    {
        "name": "Nepal",
        "code": "NP"
    },
    {
        "name": "Netherlands",
        "code": "NL"
    },
    {
        "name": "Netherlands Antilles",
        "code": "AN"
    },
    {
        "name": "New Caledonia",
        "code": "NC"
    },
    {
        "name": "New Zealand",
        "code": "NZ"
    },
    {
        "name": "Nicaragua",
        "code": "NI"
    },
    {
        "name": "Niger",
        "code": "NE"
    },
    {
        "name": "Nigeria",
        "code": "NG"
    },
    {
        "name": "Niue",
        "code": "NU"
    },
    {
        "name": "Norfolk Island",
        "code": "NF"
    },
    {
        "name": "Northern Mariana Islands",
        "code": "MP"
    },
    {
        "name": "Norway",
        "code": "NO"
    },
    {
        "name": "Oman",
        "code": "OM"
    },
    {
        "name": "Pakistan",
        "code": "PK"
    },
    {
        "name": "Palau",
        "code": "PW"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "code": "PS"
    },
    {
        "name": "Panama",
        "code": "PA"
    },
    {
        "name": "Papua New Guinea",
        "code": "PG"
    },
    {
        "name": "Paraguay",
        "code": "PY"
    },
    {
        "name": "Peru",
        "code": "PE"
    },
    {
        "name": "Philippines",
        "code": "PH"
    },
    {
        "name": "Pitcairn",
        "code": "PN"
    },
    {
        "name": "Poland",
        "code": "PL"
    },
    {
        "name": "Portugal",
        "code": "PT"
    },
    {
        "name": "Puerto Rico",
        "code": "PR"
    },
    {
        "name": "Qatar",
        "code": "QA"
    },
    {
        "name": "Reunion",
        "code": "RE"
    },
    {
        "name": "Romania",
        "code": "RO"
    },
    {
        "name": "Russian Federation",
        "code": "RU"
    },
    {
        "name": "Rwanda",
        "code": "RW"
    },
    {
        "name": "Saint Helena",
        "code": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "code": "KN"
    },
    {
        "name": "Saint Lucia",
        "code": "LC"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "code": "PM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "code": "VC"
    },
    {
        "name": "Samoa",
        "code": "WS"
    },
    {
        "name": "San Marino",
        "code": "SM"
    },
    {
        "name": "Sao Tome and Principe",
        "code": "ST"
    },
    {
        "name": "Saudi Arabia",
        "code": "SA"
    },
    {
        "name": "Senegal",
        "code": "SN"
    },
    {
        "name": "Serbia",
        "code": "RS"
    },
        {
        "name": "Montenegro",
        "code": "ME"
    },
    {
        "name": "Seychelles",
        "code": "SC"
    },
    {
        "name": "Sierra Leone",
        "code": "SL"
    },
    {
        "name": "Singapore",
        "code": "SG"
    },
    {
        "name": "Slovakia",
        "code": "SK"
    },
    {
        "name": "Slovenia",
        "code": "SI"
    },
    {
        "name": "Solomon Islands",
        "code": "SB"
    },
    {
        "name": "Somalia",
        "code": "SO"
    },
    {
        "name": "South Africa",
        "code": "ZA"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "code": "GS"
    },
    {
        "name": "Spain",
        "code": "ES"
    },
    {
        "name": "Sri Lanka",
        "code": "LK"
    },
    {
        "name": "Sudan",
        "code": "SD"
    },
    {
        "name": "Suriname",
        "code": "SR"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "code": "SJ"
    },
    {
        "name": "Swaziland",
        "code": "SZ"
    },
    {
        "name": "Sweden",
        "code": "SE"
    },
    {
        "name": "Switzerland",
        "code": "CH"
    },
    {
        "name": "Syrian Arab Republic",
        "code": "SY"
    },
    {
        "name": "Taiwan, Province of China",
        "code": "TW"
    },
    {
        "name": "Tajikistan",
        "code": "TJ"
    },
    {
        "name": "Tanzania",
        "code": "TZ"
    },
    {
        "name": "Thailand",
        "code": "TH"
    },
    {
        "name": "Timor-Leste",
        "code": "TL"
    },
    {
        "name": "Togo",
        "code": "TG"
    },
    {
        "name": "Tokelau",
        "code": "TK"
    },
    {
        "name": "Tonga",
        "code": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "code": "TT"
    },
    {
        "name": "Tunisia",
        "code": "TN"
    },
    {
        "name": "Turkey",
        "code": "TR"
    },
    {
        "name": "Turkmenistan",
        "code": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "code": "TC"
    },
    {
        "name": "Tuvalu",
        "code": "TV"
    },
    {
        "name": "Uganda",
        "code": "UG"
    },
    {
        "name": "Ukraine",
        "code": "UA"
    },
    {
        "name": "United Arab Emirates",
        "code": "AE"
    },
    {
        "name": "United Kingdom",
        "code": "GB"
    },
    {
        "name": "United States",
        "code": "US"
    },
    {
        "name": "United States Minor Outlying Islands",
        "code": "UM"
    },
    {
        "name": "Uruguay",
        "code": "UY"
    },
    {
        "name": "Uzbekistan",
        "code": "UZ"
    },
    {
        "name": "Vanuatu",
        "code": "VU"
    },
    {
        "name": "Venezuela",
        "code": "VE"
    },
    {
        "name": "Viet Nam",
        "code": "VN"
    },
    {
        "name": "Virgin Islands, British",
        "code": "VG"
    },
    {
        "name": "Virgin Islands, U.S.",
        "code": "VI"
    },
    {
        "name": "Wallis and Futuna",
        "code": "WF"
    },
    {
        "name": "Western Sahara",
        "code": "EH"
    },
    {
        "name": "Yemen",
        "code": "YE"
    },
    {
        "name": "Zambia",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "code": "ZW"
    }
]';
        $countries = json_decode($json);
        return collect($countries)->where('name', $country)->pluck('code')->first();
    }
}