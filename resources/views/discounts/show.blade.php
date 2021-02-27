@extends('layouts.app')

@section('content')
<section class="content-header">
    <h1>
        Discount
    </h1>
</section>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/admin">Admin</a></li>
        <li class="breadcrumb-item"><a href="/appliedartists">Applied Artists</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{$discount->code}}</li>
    </ol>
</nav>
<div class="content">
    <div class="box box-primary">
        <div class="box-body">
            <div class="row" style="padding-left: 20px">
                @include('discounts.show_fields')
                <a href="{{ route('discounts.index') }}" class="btn btn-default">Back</a>
            </div>
        </div>
    </div>
</div>
@endsection