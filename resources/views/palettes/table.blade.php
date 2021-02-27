<div class="table-responsive">
    <table class="table table-striped" id="palettes-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Tag Name</th>
                <th>Image</th>
                {{-- <th>Image2</th> --}}
                <th>All Copies</th>
                <!-- <th>Avalible Copies</th> -->
                <!-- <th>S Copies</th> -->
                <th>S Left</th>
                <!-- <th>S Price</th> -->
                <!-- <th>M Copies</th> -->
                <th>M Left</th>
                <!-- <th>M Price</th> -->
                <!-- <th>L Copies</th> -->
                <th>L Left</th>
                <!-- <th>L Price</th> -->
                <!-- <th>Sizing Details</th> -->
                <!-- <th>Print Material</th> -->
                <!-- <th>Print Ink</th> -->
                <!-- <th>Print Finish</th> -->
                <!-- <th>Frame Material</th> -->
                <!-- <th>Frame Finish</th> -->
                <th>Artist Id</th>
                <th colspan="3" style=" padding-left: 2%;">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($palettes as $palette)
            <tr>
                <td>{{ $palette->name }}</td>
                <td>{{$palette->tag}}</td>
                <td><img height="50" width="50" src="{{ $palette->img }}" /></td>
                {{-- <td><img height="50" width="50" src="{{ $palette->img2 }}" /></td> --}}
                <td>{{ $palette->palette_copies }}</td>
                <!-- <td>{{ $palette->avalible_copies }}</td> -->
                <!-- <td>{{ $palette->S_copies }}</td> -->
                <td>{{ $palette->S_avalible }}</td>
                <!-- <td>{{ $palette->S_price }}</td> -->
                <!-- <td>{{ $palette->M_copies }}</td> -->
                <td>{{ $palette->M_avalible }}</td>
                <!-- <td>{{ $palette->M_price }}</td> -->
                <!-- <td>{{ $palette->L_copies }}</td> -->
                <td>{{ $palette->L_avalible }}</td>
                <!-- <td>{{ $palette->L_price }}</td>
                <td>{{ $palette->sizing_details }}</td>
                <td>{{ $palette->print_material }}</td>
                <td>{{ $palette->print_ink }}</td>
                <td>{{ $palette->print_finish }}</td>
                <td>{{ $palette->frame_material }}</td>
                <td>{{ $palette->frame_finish }}</td>-->
                <td>{{ $palette->artist_id }}</td>
                <td>
                    {!! Form::open(['route' => ['palettes.destroy', $palette->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a style=" margin-left: 15px;" href="{{ route('palettes.show', [$palette->id]) }}"
                            class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a style=" margin-left: 15px;margin-right: 15px;"
                            href="{{ route('palettes.edit', [$palette->id]) }}" class='btn btn-default btn-xs'><i
                                class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' =>
                        'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}

                        <a style=" margin-left: 15px;margin-right: 15px;"
                            href="{{ route('paletteimages.show', [$palette->id]) }}" class='btn btn-default btn-xs'> <i
                                class="fa fa-info-circle" aria-hidden="true"></i></a>
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <div class="center" style="display: flex;justify-content: center;">{{$palettes->links()}}</div>

</div>
