<div class="table-responsive">
    <table class="table table-striped" id="discounts-table">
        <thead>
            <tr>
                <th>Code</th>
        <th>Discount Percentage</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
        @foreach($discounts as $discount)
            <tr>
                <td>{{ $discount->code }}</td>
            <td>{{ $discount->discount_percentage }}</td>
                <td>
                    {!! Form::open(['route' => ['discounts.destroy', $discount->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a style=" margin-left: 15px;" href="{{ route('discounts.show', [$discount->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a style=" margin-left: 15px;margin-right: 15px;"href="{{ route('discounts.edit', [$discount->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
