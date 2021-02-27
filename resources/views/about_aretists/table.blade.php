<div class="table-responsive">
    <table class="table" id="aboutAretists-table">
        <thead>
            <tr>
                <th>Name (En)</th>
                <th>Name (Ar)</th>
                <th>Social Link</th>
                <th>Image </th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($aboutAretists as $aboutAretists)
            <tr>
                <td>{{ $aboutAretists->name_en }}</td>
                <td>{{ $aboutAretists->name_ar }}</td>
                <td>{{$aboutAretists->sociallink}}</td>
                <td><img src="{{ $aboutAretists->image_ar }}" style="width:120px;height:100px"></td>
                <td>
                    {!! Form::open(['route' => ['aboutAretists.destroy', $aboutAretists->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('aboutAretists.show', [$aboutAretists->id]) }}"
                            class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('aboutAretists.edit', [$aboutAretists->id]) }}"
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
