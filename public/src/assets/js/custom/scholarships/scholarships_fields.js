$("#pmpln").on('click', '.edit-row-rec', function() {

    $('#plid').val($(this).closest("tr").find("td:eq(0) input[type='hidden']").val());
    $('#plcode').val($(this).closest("tr").find("td:eq(1) input[type='hidden']").val());
    $('#plname').val($(this).closest("tr").find("td:eq(2) input[type='hidden']").val());
    $('#add-pmhed').click();

    //alert('aaa');

});



$("#pmfld").on('click', '.edit-row-rec', function() {

    $('#pfid').val($(this).closest("tr").find("td:eq(0) input[type='hidden']").val());
    $('#pfcode').val($(this).closest("tr").find("td:eq(1) input[type='hidden']").val());
    $('#pfname').val($(this).closest("tr").find("td:eq(2) input[type='hidden']").val());
    $('#add-pmfld').click();

    //alert('aaa');

});




$("#pmpln").on('click', '.remove-row-rec', function() {

    var rec_id = $(this).closest("tr").find("td:eq(0) input[type='hidden']").val();
    var tbl_raw = $(this).closest('tr');

    //alert(rec_id);
    delete_pml_rc(rec_id, tbl_raw);
});



function delete_pml_rc(rec_id, tbl_raw) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            delete_pln_record(rec_id, tbl_raw);


        }
    })


}

function delete_pln_record(rec_id, tbl_raw) {

    if (rec_id == 0) {


        swal.fire({
            icon: 'error',
            title: "Delete Records!",
            text: "Invalid Record",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }





    var _token = $("input[name=_token]").val();


    $.ajax({
        url: "/Scholarships/name/delete",
        type: 'POST',
        data: { _token: _token, plid: rec_id },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Delete Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                tbl_raw.remove();


            } else {

                swal.fire({
                    icon: 'error',
                    title: "Delete Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });



            }


        }
    });



} // end otp



// delete field



$("#pmfld").on('click', '.remove-row-rec', function() {

    var rec_id = $(this).closest("tr").find("td:eq(0) input[type='hidden']").val();
    var tbl_raw = $(this).closest('tr');

    //alert(rec_id);
    delete_pmf_rc(rec_id, tbl_raw);
});



function delete_pmf_rc(rec_id, tbl_raw) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            delete_pfld_record(rec_id, tbl_raw);


        }
    })


}

function delete_pfld_record(rec_id, tbl_raw) {

    if (rec_id == 0) {


        swal.fire({
            icon: 'error',
            title: "Delete Records!",
            text: "Invalid Record",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }





    var _token = $("input[name=_token]").val();


    $.ajax({
        url: "/Scholarships/field/delete",
        type: 'POST',
        data: { _token: _token, pfid: rec_id },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Delete Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                tbl_raw.remove();


            } else {

                swal.fire({
                    icon: 'error',
                    title: "Delete Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });



            }


        }
    });



} // end otp