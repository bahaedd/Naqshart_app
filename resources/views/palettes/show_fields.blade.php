<!-- Name Field -->
<div class="form-group">
    {!! Form::label('name', 'Name:') !!}
    <p>{{ $palette->name }}</p>
</div>

<!-- Tag Field -->
<div class="form-group">
    {!! Form::label('tag', 'Tag:') !!}
    <p>{{ $palette->tag }}</p>
</div>


<!-- Img Field -->
<div class="form-group">
    {!! Form::label('img', 'Img:') !!}
    <p>{{ $palette->img }}</p>
</div>

<!-- Palette Copies Field -->
<div class="form-group">
    {!! Form::label('palette_copies', 'Palette Copies:') !!}
    <p>{{ $palette->palette_copies }}</p>
</div>

<!-- Avalible Copies Field -->
<div class="form-group">
    {!! Form::label('avalible_copies', 'Avalible Copies:') !!}
    <p>{{ $palette->avalible_copies }}</p>
</div>

<!-- S Copies Field -->
<div class="form-group">
    {!! Form::label('S_copies', 'S Copies:') !!}
    <p>{{ $palette->S_copies }}</p>
</div>

<!-- S Avalible Field -->
<div class="form-group">
    {!! Form::label('S_avalible', 'S Avalible:') !!}
    <p>{{ $palette->S_avalible }}</p>
</div>

<!-- S Price Field -->
<div class="form-group">
    {!! Form::label('S_price', 'S Price:') !!}
    <p>{{ $palette->S_price }}</p>
</div>

<!-- M Copies Field -->
<div class="form-group">
    {!! Form::label('M_copies', 'M Copies:') !!}
    <p>{{ $palette->M_copies }}</p>
</div>

<!-- M Avalible Field -->
<div class="form-group">
    {!! Form::label('M_avalible', 'M Avalible:') !!}
    <p>{{ $palette->M_avalible }}</p>
</div>

<!-- M Price Field -->
<div class="form-group">
    {!! Form::label('M_price', 'M Price:') !!}
    <p>{{ $palette->M_price }}</p>
</div>

<!-- L Copies Field -->
<div class="form-group">
    {!! Form::label('L_copies', 'L Copies:') !!}
    <p>{{ $palette->L_copies }}</p>
</div>

<!-- L Avalible Field -->
<div class="form-group">
    {!! Form::label('L_avalible', 'L Avalible:') !!}
    <p>{{ $palette->L_avalible }}</p>
</div>

<!-- L Price Field -->
<div class="form-group">
    {!! Form::label('L_price', 'L Price:') !!}
    <p>{{ $palette->L_price }}</p>
</div>

{{-- <!-- Sizing Details Field -->
<div class="form-group">
    {!! Form::label('sizing_details', 'Sizing Details:') !!}
    <p>{{ $palette->sizing_details }}</p>
</div>

<!-- Print Material Field -->
<div class="form-group">
    {!! Form::label('print_material', 'Print Material:') !!}
    <p>{{ $palette->print_material }}</p>
</div>

<!-- Print Ink Field -->
<div class="form-group">
    {!! Form::label('print_ink', 'Print Ink:') !!}
    <p>{{ $palette->print_ink }}</p>
</div>

<!-- Print Finish Field -->
<div class="form-group">
    {!! Form::label('print_finish', 'Print Finish:') !!}
    <p>{{ $palette->print_finish }}</p>
</div>

<!-- Frame Material Field -->
<div class="form-group">
    {!! Form::label('frame_material', 'Frame Material:') !!}
    <p>{{ $palette->frame_material }}</p>
</div>

<!-- Frame Finish Field -->
<div class="form-group">
    {!! Form::label('frame_finish', 'Frame Finish:') !!}
    <p>{{ $palette->frame_finish }}</p>
</div> --}}

<!-- Artist Id Field -->
<div class="form-group">
    {!! Form::label('artist_id', 'Artist :') !!}
    <p>{{ $palette->artist->name }}</p>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $palette->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $palette->updated_at }}</p>
</div>
