<!-- Word1 En Field -->
<div class="form-group">
    {!! Form::label('word1_en', 'Word1 En:') !!}
    <p>{{ $homeData->word1_en }}</p>
</div>

<!-- Word1 Ar Field -->
<div class="form-group">
    {!! Form::label('word1_ar', 'Word1 Ar:') !!}
    <p>{{ $homeData->word1_ar }}</p>
</div>

<!-- Word2 En Field -->
<div class="form-group">
    {!! Form::label('word2_en', 'Word2 En:') !!}
    <p>{{ $homeData->word2_en }}</p>
</div>

<!-- Word2 Ar Field -->
<div class="form-group">
    {!! Form::label('word2_ar', 'Word2 Ar:') !!}
    <p>{{ $homeData->word2_ar }}</p>
</div>

<!-- Word3 En Field -->
<div class="form-group">
    {!! Form::label('word3_en', 'Word3 En:') !!}
    <p>{{ $homeData->word3_en }}</p>
</div>

<!-- Word3 Ar Field -->
<div class="form-group">
    {!! Form::label('word3_ar', 'Word3 Ar:') !!}
    <p>{{ $homeData->word3_ar }}</p>
</div>

<!-- Image Field -->
<div class="form-group">
    {!! Form::label('image', 'Image:') !!}

     <img style="width: 300;height:300px" src="/{{ $homeData->image }}" alt="ssss" srcset="">
</div>
<!-- Video Field -->
<div class="form-group">
    {!! Form::label('video', 'Video:') !!}
    <img style="width: 300;height:300px" src="/{{ $homeData->video }}" alt="ssss" srcset="">

</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $homeData->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $homeData->updated_at }}</p>
</div>

