@extends('layouts.app')

@section('content')

<section class="content-header">
    <h1 class="pull-left">Palette Images</h1>
    <h1 class="pull-right">
    <a class="btn btn-primary pull-right" style="margin-top: -10px;margin-bottom: 5px" href="{{  route('addimgpalette',$id) }}">Add New</a>
    </h1>
</section>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/admin">Admin</a></li>
        <li class="breadcrumb-item"><a href="/palettes">Palettes</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{$id}}</li>
    </ol>
</nav>
<div class="content">
    <div class="box box-primary">
        <div class="box-body">
            <div class="row" style="padding-left: 20px">
                @include('paletteimages.show_fields')
                <!-- <a href="{{ route('paletteimages.index') }}" class="btn btn-default">Back</a> -->
            </div>
        </div>
    </div>
</div>
@endsection