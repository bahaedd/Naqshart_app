<?php namespace Tests\Repositories;

use App\Models\Palette;
use App\Repositories\PaletteRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class PaletteRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var PaletteRepository
     */
    protected $paletteRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->paletteRepo = \App::make(PaletteRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_palette()
    {
        $palette = factory(Palette::class)->make()->toArray();

        $createdPalette = $this->paletteRepo->create($palette);

        $createdPalette = $createdPalette->toArray();
        $this->assertArrayHasKey('id', $createdPalette);
        $this->assertNotNull($createdPalette['id'], 'Created Palette must have id specified');
        $this->assertNotNull(Palette::find($createdPalette['id']), 'Palette with given id must be in DB');
        $this->assertModelData($palette, $createdPalette);
    }

    /**
     * @test read
     */
    public function test_read_palette()
    {
        $palette = factory(Palette::class)->create();

        $dbPalette = $this->paletteRepo->find($palette->id);

        $dbPalette = $dbPalette->toArray();
        $this->assertModelData($palette->toArray(), $dbPalette);
    }

    /**
     * @test update
     */
    public function test_update_palette()
    {
        $palette = factory(Palette::class)->create();
        $fakePalette = factory(Palette::class)->make()->toArray();

        $updatedPalette = $this->paletteRepo->update($fakePalette, $palette->id);

        $this->assertModelData($fakePalette, $updatedPalette->toArray());
        $dbPalette = $this->paletteRepo->find($palette->id);
        $this->assertModelData($fakePalette, $dbPalette->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_palette()
    {
        $palette = factory(Palette::class)->create();

        $resp = $this->paletteRepo->delete($palette->id);

        $this->assertTrue($resp);
        $this->assertNull(Palette::find($palette->id), 'Palette should not exist in DB');
    }
}
