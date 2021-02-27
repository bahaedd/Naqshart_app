<!-- Name En Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name_en', 'Name En:') !!}
    {!! Form::text('name_en', null, ['class' => 'form-control','maxlength' => 30]) !!}
</div>

<!-- Name Ar Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name_ar', 'Name Ar:') !!}
    {!! Form::text('name_ar', null, ['class' => 'form-control','maxlength' => 30]) !!}
</div>

<!-- Social Link Field -->
<div class="form-group col-sm-6">
    {!! Form::label('sociallink', 'Social Link:') !!}
    {!! Form::text('sociallink', null, ['class' => 'form-control','maxlength' => 30]) !!}
</div>
<!-- Image Ar Field -->
<div class="form-group col-sm-6">
    {!! Form::label('image_ar', 'Image Ar:') !!}
    {!! Form::file('image_ar') !!}
</div>
<div class="clearfix"></div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('aboutAretists.index') }}" class="btn btn-default">Cancel</a>
</div>
