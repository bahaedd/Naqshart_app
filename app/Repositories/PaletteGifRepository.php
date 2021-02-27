<?php

namespace App\Repositories;

use App\PaletteGif;
use App\Repositories\BaseRepository;

/**
 * Class AboutContentRepository
 * @package App\Repositories
 * @version July 31, 2020, 10:44 am UTC
 */

class PaletteGifRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'gif1',
        'gif2',
        // 'header_gif2',
        // 'header_ar_gif2',
        // 'content_gif2',
        // 'content_ar_gif2',
        'header_gif1',
        'header_ar_gif1',
        'content_gif1',
        'content_ar_gif1',
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
        return PaletteGif::class;
    }
}