<div class="table-responsive">
    <table class="table" id="aboutContactsTexts-table">
        <thead>
            <tr>
                <th>Text (En)</th>
                <th>Text (Ar)</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($aboutContactsTexts as $aboutContactsText)
            <tr>
                <td>{{ $aboutContactsText->text_en }}</td>
                <td>{{ $aboutContactsText->text_ar }}</td>
                <td>
                    {!! Form::open(['route' => ['aboutContactsTexts.destroy', $aboutContactsText->id], 'method' =>
                    'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('aboutContactsTexts.show', [$aboutContactsText->id]) }}"
                            class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('aboutContactsTexts.edit', [$aboutContactsText->id]) }}"
                            class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
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
