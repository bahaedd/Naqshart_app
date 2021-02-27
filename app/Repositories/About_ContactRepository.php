<?php

namespace App\Repositories;

use App\Models\About_Contact;
use App\Repositories\BaseRepository;

/**
 * Class About_ContactRepository
 * @package App\Repositories
 * @version August 4, 2020, 10:00 pm UTC
*/

class About_ContactRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'email',
        'phone',
        'message'
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
        return About_Contact::class;
    }
}
