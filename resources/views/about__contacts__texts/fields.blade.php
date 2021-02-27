<!-- Text En Field -->
<div class="form-group col-sm-6">
    {!! Form::label('text_en', 'Text En:') !!}
    {!! Form::textarea('text_en', null, ['class' => 'form-control']) !!}
</div>

<!-- Text Ar Field -->
<div class="form-group col-sm-6">
    {!! Form::label('text_ar', 'Text Ar:') !!}
    {!! Form::textarea('text_ar', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('aboutContactsTexts.index') }}" class="btn btn-default">Cancel</a>
</div>
