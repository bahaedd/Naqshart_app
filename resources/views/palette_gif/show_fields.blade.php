<!-- Body Image Field -->
<div class="form-group">
    {!! Form::label('gif1', 'Gif1:') !!}
    <img src="{{ env('APP_URL').$paletteGif->gif1 }}" style="width:200px;height:200px">
</div>
<div class="form-group">
    {!! Form::label('header_ar_gif1', 'Gif1 Header (Ar):') !!}
    <p>{{ $paletteGif->header_ar_gif1 }}</p>
</div>
<div class="form-group">
    {!! Form::label('header_gif1', 'Gif1 Header (En):') !!}
    <p>{{ $paletteGif->header_gif1 }}</p>
</div>
<div class="form-group">
    {!! Form::label('content_ar_gif1', 'Gif1 Content (Ar):') !!}
    <p>{{ $paletteGif->content_ar_gif1 }}</p>
</div>
<div class="form-group">
    {!! Form::label('content_gif1', 'Gif1 Content (En):') !!}
    <p>{{ $paletteGif->content_gif1 }}</p>
</div>
<div class="form-group">
    {!! Form::label('gif2', 'Gif2:') !!}
    <img src="{{ env('APP_URL').$paletteGif->gif2 }}" style="width:200px;height:100px">
</div>
{{-- <div class="form-group">
    {!! Form::label('header_ar_gif2', 'Gif2 Header (Ar):') !!}
    <p>{{ $paletteGif->header_ar_gif2 }}</p>
</div>
<div class="form-group">
    {!! Form::label('header_gif2', 'Gif2 Header (En):') !!}
    <p>{{ $paletteGif->header_gif2 }}</p>
</div>
<div class="form-group">
    {!! Form::label('content_ar_gif2', 'Gif2 Content (Ar):') !!}
    <p>{{ $paletteGif->content_ar_gif2 }}</p>
</div>
<div class="form-group">
    {!! Form::label('content_gif2', 'Gif2 Content (En):') !!}
    <p>{{ $paletteGif->content_gif2 }}</p>
</div> --}}
<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $paletteGif->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $paletteGif->updated_at }}</p>
</div>
