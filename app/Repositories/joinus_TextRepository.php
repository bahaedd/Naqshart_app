<?php

namespace App\Repositories;

use App\Models\joinus_Text;
use App\Repositories\BaseRepository;

/**
 * Class joinus_TextRepository
 * @package App\Repositories
 * @version August 9, 2020, 11:20 pm UTC
*/

class joinus_TextRepository extends BaseRepository
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
        return joinus_Text::class;
    }
}
