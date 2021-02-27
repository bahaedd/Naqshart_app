<!-- Word1 En Field -->
<div class="form-group col-sm-6">
    {!! Form::label('word1_en', 'Word1 En:') !!}
    {!! Form::text('word1_en', null, ['class' => 'form-control']) !!}
</div>

<!-- Word1 Ar Field -->
<div class="form-group col-sm-6">
    {!! Form::label('word1_ar', 'Word1 Ar:') !!}
    {!! Form::text('word1_ar', null, ['class' => 'form-control']) !!}
</div>

<!-- Word2 En Field -->
<div class="form-group col-sm-6">
    {!! Form::label('word2_en', 'Word2 En:') !!}
    {!! Form::text('word2_en', null, ['class' => 'form-control']) !!}
</div>

<!-- Word2 Ar Field -->
<div class="form-group col-sm-6">
    {!! Form::label('word2_ar', 'Word2 Ar:') !!}
    {!! Form::text('word2_ar', null, ['class' => 'form-control']) !!}
</div>

<!-- Word3 En Field -->
{{-- <div class="form-group col-sm-6">
    {!! Form::label('word3_en', 'Word3 En:') !!}
    {!! Form::text('word3_en', null, ['class' => 'form-control','maxlength' => 200]) !!}
</div> --}}

<!-- Word3 Ar Field -->
{{-- <div class="form-group col-sm-6">
    {!! Form::label('word3_ar', 'Word3 Ar:') !!}
    {!! Form::text('word3_ar', null, ['class' => 'form-control','maxlength' => 200]) !!}
</div> --}}

<!-- Image Field -->
<div class="form-group col-sm-6">
    {!! Form::label('image', 'Image:') !!}
    {!! Form::file('image') !!}
</div>
<div class="clearfix"></div>

<!-- Video Field -->
<div class="form-group col-sm-6">
    {!! Form::label('video', 'Video:') !!}
    {!! Form::file('video') !!}
</div>
<div class="clearfix"></div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('homeDatas.index') }}" class="btn btn-default">Cancel</a>
</div>
