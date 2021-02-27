<!-- Name En Field -->
<div class="form-group">
    {!! Form::label('name_en', 'Name En:') !!}
    <p>{{ $aboutAretists->name_en }}</p>
</div>

<!-- Name Ar Field -->
<div class="form-group">
    {!! Form::label('name_ar', 'Name Ar:') !!}
    <p>{{ $aboutAretists->name_ar }}</p>
</div>

<!-- Social Link Field -->
<div class="form-group">
    {!! Form::label('sociallink', 'Social Link:') !!}
    <p>{{ $aboutAretists->sociallink }}</p>
</div>

<!-- Image Ar Field -->
<div class="form-group">
    {!! Form::label('image_ar', 'Image Ar:') !!}
    <img src="{{ $aboutAretists->image_ar }}" style="width:120px;height:100px">
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $aboutAretists->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $aboutAretists->updated_at }}</p>
</div>

