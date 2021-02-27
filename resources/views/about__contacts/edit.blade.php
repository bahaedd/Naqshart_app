@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            About  Contact
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($aboutContact, ['route' => ['aboutContacts.update', $aboutContact->id], 'method' => 'patch']) !!}

                        @include('about__contacts.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection