@extends('layouts.app')

@section('content')

<link rel="stylesheet" href="css/admin/index.css">

<div class="container">
    <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
    </nav> -->
<br> <br><br> <br>

    <div class="row">
        <div class="col-sm-12 col-md-6">
            <a href="/artists">
                <div class="card" style="margin: 0 auto;">
                    <!-- <img class="card-img-top" src="images/art2.png"> -->
                    <!-- <i class="fa fa-users fa-4x" aria-hidden="true"></i> -->
                    <i class="fa fa-user" aria-hidden="true"></i>

                    <div class="card-body">
                        <p> Artists <span>{{$artists}}</span> </p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-sm-12 col-md-6">
            <a href="/palettes">
                <div class="card">
                    <!-- <img class="card-img-top" src="images/art.png"> -->
                    <i class='fas fa-palette'></i>
                    <div class="card-body">
                        <p> Palettes <span>{{$palettes}}</span></p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>

@endsection
<script src='https://kit.fontawesome.com/a076d05399.js'></script>