<div class="table-responsive">
    <table class="table" id="aboutContacts-table">
        <thead>
            <tr>
                <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Message</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
        @foreach($aboutContacts as $aboutContact)
            <tr>
                <td>{{ $aboutContact->name }}</td>
            <td>{{ $aboutContact->email }}</td>
            <td>{{ $aboutContact->phone }}</td>
            <td>{{ $aboutContact->message }}</td>
                <td>
                    {!! Form::open(['route' => ['aboutContacts.destroy', $aboutContact->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('aboutContacts.show', [$aboutContact->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('aboutContacts.edit', [$aboutContact->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
