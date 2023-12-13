$("#emprecords").on('click', '.remove-row-rec', function() {

    var rec_id = $(this).closest("tr").find("td:eq(0) input[type='hidden']").val();
    var tbl_raw = $(this).closest('tr');
    var app_iid = $('#appid_emp').val();
    //alert(rec_id);
    delete_employ_rc(app_iid, rec_id, tbl_raw);
});

$("#emprecords").on('click', '.edit-row-rec', function() {

    $('#emprid').val($(this).closest("tr").find("td:eq(0) input[type='hidden']").val());
    $('#empInstitution').val($(this).closest("tr").find("td:eq(1) input[type='hidden']").val());
    $('#appointmentheld').val($(this).closest("tr").find("td:eq(2) input[type='hidden']").val());
    $('#empduration').val($(this).closest("tr").find("td:eq(3) input[type='hidden']").val());
    $('#add-emprc').click();

    //alert('aaa');

});


function delete_employ_rc(app_iid, rec_id, tbl_raw) {
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

            delete_employ_record(app_iid, rec_id, tbl_raw);


        }
    })


}

function delete_employ_record(app_iid, rec_id, tbl_raw) {

    if (rec_id == 0) {


        swal.fire({
            icon: 'error',
            title: "Delete Employment Records!",
            text: "Invalid Record",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }





    var _token = $("input[name=_token]").val();


    $.ajax({
        url: "/delete/employment",
        type: 'POST',
        data: { _token: _token, empid: rec_id, appid: app_iid },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Delete Employment Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                tbl_raw.remove();


            } else {

                swal.fire({
                    icon: 'error',
                    title: "Delete Employment Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });



            }


        }
    });



} // end otp