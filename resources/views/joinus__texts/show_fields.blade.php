<!-- Text En Field -->
<div class="form-group">
    {!! Form::label('text_en', 'Text En:') !!}
    <p>{{ $joinusText->text_en }}</p>
</div>

<!-- Text Ar Field -->
<div class="form-group">
    {!! Form::label('text_ar', 'Text Ar:') !!}
    <p>{{ $joinusText->text_ar }}</p>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $joinusText->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $joinusText->updated_at }}</p>
</div>

