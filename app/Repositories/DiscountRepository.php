<?php

namespace App\Repositories;

use App\Models\Discount;
use App\Repositories\BaseRepository;

/**
 * Class DiscountRepository
 * @package App\Repositories
 * @version June 22, 2020, 1:15 pm UTC
*/

class DiscountRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'code',
        'discount_percentage'
    ];

    /**
     * Return searchable fields
     *
     * @return array
     */
    public function getFieldsSearchable()
    {
        return $this->fieldSearchable;
    }

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Discount::class;
    }
}
