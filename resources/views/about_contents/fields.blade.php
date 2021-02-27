<!-- Body1 En Field -->
<div class="form-group col-sm-12 col-lg-12">
    {!! Form::label('body1_en', 'Body1 En:') !!}
    {{-- {!! Form::textarea('body1_en', null, ['class' => 'form-control','minlength' => 200]) !!} --}}
    {!! Form::textarea('body1_en', null, ['class' => 'form-control']) !!}
</div>

<!-- Body1 Ar Field -->
<div class="form-group col-sm-12 col-lg-12">
    {!! Form::label('body1_ar', 'Body1 Ar:') !!}
    {{-- {!! Form::textarea('body1_ar', null, ['class' => 'form-control','minlength' => 200]) !!} --}}
    {!! Form::textarea('body1_ar', null, ['class' => 'form-control']) !!}
</div>

<!-- Body Image Field -->
<div class="form-group col-sm-6">
    {!! Form::label('body_image', 'Body Image:') !!}
    {!! Form::file('body_image') !!}
</div>
<div class="clearfix"></div>

<!-- Body2 En Field -->
<div class="form-group col-sm-12 col-lg-12">
    {!! Form::label('body2_en', 'Body2 En:') !!}
    {{-- {!! Form::textarea('body2_en', null, ['class' => 'form-control','minlength' => 100]) !!} --}}
    {!! Form::textarea('body2_en', null, ['class' => 'form-control']) !!}
</div>

<!-- Body2 Ar Field -->
<div class="form-group col-sm-12 col-lg-12">
    {!! Form::label('body2_ar', 'Body2 Ar:') !!}
    {{-- {!! Form::textarea('body2_ar', null, ['class' => 'form-control','minlength' => 100]) !!} --}}
    {!! Form::textarea('body2_ar', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('aboutContents.index') }}" class="btn btn-default">Cancel</a>
</div>
