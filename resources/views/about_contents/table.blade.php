<div class="table-responsive">
    <table class="table" id="aboutContents-table">
        <thead>
            <tr>
                <th>Body1 (En)</th>
                <th>Body1 (Ar)</th>
                <th>Body Image</th>
                <th>Body2 (En)</th>
                <th>Body2 (Ar)</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($aboutContents as $aboutContent)
            <tr>
                <td>{{ $aboutContent->body1_en }}</td>
                <td>{{ $aboutContent->body1_ar }}</td>
                <td><img src="{{ $aboutContent->body_image }}" style="width:120px;height:100px"></td>
                <td>{{ $aboutContent->body2_en }}</td>
                <td>{{ $aboutContent->body2_ar }}</td>
                <td>
                    {!! Form::open(['route' => ['aboutContents.destroy', $aboutContent->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('aboutContents.show', [$aboutContent->id]) }}"
                            class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('aboutContents.edit', [$aboutContent->id]) }}"
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
