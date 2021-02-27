@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            About  Contacts  Text
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($aboutContactsText, ['route' => ['aboutContactsTexts.update', $aboutContactsText->id], 'method' => 'patch']) !!}

                        @include('about__contacts__texts.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection