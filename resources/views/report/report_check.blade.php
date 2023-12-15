@include('layouts.sheader')
@include('layouts.ssidebar')
@include('layouts.Bef_lopg')
  <!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
<div class="layout-px-spacing">

<div class="middle-content container-xxl p-0">

<!-- sisindu -->

<div class="auth-container d-flex h-100">

<div class="container mx-auto align-self-center">

    <div class="row">

      <div class ="col-3">
</div>

        <div class="col-4">
            <div class="card">
                <div class="card-body">

                    <div class="row">
                        <div class="col-md-12 mb-3">
                            
                            <div class="media mb-4">
                                
                           

                                <div class="media-body align-self-center">

                                    <h3 class="mb-0">Check the entry Status </h3>
                                    <p class="mb-0">Enter your complain No: </p>

                                </div>
                                
                            </div>
                            
                            
                        </div>
                        <div class="col-12">
                            <div class="mb-4">
                                <label class="form-label">Complian No:</label>
                                <input type="text" id ='cmplno' class="form-control">
                            </div>
                        </div>
                        
                        <div class="col-12">
                            <div class="mb-4">
                                <button class="btn btn-secondary w-100">Search</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
    
</div>

</div>

<!-- END sisindu -->
</div>
</div>
</div>

<!--  END CONTENT AREA  -->
@include('layouts.sfooter')