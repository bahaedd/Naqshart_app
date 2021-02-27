<!-- Body1 En Field -->
<div class="form-group">
    {!! Form::label('body1_en', 'Body1 En:') !!}
    <p>{{ $aboutContent->body1_en }}</p>
</div>

<!-- Body1 Ar Field -->
<div class="form-group">
    {!! Form::label('body1_ar', 'Body1 Ar:') !!}
    <p>{{ $aboutContent->body1_ar }}</p>
</div>

<!-- Body Image Field -->
<div class="form-group">
    {!! Form::label('body_image', 'Body Image:') !!}
    <img src="{{ $aboutContent->body_image }}" style="width:120px;height:100px">
</div>

<!-- Body2 En Field -->
<div class="form-group">
    {!! Form::label('body2_en', 'Body2 En:') !!}
    <p>{{ $aboutContent->body2_en }}</p>
</div>

<!-- Body2 Ar Field -->
<div class="form-group">
    {!! Form::label('body2_ar', 'Body2 Ar:') !!}
    <p>{{ $aboutContent->body2_ar }}</p>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $aboutContent->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $aboutContent->updated_at }}</p>
</div>

