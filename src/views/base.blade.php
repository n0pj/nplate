<!doctype html>
<html>
  @include('partials.head')
  <body>
    <div>
      @include('partials.navbar')
      <aside class="c-sidebar">
        @include('partials.sidebar')
      </aside>
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="wrap container" role="document">
            <div class="l-content">
              <main class="l-main">
                @section('main')
                @show
              </main>
            </div>
          </div>
        </div>
        <p class="c-page-top"><a href="">&utrif;</a></p>
        <div class="c-content-navi__main-wrapper">
          <div class="c-content-navi__wrapper">
            <?php wp_pagenavi()?>
          </div>
        </div>
        @include('partials.footer')
      </div>
    </div>
  </body>
</html>
