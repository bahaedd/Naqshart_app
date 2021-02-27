<div class="table-responsive">
    <table class="table table-striped" id="paletteimages-table">
        <thead>
            <tr>
                <th>Img</th>
                <th>Palatte Id</th>
                <th colspan="3" style=" padding-left: 2%;">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($paletteimages as $paletteimage)
            <tr>
                <!-- <td>{{ $paletteimage->img }}</td> -->
                <td><img height="50" width="50" src="{{ $paletteimage->img }}" /></td>

                <td>{{ $paletteimage->palatte_id }}</td>
                <td>
                    {!! Form::open(['route' => ['paletteimages.destroy', $paletteimage->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a style=" margin-left: 15px;" href="{{ route('paletteimages.show', [$paletteimage->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a style=" margin-left: 15px;margin-right: 15px;"  href="{{ route('paletteimages.edit', [$paletteimage->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>