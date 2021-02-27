<?php

namespace App\Repositories;

use App\Models\About_Contacts_Text;
use App\Repositories\BaseRepository;

/**
 * Class About_Contacts_TextRepository
 * @package App\Repositories
 * @version August 7, 2020, 11:54 am UTC
*/

class About_Contacts_TextRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'text_en',
        'text_ar'
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
        return About_Contacts_Text::class;
    }
}
