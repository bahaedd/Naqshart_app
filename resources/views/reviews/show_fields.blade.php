<!-- Name Field -->
<div class="form-group">
    {!! Form::label('name', 'Name:') !!}
    <p>{{ $review->name }}</p>
</div>

<!-- Email Field -->
<div class="form-group">
    {!! Form::label('email', 'Email:') !!}
    <p>{{ $review->email }}</p>
</div>

<!-- Title Field -->
<div class="form-group">
    {!! Form::label('title', 'Title:') !!}
    <p>{{ $review->title }}</p>
</div>

<!-- Body Field -->
<div class="form-group">
    {!! Form::label('body', 'Body:') !!}
    <p>{{ $review->body }}</p>
</div>

<!-- Rate Field -->
<div class="form-group">
    {!! Form::label('rate', 'Rate:') !!}
    <p>{{ $review->rate }}</p>
</div>

<!-- Like Counter Field -->
<div class="form-group">
    {!! Form::label('like_counter', 'Like Counter:') !!}
    <p>{{ $review->like_counter }}</p>
</div>

<!-- Dislike Counter Field -->
<div class="form-group">
    {!! Form::label('dislike_counter', 'Dislike Counter:') !!}
    <p>{{ $review->dislike_counter }}</p>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $review->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $review->updated_at }}</p>
</div>

