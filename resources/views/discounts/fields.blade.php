<!-- Code Field -->
<div class="form-group col-sm-6">
    {!! Form::label('code', 'Code:') !!}
    {!! Form::text('code', null, ['class' => 'form-control']) !!}
</div>

<!-- Discount Percentage Field -->
<div class="form-group col-sm-6">
    {!! Form::label('discount_percentage', 'Discount Percentage:') !!}
    {!! Form::text('discount_percentage', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('discounts.index') }}" class="btn btn-default">Cancel</a>
</div>
