<div class="form-group col-sm-6">
    {!! Form::label('sizing_details', 'Sizing Details:') !!}
    {!! Form::text('sizing_details', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('sizing_details_ar', 'Sizing Details(Ar):') !!}
    {!! Form::text('sizing_details_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Print Material Field -->
<div class="form-group col-sm-6">
    {!! Form::label('print_material', 'Print Material:') !!}
    {!! Form::text('print_material', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('print_material_ar', 'Print Material(Ar):') !!}
    {!! Form::text('print_material_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Print Ink Field -->
<div class="form-group col-sm-6">
    {!! Form::label('print_ink', 'Print Ink:') !!}
    {!! Form::text('print_ink', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('print_ink_ar', 'Print Ink(Ar):') !!}
    {!! Form::text('print_ink_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Print Finish Field -->
<div class="form-group col-sm-6">
    {!! Form::label('print_finish', 'Print Finish:') !!}
    {!! Form::text('print_finish', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('print_finish_ar', 'Print Finish(Ar):') !!}
    {!! Form::text('print_finish_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Frame Material Field -->
<div class="form-group col-sm-6">
    {!! Form::label('frame_material', 'Frame Material:') !!}
    {!! Form::text('frame_material', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('frame_material_ar', 'Frame Material(Ar):') !!}
    {!! Form::text('frame_material_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Frame Finish Field -->
<div class="form-group col-sm-6">
    {!! Form::label('frame_finish', 'Frame Finish:') !!}
    {!! Form::text('frame_finish', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('frame_finish_ar', 'Frame Finish(Ar):') !!}
    {!! Form::text('frame_finish_ar', null, ['class' => 'form-control','required']) !!}
</div>
<!-- Frame Shipping Field -->
<div class="form-group col-sm-6">
    {!! Form::label('shipping', 'Shipping:') !!}
    {!! Form::textarea('shipping', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('shipping_ar', 'Shipping(Ar):') !!}
    {!! Form::textarea('shipping_ar', null, ['class' => 'form-control','required','style'=>'direction: rtl']) !!}
</div>
<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('paletteContent.index') }}" class="btn btn-default">Cancel</a>
</div>
