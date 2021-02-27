<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\Palette;

class PaletteApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_palette()
    {
        $palette = factory(Palette::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/palettes', $palette
        );

        $this->assertApiResponse($palette);
    }

    /**
     * @test
     */
    public function test_read_palette()
    {
        $palette = factory(Palette::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/palettes/'.$palette->id
        );

        $this->assertApiResponse($palette->toArray());
    }

    /**
     * @test
     */
    public function test_update_palette()
    {
        $palette = factory(Palette::class)->create();
        $editedPalette = factory(Palette::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/palettes/'.$palette->id,
            $editedPalette
        );

        $this->assertApiResponse($editedPalette);
    }

    /**
     * @test
     */
    public function test_delete_palette()
    {
        $palette = factory(Palette::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/palettes/'.$palette->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/palettes/'.$palette->id
        );

        $this->response->assertStatus(404);
    }
}
