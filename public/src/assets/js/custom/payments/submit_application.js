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
        confirmButtonText: 'Yes, Accept it!'
    }).then((result) => {
        if (result.isConfirmed) {
            accept_app();


        }
    })
}

function accept_app() {

    var appid = $('#app_id_submit').val();
    var batch_code = $('#sbatch').val();
    var temp_hols = 0;
    var hold_date = $('#basicFlatpickr').val();


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

    var _token = $("input[name=_token]").val();


    $.ajax({
        url: "/accept/application/payment",
        type: 'POST',
        data: { _token: _token, appid: appid, batch_code: batch_code, t_hold: temp_hols, hold_date: hold_date },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Accept Application!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                $('#genreg').val(data.vlu);



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

function rejap(appid) {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reject it!'
    }).then((result) => {
        if (result.isConfirmed) {
            reject_app(appid);


        }
    })

}

function reject_app(appid) {
    if (appid == 0 || appid == '') {


        swal.fire({
            icon: 'error',
            title: "Reject Application!",
            text: "Invalid Details",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }

    var _token = $("input[name=_token]").val();
    $.ajax({
        url: "/reject/application/payment",
        type: 'POST',
        data: { _token: _token, appid: appid },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "reject Application!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });


            } else {

                swal.fire({
                    icon: 'error',
                    title: "reject Application!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                // alert(data.msg);




            }


        }
    });




}