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
                   {!! Form::model($aboutContent, ['route' => ['aboutContents.update', $aboutContent->id], 'method' => 'patch', 'files' => true]) !!}

                        @include('about_contents.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection