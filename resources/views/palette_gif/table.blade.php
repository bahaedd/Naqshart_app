<div class="table-responsive">
    <table class="table" id="paletteGif-table">
        <thead>
            <tr>
                <th>Gif1</th>
                <th>Gif2</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($paletteGifs as $aboutContent)
            <tr>

                <td><img src="{{ $aboutContent->gif1 }}" style="width:120px;height:100px"></td>
                <td><img src="{{ $aboutContent->gif2 }}" style="width:120px;height:100px"></td>

                <td>
                    {!! Form::open(['route' => ['paletteGif.destroy', $aboutContent->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('paletteGif.show', [$aboutContent->id]) }}" class='btn btn-default btn-xs'><i
                                class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('paletteGif.edit', [$aboutContent->id]) }}" class='btn btn-default btn-xs'><i
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
