<div class="seperator-header layout-top-spacing">
    <h4 class="">Student Breakages</h4>
</div>

<form method="post" id="form_id" onsubmit="return validateForm()" autocomplete="off"
    action="" enctype="multipart/form-data">

<div id="card_2" class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 layout-spacing layout-top-spacing">
                                <div class="statbox widget box box-shadow">
                                    <div class="widget-header">
                                        <div class="row">
                                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">

                                            <!-- -->
                                              
<div class="row">
    <div class="col-md-3" layout-spacing layout-top-spacing>
        <div class="form-group">
            <label for="othname">Name*</label>
            <select id="othname" name="othname" class="form-select mb-3" required>
                <option value=""> --- select --- </option>
                
               

            </select>
        </div>
    </div>
    
    <div class="col-md-3" layout-spacing layout-top-spacing>
    <div class="form-group mb-4">
    <label for="date">Date</label>
    <input type="text" class="form-control form-control-sm" id="date" placeholder="Add date picker">
</div>
</div>
</div>

<div class="row">
<div class="col-2 layout-spacing layout-top-spacing">

    <label for="initial">Amount</label>
    <input type="text" class="form-control" id="amount" placeholder="Amount" >

</div>

<div class="col-6 layout-spacing layout-top-spacing">

    <label for="initial">Description</label>
    <input type="text" class="form-control" id="amount" placeholder="Description" >

</div>
</div>


<!-- -->


</div>
                                        </div>
                                    </div>
                              
                                </div>
                            </div>





                            <div id="card_2" class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 layout-spacing layout-top-spacing">
                                <div class="statbox widget box box-shadow">
                                    <div class="widget-header">
                                        <div class="row">
                                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">

                                            <!-- -->



<div class="row">
<div class="col-md-3">
<label for="initial">Entry Methode</label>
<div class="d-sm-flex justify-content-around">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio"value="1"  name="flexRadioDefault" id="flexRadioDefault1" >
            <label class="form-check-label" for="flexRadioDefault1">
            <label for="initial">Sigle Entry</label>
            </label>
        </div>
        
        <div class="form-check form-check-inline">
            <input class="form-check-input" value="2" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
            <label for="initial">Bulk Entry</label>
            </label>
        </div>
    </div>

</div>
</div>
                                              
 <div class="row" id="entry1" class="desc" style="display: none;">
<div class="col-md-3">
<div class="form-group">
    <label for="initial">Registration No*</label>
    <input type="text" class="form-control mb-3" id="reg_no" placeholder="Registration No" >
</div>
</div>
</div>

<!-- -->


                                            </div>
                                        </div>
                                    </div>
                              
                                </div>
                            </div>



    
   
    







    <div class="row layout-spacing" id="entry2" class="desc" style="display: none;">
        <div class="col-lg-12">
            <div class="statbox widget box box-shadow">
                <div class="widget-content widget-content-area">





                    <table id="style-2" class="table style-1 dt-table-hover">
                        <thead>
                            <tr>
                                <th class="checkbox-column text-center" width="10%"> Record Id </th>
                                <th width="20%">Emp. No</th>
                                <th width="20%">Designation</th>
                                <th width="5%">Title</th>
                                <th width="45%">Name</th>


                            </tr>
                        </thead>
                        <tbody id="pmfld">
                           
                        </tbody>
                    </table>

                    <div class="col-sm-12">
                        <div class="modal-footer">
                            <button class="btn btn-success">Save</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

<script>
    function validateForm() {
        $('#style-4 > tbody  > tr').each(function() {
            var currentRow = $(this);

            if (currentRow.find("td:eq(0) input[type='checkbox']").is(":checked")) {
                var emp = currentRow.find("td:eq(1) input[type='hidden']").val();
                currentRow.find("td:eq(4) input[type='hidden']").val(emp);

            } else {
                currentRow.find("td:eq(4) input[type='hidden']").val(0);
            }
        });



    };

    $('#othname').change(function() {

        var oth_pfc = $('#othname').val();

        if (oth_pfc != '') {

            var _token = $("input[name=_token]").val();


            $.ajax({
                url: "/acedemic/breakages/auth/get_saved",
                type: 'POST',
                data: {
                    _token: _token,
                    oth_pfcode: oth_pfc
                },
                success: function(data) {

                    if (data.mtype == 1) {
                        var i;
                        for (i = 0; i < data.msg.length; ++i) {

                            isempsaved(data.msg[i]['empno']);

                        }

                    }


                }
            });


        } else {
            cleartbl();
        }
    });

    function isempsaved(empcode) {


        $('#style-4 > tbody  > tr').each(function() {

            var currentRow = $(this);
            var emp = currentRow.find("td:eq(1) input[type='hidden']").val();

            if (emp == empcode) {
                currentRow.find("td:eq(0) input[type='checkbox']").prop("checked", true);
            }
        });


    };

    function cleartbl() {

        $('#style-4 > tbody  > tr').each(function() {
            var currentRow = $(this);
            currentRow.find("td:eq(0) input[type='checkbox']").prop("checked", false);
        });


    };
</script>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
$(document).ready(function() {
    $("input[name$='flexRadioDefault']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#entry1").hide();
        $("#entry2").hide();
        $("#entry" + test).show();

    });
});

</script>
