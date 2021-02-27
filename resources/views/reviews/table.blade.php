<div class="table-responsive">
    <table class="table table-striped" id="reviews-table">
        <thead>
            <tr>
                <th>Name</th>
                <!-- <th>Email</th> -->
                <th>Title</th>
                <th>Review Comment</th>
                <th><i class="fa fa-star fa-2x" aria-hidden="true" style="color: gold;"></i>
                </th>
                <th><i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true" style="color: green;"></i>
                </th>
                <th><i class="fa fa-thumbs-o-down fa-2x" aria-hidden="true" style="color: red;"></i>
                </th>
                <th colspan="3" style=" padding-left: 2%;">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($reviews as $review)
            <tr>
                <td>{{ $review->name }}</td>
                <!-- <td>{{ $review->email }}</td> -->
                <td>{{ $review->title }}</td>
                <td>{{ $review->body }}</td>
                <td style=" padding-left: 15px;">{{ $review->rate }}</td>
                <td style=" padding-left: 15px;">{{ $review->like_counter }}</td>
                <td style=" padding-left: 15px;">{{ $review->dislike_counter }}</td>
                <td>
                    {!! Form::open(['route' => ['reviews.destroy', $review->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a style=" margin-left: 15px;" href="{{ route('reviews.show', [$review->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open "></i></a>
                        
                        <a style=" margin-left: 15px;margin-right: 15px;" href="{{ route('reviews.edit', [$review->id]) }}" class='btn btn-default btn-xs '><i class="glyphicon glyphicon-edit "></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>