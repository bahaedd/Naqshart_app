<div class="table-responsive">
    <table class="table" id="homeDatas-table">
        <thead>
            <tr>
                <th>Word1 (En)</th>
                <th>Word1 (Ar)</th>
                <th>Word2 (En)</th>
                <th>Word2 (Ar)</th>
                {{-- <th>Word3 (En)</th> --}}
                {{-- <th>Word3 (Ar)</th> --}}
                <th>Image</th>
                <th>Video</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($homeDatas as $homeData)
            <tr>
                <td>{{ $homeData->word1_en }}</td>
                <td>{{ $homeData->word1_ar }}</td>
                <td>{{ $homeData->word2_en }}</td>
                <td>{{ $homeData->word2_ar }}</td>
                {{-- <td>{{ $homeData->word3_en }}</td> --}}
                {{-- <td>{{ $homeData->word3_ar }}</td> --}}
                <td> <img style="width: 100px;height:100px" src=" {{ $homeData->image }}" alt="" srcset=""></td>
                <td> <img style="width: 200px;height:100px" controls src="{{ $homeData->video }}"> </td>
                <td>
                    {!! Form::open(['route' => ['homeDatas.destroy', $homeData->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('homeDatas.show', [$homeData->id]) }}" class='btn btn-default btn-xs'><i
                                class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('homeDatas.edit', [$homeData->id]) }}" class='btn btn-default btn-xs'><i
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
