@include('layouts.welcome_header')



  <!--  BEGIN CONTENT AREA  -->

<link href="<?php echo url("/")?>/css/styleWelcomePage.css" rel="stylesheet" type="text/css" />

<div id="content" class="main-content">
<div class="layout-px-spacing">

<div class="middle-content container-xxl p-0">
	<form action="report">
		<!-- Hemal -->
		<div class="tab-content" id="animateLineContent-4">
			<div class="tab-pane fade show active" id="animated-underline-home" role="tabpanel" aria-labelledby="animated-underline-home-tab">
				<div class="row">
					<div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                        <div class="info">
                            <div class="row">
                                <div class="col-lg-11 mx-auto">
                                    <div class="coverHero col-12 min-vh-100 align-items-center d-flex">
                                        <div class="col-12 mt-0">
                                            <div class="col-6 text-end mt-0">
                                                <h1 class="display-1 coverHero-ash">together</h1>
                                                <h2>We<br>can make<br>our home planet<br><span class="coverHero-green">GREEN</span><br>&<br>a better place!</h2>
                                                <button type="button" class="btn btn-outline-danger mt-3" onclick="redirectToComplaintPage()">Make Complaint</button>
                                                <button type="button" class="btn btn-outline-warning mt-3" onclick="redirectToCheckcomplaintpage()">View Complaint</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Div>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>

<script>
    function redirectToComplaintPage() {
      // Replace 'complaint.html' with the actual URL of the page you want to redirect to
      window.location.href = 'home';
    }
    function redirectToCheckcomplaintpage() {
      // Replace 'complaint.html' with the actual URL of the page you want to redirect to
      window.location.href = 'ccmplin';
    }
  </script>
</div>
<div >

@include('layouts.sfooter')
