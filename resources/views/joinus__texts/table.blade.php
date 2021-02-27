<div class="table-responsive">
    <table class="table" id="joinusTexts-table">
        <thead>
            <tr>
                <th>Text (En)</th>
                <th>Text (Ar)</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($joinusTexts as $joinusText)
            <tr>
                <td>{{ $joinusText->text_en }}</td>
                <td>{{ $joinusText->text_ar }}</td>
                <td>
                    {!! Form::open(['route' => ['joinusTexts.destroy', $joinusText->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('joinusTexts.show', [$joinusText->id]) }}" class='btn btn-default btn-xs'><i
                                class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('joinusTexts.edit', [$joinusText->id]) }}" class='btn btn-default btn-xs'><i
                                class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' =>
                        'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
