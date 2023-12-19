@include('layouts.sheader')
@include('layouts.ssidebar')
@include('layouts.Bef_lopg')
<!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
    <div class="layout-px-spacing">

        <div class="middle-content container-xxl p-0">

            <!-- sisindu -->
            <div class="tab-content" id="animateLineContent-4">
                <div class="tab-pane fade show active" id="animated-underline-home" role="tabpanel"
                    aria-labelledby="animated-underline-home-tab">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form class="section general-info" method="POST" action="" >
                                <div class="info">
                                    <h6 class="">Submit New Wildlife Crime</h6>
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
                                                                <input type="text" class="form-control mb-3"  required
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
                                                                <input type="text" class="form-control mb-3" required
                                                                    id="contactno" placeholder="Contact No">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group">
                                                                <label for="countrdistric">Distric</label>
                                                                <select class="form-select mb-3" id="distric" required
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
                                                                    id="phone" placeholder="City"name ='city'>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-group">
                                                                <label for="contactno">Email:</label>
                                                                <input type="email" id="email" name="email" required
                                                                    class="form-control mb-3" placeholder="E mail" name='email'>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-group">
                                                                <label for="gn">GN division</label>
                                                                <input type="text" class="form-control mb-3" required
                                                                    id="gn" placeholder="GN Division" name='GN_division'>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="location">Location</label>
                                                                <input type="text" class="form-control mb-3" required
                                                                    id="location" placeholder="Location" name ='location'>

                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group">
                                                                <label for="rtype">Report Type</label>
                                                                <select class="form-select mb-3" required id="rtype"name='report_type'>
                                                                    <option>Wildlife</option>
                                                                    <option>Animal</option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="form-group">
                                                                <label for="incident">Tell Us About Incident(s)</label>
                                                                <input type="text" class="form-control mb-3"
                                                                    id="incident" required
                                                                    placeholder="Tell Us About Incident(s)">
                                                            </div>
                                                        </div>



                                                        <div class="col-md-3 ">
                                                            <label for="incident">Attachement-Max 3Mb </label>
                                                            <div class="multiple-file-upload">

                                                                <input type="file"
                                                                    class="filepond file-upload-multiple"
                                                                    name="filepond" multiple data-allow-reorder="true"
                                                                    data-max-file-size="3MB" data-max-files="3">
                                                            </div>
                                                        </div>

                                                        <div class="row">

                                                            <!--<div class="col mt-6">
                                                                <div class="form-group text-end">
                                                                    <button  id="sbutton" class="mr-2 btn btn-secondary  warning cancel">Report</button>
                                                                </div>
                                                            </div>-->

                                                         <!--   <div class="col mt-6">
                                                                <div class="form-group text-end">
                                                                    <div onclick="sealert();"  class="mr-2 btn btn-secondary warning cancel" role="button">Report1</div>
                                                                </div>
                                                            </div>-->

                                                            <div class="col mt-6">
                                                                <div class="form-group text-end">
                                                                    <div  id="div_btn" class="mr-2 btn btn-secondary warning cancel" role="button">Report</div>
                                                                </div>
                                                            </div>

                                                            <script>
                                                                function sealert() {


                                                                    Swal.fire({
                                                                            position: 'center',
                                                                            icon: 'success',
                                                                            title: 'Placement set at default (center)',
                                                                            showConfirmButton: false,
                                                                            timer: 1500
                                                                        })
                                                                }




                                                            </script>

                                                            <script>
                                                                  $(document).ready(function() {
                                                                    $("#div_btn").click(function() {
                                                                        Swal.fire({
                                                                            position: 'center',
                                                                            icon: 'success',
                                                                            title: 'Suceesfully Reported',
                                                                            showConfirmButton: false,
                                                                            timer: 1500
                                                                        })
                                                                    });

                                                                });
                                                                </script>

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </form>
                    </div>


                </div>
                <div>




                    <!-- END sisindu -->


                    <!--  END CONTENT AREA  -->
                    @include('layouts.sfooter')
