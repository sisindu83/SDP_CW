@include('ACADEMIC.layouts.a_header')
@include('ACADEMIC.layouts.a_navbar')
@include('ACADEMIC.layouts.a_sidebar')



<!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
    <div class="layout-px-spacing">

        <div class="middle-content container-xxl p-0">


            @if ($errors->any())

                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
                <br />
            @endif

       







            <!-- My content -->

             @include('ACADEMIC.student_brakes.student_breakagesCard')

            <!-- End My content -->


        </div>

    </div>




    @include('ACADEMIC.layouts.a_footer')

