@extends('base')

@section('main')
  @if (have_posts())
    @while (have_posts())
      @php the_post() @endphp
      @includeIf('partials.page.' . getSlug($_SERVER['REQUEST_URI'], 1)['slug'])
    @endwhile
  @endif
@endsection