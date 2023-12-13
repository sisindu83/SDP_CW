$("#customCheck1").change(function() {
    if (this.checked) {
        $('#basicFlatpickr').removeClass("hidden")
        $('#basicFlatpickr').prop('required', true);

    } else {
        $('#basicFlatpickr').addClass("hidden")
        $('#basicFlatpickr').val("")
        $('#basicFlatpickr').prop('required', false);
    }

});

function acap() {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Accept this!'
    }).then((result) => {
        if (result.isConfirmed) {
            accept_app();


        }
    })
}

function accept_app() {

    var appid = $('#app_id_submit').val();
    var batch_code = $('#sbatch').val();
    var acc_regid = $('#acc_regid').val();
    var temp_hols = 0;
    var hold_date = $('#basicFlatpickr').val();;

    if ($('#customCheck1').is(":checked")) {
        temp_hols = 1;
    } else {
        hold_date = null;
    }


    if (temp_hols == 1 && hold_date == '') {
        swal.fire({
            icon: 'error',
            title: "Accept Application!",
            text: "Invalid Date",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }


    if (batch_code == '') {
        swal.fire({
            icon: 'error',
            title: "Accept Application!",
            text: "Invalid Batch",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }

    if (appid == 0 || appid == '') {


        swal.fire({
            icon: 'error',
            title: "Accept Application!",
            text: "Invalid Details",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }

    if (acc_regid == 0 || acc_regid == '') {


        swal.fire({
            icon: 'error',
            title: "Accept Application!",
            text: "Invalid Reg. No",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }


    var _token = $("input[name=_token]").val();


    $.ajax({
        url: "/accept/application/academic",
        type: 'POST',
        data: { _token: _token, appid: appid, batch_code: batch_code, regid: acc_regid, t_hold: temp_hols, hold_date: hold_date },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Accept Application!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });





            } else {

                swal.fire({
                    icon: 'error',
                    title: "Accept Application!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                // alert(data.msg);




            }


        }
    });




}