<!-- Name Field -->
<div class="form-group">
    {!! Form::label('name', 'Name:') !!}
    <p>{{ $artist->name }}</p>
</div>

<!-- Plates Description Field -->
<div class="form-group">
    {!! Form::label('Plates_description', 'Plates Description:') !!}
    <p>{{ $artist->Plates_description }}</p>
</div>

<!-- Email Field -->
<div class="form-group">
    {!! Form::label('email', 'Email:') !!}
    <p>{{ $artist->email }}</p>
</div>

<!-- Artist Img Field
<div class="form-group">
    {!! Form::label('artist_img', 'Artist Img:') !!}
    <p>{{ $artist->artist_img }}</p>
</div> -->

<!-- Cover Img Field -->
<div class="form-group">
    {!! Form::label('cover_img', 'Cover Img:') !!}
    <p>{{ $artist->cover_img }}</p>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $artist->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $artist->updated_at }}</p>
</div>

