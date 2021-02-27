<!-- Name Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name', 'Name:') !!}
    {!! Form::text('name', null, ['class' => 'form-control']) !!}
</div>

<!-- Plates Description Field -->
{{-- <div class="form-group col-sm-6">
    {!! Form::label('Plates_description', 'Plates Description:') !!}
    {!! Form::text('Plates_description', null, ['class' => 'form-control']) !!}
</div> --}}

<!-- Email Field -->
{{-- <div class="form-group col-sm-6">
    {!! Form::label('email', 'Email:') !!}
    {!! Form::email('email', null, ['class' => 'form-control']) !!}
</div> --}}

<!-- Artist Img Field -->
{{-- <div class="form-group col-sm-6">
    {!! Form::label('artist_img', 'Artist Img:') !!}
    {!! Form::file('artist_img') !!}
</div> --}}
<div class="clearfix"></div>

<!-- Cover Img Field -->
<div class="form-group col-sm-6">
    {!! Form::label('cover_img', 'Cover Img:') !!}
    {!! Form::file('cover_img') !!}
</div>
<div class="clearfix"></div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('artists.index') }}" class="btn btn-default">Cancel</a>
</div>
