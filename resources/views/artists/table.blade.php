<div class="table-responsive">
    <table class="table table-striped" id="artists-table">
        <thead>
            <tr>
                <th>Name</th>
                <!-- <th>Palette Description</th> -->
                {{-- <th>Email</th> --}}
                <!-- <th>Artist Img</th> -->
                <th>Cover Img</th>
                <th colspan="3" style=" padding-left: 2%;">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($artists as $artist)
            <tr>
                <td>{{ $artist->name }}</td>
                {{-- <!-- <td>{{ $artist->Plates_description }}</td> --> --}}
                {{-- <td>{{ $artist->email }}</td> --}}
                <!-- <td><img height="50" width="50" src="{{ $artist->artist_img }}" /></td> -->
                <td><img height="50" width="50" src="{{ $artist->cover_img }}" /></td>
                <td>
                    {!! Form::open(['route' => ['artists.destroy', $artist->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a style=" margin-left: 15px;" href="{{ route('artists.show', [$artist->id]) }}"
                            class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a style=" margin-left: 15px;margin-right: 15px;"
                            href="{{ route('artists.edit', [$artist->id]) }}" class='btn btn-default btn-xs'><i
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
    <div class="center" style="display: flex;justify-content: center;">{{$artists->links()}}</div>

</div>
