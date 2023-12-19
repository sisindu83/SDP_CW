@include('layouts.sheader')
@include('layouts.ssidebar')
@include('layouts.Bef_lopg')
<!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
    <div class="layout-px-spacing">

        <div class="middle-content container-xxl p-0">
            <form action="report">
                <!-- sisindu -->
                <div class="tab-content" id="animateLineContent-4">
                    <div class="tab-pane fade show active" id="animated-underline-home" role="tabpanel"
                        aria-labelledby="animated-underline-home-tab">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                                <form class="section general-info">
                                    <div class="info">
                                        <h6 class="">User Registration</h6>
                                        <div class="row">
                                            <div class="col-lg-11 mx-auto">
                                                <div class="row">
                                                    <div class="col-xl-2 col-lg-12 col-md-4">


                                                        <!-- // The classic file input element we'll enhance
// to a file pond, we moved the configuration
// properties to JavaScript -->





                                                    </div>
                                                </div>
                                                <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                                                    <div class="form">
                                                        <div class="row">

                                                            <div class="col-md-2">
                                                                <div class="form-group">
                                                                    <label for="Title">Title</label>
                                                                    <select class="form-select mb-3" id="country" required>
                                                                        <option>Mr.</option>
                                                                        <option>Miss.</option>
                                                                        <option>Mrs.</option>
                                                                        <option>Dr.</option>
                                                                        <option>Prof.</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-5">
                                                                <div class="form-group">
                                                                    <label for="initial">Initial.</label>
                                                                    <input type="text" class="form-control mb-3"
                                                                        id="initial" placeholder="Initial">
                                                                </div>
                                                            </div>

                                                            <div class="col-md-5">
                                                                <div class="form-group">
                                                                    <label for="lastname">Last Name</label>
                                                                    <input type="text" class="form-control mb-3" required
                                                                        id="lastname" placeholder="Last Name">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="form-group">
                                                                    <label for="contactno">Contact No:</label>
                                                                    <input type="text" id="phone" name="phone"

                                                                        class="form-control mb-3" id="contactno"
                                                                        placeholder="Contact No">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="countrdistric">Distric</label>
                                                                    <select class="form-select mb-3" id="distric"
                                                                        name="distric" required>
                                                                        @foreach ($districs as $distric)
                                                                            <option value="{{ $distric->id }}">{{ $distric->distric_name }}</option>
                                                                        @endforeach


                                                                    </select>
                                                                </div>
                                                            </div>






                                                            <div class="col-md-5">
                                                                <div class="form-group">
                                                                    <label for="city">City</label>
                                                                    <input type="text" class="form-control mb-3" required
                                                                        id="phone" placeholder="City">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="gn">GN division</label>
                                                                    <input type="text" class="form-control mb-3" required
                                                                        id="gn" placeholder="GN Division">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="email">email</label>
                                                                    <input type="email" id="email" name="email" required
                                                                        class="form-control mb-3" id="gn"
                                                                        placeholder="email">
                                                                </div>
                                                            </div>
                                                            <div class='row'>
                                                                <div class="col-md-4">
                                                                    <div class="form-group">
                                                                        <label for="password">Password</label>
                                                                        <input type="password" id="password" name="password"
                                                                            class="form-control mb-3"  name='passsword' required
                                                                            placeholder="Password">
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4">
                                                                    <div class="form-group">
                                                                        <label for="password">Re-Password</label>
                                                                        <input type="password" id="repassword" name="repassword"
                                                                            class="form-control mb-3"  name='repasssword' required
                                                                            placeholder="Password">
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div class="row">

                                                                <div class="col mt-6">
                                                                    <div class="form-group text-end">
                                                                        <div class="btn btn-secondary"role="button" id="reg_btn">Regitser</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
</form>
</div>

<script>
    $(document).ready(function() {
      $("#reg_btn").click(function() {
        Swal.fire({
        icon: 'success',
        title: 'Account Create',
    })
      });

  });
  </script>
</div>
<div>


    <!-- END sisindu -->


    <!--  END CONTENT AREA  -->
    @include('layouts.sfooter')
