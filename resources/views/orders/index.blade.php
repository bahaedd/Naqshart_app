@extends('layouts.app')

@section('content')
<section class="content-header">
    <h1 class="pull-left">Orders Requests</h1>
    {{-- <h1 class="pull-right">
        <a class="btn btn-primary pull-right" style="margin-top: -10px;margin-bottom: 5px" href="{{ route('appliedartists.create') }}">Add
    New</a>
    </h1> --}}
</section>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/admin">Admin</a></li>
        <li class="breadcrumb-item active" aria-current="page">Orders</li>
    </ol>
</nav>
<div class="content">
    <div class="clearfix"></div>

    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-primary">
        <div class="box-body">

            <div class="table-responsive">
                <table class="table table-striped" id="appliedartists-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>

                            <th>Address</th>
                            <th>Apartment</th>
                            <th>City</th>
                            <th>PostCode</th>
                            <th>Goverment</th>

                            <th>Country</th>

                            <th>Payment-code</th>
                            <th>payment-status</th>
                            <th>PromoCode</th>

                            <th>Discount</th>
                            <th>TotalPrice</th>
                            <th>Payment Transaction REturn</th>

                            <th colspan="3" style=" padding-left: 2%;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($appliedartists as $appliedartist)
                        <tr>
                            <td>{{ $appliedartist->fname }} - {{ $appliedartist->lname }}</td>
                            <td>{{ $appliedartist->email }}</td>
                            <td>{{ $appliedartist->phone }}</td>

                            <td>{{ $appliedartist->address }}</td>
                            <td>{{ $appliedartist->apartment }}</td>
                            <td>{{ $appliedartist->city }}</td>
                            <td>{{ $appliedartist->postcode }}</td>
                            <td>{{ $appliedartist->goverment }}</td>
                            <td>{{ $appliedartist->country }}</td>
                            <td>{{ $appliedartist->paymentid }}</td>
                            <td>{{ $appliedartist->paymentstatus }}</td>
                            <td>{{ $appliedartist->promocode }}</td>
                            <td>{{ $appliedartist->discount }} %</td>

                            <td>{{ $appliedartist->totalprice }}</td>
                            <td>{{ $appliedartist->payment_transaction }}</td>
                            <td>
                                {!! Form::open(['route' => ['orders.refund', $appliedartist->id], 'method' =>
                                'put']) !!}
                                <div class='btn-group'>
                                    <a style="" href="{{ route('appliedorder.show', [$appliedartist->id]) }}"
                                        class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                                    {!! Form::button('<i class="glyphicon glyphicon-share-alt"></i>', ['type' =>
                                    'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you
                                    sure to refund ?')"]) !!}
                                </div>
                                {!! Form::close() !!}
                                {{-- <a style=" margin-left: 15px;" href="{{ route('appliedorder.show', [$appliedartist->id]) }}"
                                class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a> --}}

                            </td>
                        </tr>
                        @endforeach
                    </tbody>

                </table>
                {{ $appliedartists->links() }}

            </div>

        </div>
    </div>
    <div class="text-center">

    </div>
</div>
@endsection
