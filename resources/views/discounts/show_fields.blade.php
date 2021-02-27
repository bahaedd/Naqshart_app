<!-- Code Field -->
<div class="form-group">
    {!! Form::label('code', 'Code:') !!}
    <p>{{ $discount->code }}</p>
</div>

<!-- Discount Percentage Field -->
<div class="form-group">
    {!! Form::label('discount_percentage', 'Discount Percentage:') !!}
    <p>{{ $discount->discount_percentage }}</p>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $discount->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $discount->updated_at }}</p>
</div>

