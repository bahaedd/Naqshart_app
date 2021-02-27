@extends('layouts.app')

@section('content')
<section class="content-header">
    <h1>
        Palette Content
    </h1>
</section>
<div class="content">
    @include('adminlte-templates::common.errors')
    <div class="box box-primary">
        <div class="box-body">
            <div class="row">
                {!! Form::model($paletteContent, ['route' => ['paletteContent.update', $paletteContent->id], 'method' =>
                'patch', 'files' => true]) !!}

                @include('palette_content.fields')

                {!! Form::close() !!}
            </div>
        </div>
    </div>
</div>
@endsection
