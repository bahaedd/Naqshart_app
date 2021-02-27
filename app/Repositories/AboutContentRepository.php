<?php

namespace App\Repositories;

use App\Models\AboutContent;
use App\Repositories\BaseRepository;

/**
 * Class AboutContentRepository
 * @package App\Repositories
 * @version July 31, 2020, 10:44 am UTC
*/

class AboutContentRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'body1_en',
        'body1_ar',
        'body_image',
        'body2_en',
        'body2_ar'
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
        return AboutContent::class;
    }
}
