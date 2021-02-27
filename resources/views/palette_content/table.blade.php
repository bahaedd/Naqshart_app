<div class="table-responsive">
    <table class="table" id="paletteContent-table">
        <thead>
            <tr>
                <th>Sizing Details</th>
                <th>Sizing Details (Ar)</th>
                <th>Print Material</th>
                <th>Print Material (Ar)</th>
                <th>Print Ink</th>
                <th>Print Ink (Ar)</th>
                <th>Print Finish</th>
                <th>Print Finish (Ar)</th>
                <th>Frame Material</th>
                <th>Frame Material (Ar)</th>
                <th>Frame Finish</th>
                <th>Frame Finish (Ar)</th>
                <th>shipping</th>
                <th>shipping (Ar)</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($paletteContents as $aboutContent)
            <tr>
                <td>{{ $aboutContent->sizing_details }}</td>
                <td>{{ $aboutContent->sizing_details_ar }}</td>
                <td>{{ $aboutContent->print_material }}</td>
                <td>{{ $aboutContent->print_material_ar }}</td>
                <td>{{ $aboutContent->print_ink }}</td>
                <td>{{ $aboutContent->print_ink_ar }}</td>
                <td>{{ $aboutContent->print_finish }}</td>
                <td>{{ $aboutContent->print_finish_ar }}</td>
                <td>{{ $aboutContent->frame_material }}</td>
                <td>{{ $aboutContent->frame_material_ar }}</td>
                <td>{{ $aboutContent->frame_finish }}</td>
                <td>{{ $aboutContent->frame_finish_ar }}</td>
                <td>{{ $aboutContent->shipping }}</td>
                <td>{{ $aboutContent->shipping_ar }}</td>
                <td>
                    {!! Form::open(['route' => ['paletteContent.destroy', $aboutContent->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('paletteContent.show', [$aboutContent->id]) }}"
                            class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('paletteContent.edit', [$aboutContent->id]) }}"
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
