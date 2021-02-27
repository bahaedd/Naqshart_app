<!-- Body Image Field -->
<div class="form-group">
    {!! Form::label('gif1', 'Gif1:') !!}
    <img src="{{ env('APP_URL').$homeGif->gif1 }}" style="width:200px;height:200px">
</div>
<div class="form-group">
    {!! Form::label('header_ar_gif1', 'Gif1 Header (Ar):') !!}
    <p>{{ $homeGif->header_ar_gif1 }}</p>
</div>
<div class="form-group">
    {!! Form::label('header_gif1', 'Gif1 Header (En):') !!}
    <p>{{ $homeGif->header_gif1 }}</p>
</div>
<div class="form-group">
    {!! Form::label('content_ar_gif1', 'Gif1 Content (Ar):') !!}
    <p>{{ $homeGif->content_ar_gif1 }}</p>
</div>
<div class="form-group">
    {!! Form::label('content_gif1', 'Gif1 Content (En):') !!}
    <p>{{ $homeGif->content_gif1 }}</p>
</div>
{{-- <div class="form-group">
    {!! Form::label('gif2', 'Gif2:') !!}
    <img src="{{ env('APP_URL').$homeGif->gif2 }}" style="width:200px;height:100px">
</div> --}}
{{-- <div class="form-group">
    {!! Form::label('header_ar_gif2', 'Gif2 Header (Ar):') !!}
    <p>{{ $homeGif->header_ar_gif2 }}</p>
</div>
<div class="form-group">
    {!! Form::label('header_gif2', 'Gif2 Header (En):') !!}
    <p>{{ $homeGif->header_gif2 }}</p>
</div>
<div class="form-group">
    {!! Form::label('content_ar_gif2', 'Gif2 Content (Ar):') !!}
    <p>{{ $homeGif->content_ar_gif2 }}</p>
</div>
<div class="form-group">
    {!! Form::label('content_gif2', 'Gif2 Content (En):') !!}
    <p>{{ $homeGif->content_gif2 }}</p>
</div> --}}
<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $homeGif->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $homeGif->updated_at }}</p>
</div>
