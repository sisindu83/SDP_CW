@include('layouts.sheader')
@include('layouts.ssidebar')
@include('layouts.Bef_lopg')
  <!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
<div class="layout-px-spacing">

<div class="middle-content container-xxl p-0">

<!-- sisindu -->
<div class="tab-content" id="animateLineContent-4">
<div class="tab-pane fade show active" id="animated-underline-home" role="tabpanel" aria-labelledby="animated-underline-home-tab">
<div class="row">
<div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
<form class="section general-info">
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
<select class="form-select mb-3" id="country">
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
<input type="text" class="form-control mb-3" id="initial" placeholder="Initial" >
</div>
</div>

<div class="col-md-5">
<div class="form-group">
<label for="lastname">Last Name</label>
<input type="text" class="form-control mb-3" id="lastname" placeholder="Last Name" >
</div>
</div>
<div class="col-md-3">
<div class="form-group">
<label for="contactno">Contact No:</label>
<input type="tel" class="form-control mb-3" id="contactno" placeholder="Contact No" >
</div>
</div>
<div class="col-md-4">
<div class="form-group">
<label for="countrdistric">Distric</label>
<select class="form-select mb-3" id="distric">
<option>Colombo</option>
<option>Gampahala</option>
<option>Kaluthara</option>


</select>
</div>
</div>




<div class="col-md-5">
<div class="form-group">
<label for="city">City</label>
<input type="text" class="form-control mb-3" id="phone" placeholder="City" >
</div>
</div>
<div class="col-md-3">
<div class="form-group">
<label for="contactno">Email:</label>
<input type="email" id="email" name="email" class="form-control mb-3"  placeholder="E mail" >
</div>
</div>
<div class="col-md-3">
<div class="form-group">
<label for="gn">GN division</label>
<input type="text" class="form-control mb-3" id="gn" placeholder="GN Division">
</div>
</div> 

<div class="col-md-6">
<div class="form-group">
<label for="location">Location</label>
<input type="text" class="form-control mb-3" id="location" placeholder="Location" >
</div>
</div>
<div class="col-md-4">
<div class="form-group">
<label for="rtype">Report Type</label>
<select class="form-select mb-3" id="rtype">
<option>Wildlife</option>
<option>Animal</option>


</select>
</div>
</div>
<div class="col-md-8">
<div class="form-group">
<label for="incident">Tell Us About Incident(s)</label>
<input type="text" class="form-control mb-3" id="incident" placeholder="Tell Us About Incident(s)">
</div>
</div> 



<div class="col-md-3 ">
<label for="incident">Attachement-Max 3Mb </label>
<div class="multiple-file-upload">
    
    <input type="file" 
        class="filepond file-upload-multiple"
        name="filepond" 
        multiple 
        data-allow-reorder="true"
        data-max-file-size="3MB"
        data-max-files="3">
</div>
</div>

<div class="row">

<div class="col mt-6">
<div class="form-group text-end">
<button class="btn btn-primary default mb-2 me-4">Report</button>
</div>
</div>
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
<div >


<!-- END sisindu -->


<!--  END CONTENT AREA  -->
@include('layouts.sfooter')