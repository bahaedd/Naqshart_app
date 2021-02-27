<?php

namespace App\Repositories;

use App\Models\AboutAretists;
use App\Repositories\BaseRepository;

/**
 * Class AboutAretistsRepository
 * @package App\Repositories
 * @version July 31, 2020, 10:47 am UTC
*/

class AboutAretistsRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name_en',
        'name_ar',
        'image_ar'
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
        return AboutAretists::class;
    }
}
