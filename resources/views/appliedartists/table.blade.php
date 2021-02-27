<div class="table-responsive">
    <table class="table table-striped" id="appliedartists-table">
        <thead>
            <tr>
                <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Social Link</th>
                <th colspan="3" style=" padding-left: 2%;">Action</th>
            </tr>
        </thead>
        <tbody>
        @foreach($appliedartists as $appliedartist)
            <tr>
                <td>{{ $appliedartist->name }}</td>
            <td>{{ $appliedartist->email }}</td>
            <td>{{ $appliedartist->phone }}</td>
            <td>{{$appliedartist->socialLink}}</td>
                <td>
                    {!! Form::open(['route' => ['appliedartists.destroy', $appliedartist->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a style=" margin-left: 15px;" href="{{ route('appliedartists.show', [$appliedartist->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a style=" margin-left: 15px;margin-right: 15px;"  href="{{ route('appliedartists.edit', [$appliedartist->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
