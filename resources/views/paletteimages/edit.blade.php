@extends('layouts.app')

@section('content')
<section class="content-header">
    <h1>
        Paletteimage
    </h1>
</section>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/admin">Admin</a></li>
        <li class="breadcrumb-item"><a href="/appliedartists">Applied Artists</a></li>
        <li class="breadcrumb-item active" aria-current="page">Edit</li>
    </ol>
</nav>
<div class="content">
    @include('adminlte-templates::common.errors')
    <div class="box box-primary">
        <div class="box-body">
            <div class="row">
                {!! Form::model($paletteimage, ['route' => ['paletteimages.update', $paletteimage->id], 'method' => 'patch', 'files' => true]) !!}

                @include('paletteimages.fields')

                {!! Form::close() !!}
            </div>
        </div>
    </div>
</div>
@endsection