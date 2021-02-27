<?php

namespace App\Repositories;

use App\Models\Appliedartist;
use App\Repositories\BaseRepository;

/**
 * Class AppliedartistRepository
 * @package App\Repositories
 * @version June 17, 2020, 4:56 am UTC
*/

class AppliedartistRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'email',
        'phone',
        'socialLink'
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
        return Appliedartist::class;
    }
}
