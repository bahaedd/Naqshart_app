@extends('layouts.app')

@section('content')
<section class="content-header">
    <h1>
        About Content
    </h1>
</section>
<div class="content">
    @include('adminlte-templates::common.errors')
    <div class="box box-primary">
        <div class="box-body">
            <div class="row">
                {!! Form::open(['route' => 'paletteContent.store', 'files' => true]) !!}

                @include('palette_content.fields')

                {!! Form::close() !!}
            </div>
        </div>
    </div>
</div>
@endsection
