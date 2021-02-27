@extends('layouts.app')

@section('content')
<link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
<link rel="stylesheet" href="css/admin/font.css">
<section class="content-header">
    <h1 class="pull-left">Palettes</h1>
    <h1 class="pull-right">
        <a class="btn btn-primary pull-right" style="margin-top: -10px;margin-bottom: 5px" href="{{ route('palettes.create') }}">Add New</a>
    </h1>
</section>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/admin">Admin</a></li>
        <li class="breadcrumb-item active" aria-current="page">Palettes</li>
    </ol>
</nav>
<div class="content">
    <div class="clearfix"></div>

    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-primary">
        <div class="box-body">
            @include('palettes.table')
        </div>
    </div>
    <div class="text-center">

    </div>
</div>
@endsection