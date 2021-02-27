<div class="form-group col-sm-12">
    {!! Form::label('gif1', 'Gif1:') !!}
    {!! Form::file('gif1') !!}
</div>


<div class="form-group col-sm-6">
    {!! Form::label('header_gif1', 'Gif1 Header:') !!}
    {!! Form::text('header_gif1', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('header_ar_gif1', 'Gif1 Header(Ar):') !!}
    {!! Form::text('header_ar_gif1', null, ['class' => 'form-control','required']) !!}
</div>
{{-- content --}}
<div class="form-group col-sm-6">
    {!! Form::label('content', 'Gif1 Content:') !!}
    {!! Form::textarea('content_gif1',null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('content_ar_gif1', 'Gif1 Content(Ar):') !!}
    {!! Form::textarea('content_ar_gif1',null, ['class' => 'form-control','required','style'=>'direction: rtl']) !!}
</div>
<div class="clearfix"></div>
<div class="form-group col-sm-6">
    {!! Form::label('gif2', 'Gif2:') !!}
    {!! Form::file('gif2') !!}
</div>

<div class="clearfix"></div>
{{-- <div class="form-group col-sm-6">
    {!! Form::label('header_gif2', 'Gif2 Header:') !!}
    {!! Form::text('header_gif2', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('header_ar_gif2', 'Gif2 Header(Ar):') !!}
    {!! Form::text('header_ar_gif2', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('content', 'Gif2 Content:') !!}
    {!! Form::textarea('content_gif2',null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('content_ar_gif2', 'Gif2 Content(Ar):') !!}
    {!! Form::textarea('content_ar_gif2',null, ['class' => 'form-control','required','style'=>'direction: rtl']) !!}
</div> --}}


<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('paletteGif.index') }}" class="btn btn-default">Cancel</a>
</div>
