@extends('layouts.app')

@section('content')
<section class="content-header">
    <h1 class="pull-left"> Order Items Requests</h1>
    {{-- <h1 class="pull-right">
        <a class="btn btn-primary pull-right" style="margin-top: -10px;margin-bottom: 5px" href="{{ route('appliedartists.create') }}">Add New</a>
    </h1> --}}
</section>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/admin">Admin</a></li>
        <li class="breadcrumb-item active" aria-current="page"><a href="/orders"> Order Items Requests </a></li>
    </ol>
</nav>
<div class="content">
    <div class="clearfix"></div>

    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-primary">
        <div class="box-body">

                        <div class="table-responsive">
    <table class="table table-striped" id="appliedartists-table">
        <thead>
            <tr>
        <th>palette_id</th>
        <th>order_id</th>
        <th>size</th>

        <th>price</th>
        <th>quantity</th>


            </tr>
        </thead>
        <tbody>
        @foreach($appliedartists as $appliedartist)
            <tr>
            <td>{{ $appliedartist->palatte_id }} - {{ $appliedartist->lname }}</td>
            <td>{{ $appliedartist->order_id }}</td>
            <td>{{ $appliedartist->size }}</td>
            <td>{{ $appliedartist->price }}</td>
            <td>{{ $appliedartist->quantity }}</td>



            </tr>
        @endforeach
        </tbody>

    </table>

</div>

        </div>
    </div>
    <div class="text-center">

    </div>
</div>
@endsection
