<!-- Img Field -->
<div class="form-group col-sm-6">
    {!! Form::label('img', 'Img:') !!}
    {!! Form::file('img[]',['multiple']) !!}
</div>
<div class="clearfix"></div>

<!-- Palatte Id Field -->
<!-- <div class="form-group col-sm-6">
    {!! Form::label('palatte_id', 'Palatte Id:') !!}
    {!! Form::select('palatte_id', $paletteItems, null, ['class' => 'form-control']) !!}
</div> -->
{!! Form::hidden('palatte_id', $palette) !!} 
<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('paletteimages.index') }}" class="btn btn-default">Cancel</a>
</div>
