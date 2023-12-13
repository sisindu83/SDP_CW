@include('layouts.sheader')
@include('layouts.ssidebar')
<   <!--  BEGIN CONTENT AREA  -->
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
<h6 class="">General Information</h6>
<div class="row">
<div class="col-lg-11 mx-auto">
<div class="row">
<div class="col-xl-2 col-lg-12 col-md-4">
<div class="profile-image  mt-4 pe-md-4">

<!-- // The classic file input element we'll enhance
// to a file pond, we moved the configuration
// properties to JavaScript -->

<div class="img-uploader-content">
<input type="file" class="filepond"
name="filepond" accept="image/png, image/jpeg, image/gif"/>
</div>



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
<label for="profession">Last Name</label>
<input type="text" class="form-control mb-3" id="profession" placeholder="Last Name" >
</div>
</div>
<div class="col-md-7">
<div class="form-group">
<label for="namedonatedbyinitial">Name Donated by Initial</label>
<input type="text" class="form-control mb-3" id="namedonatedbyinitial" placeholder="Name Donated by Initial" >
</div>
</div>
<div class="col-md-5">
<div class="form-group">
<label for="country">Designation</label>
<select class="form-select mb-3" id="Designation">
<option>Snr. Professor</option>
<option>Professor</option>
<option>Associate Professor</option>
<option>Snr. Lecturer Grade I</option>
<option>Snr. Lecturer Grade II</option>

</select>
</div>
</div>




<div class="col-md-6">
<div class="form-group">
<label for="phone">Phone</label>
<input type="text" class="form-control mb-3" id="phone" placeholder="Write your phone number here" >
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<label for="email">Email</label>
<input type="text" class="form-control mb-3" id="email" placeholder="Write your email here">
</div>
</div> 



<div class="col-md-10 mt-1">
<div class="form-group text-end">
<button class="btn btn-secondary">Password Reset</button>
</div>
</div>


<div class="col mt-1">
<div class="form-group text-end">
<button class="btn btn-secondary">Save</button>
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