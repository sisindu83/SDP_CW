function delete_attempt(attempt, ayear, dappid) {
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
            delete_block(attempt, ayear, dappid);


        }
    })


}

function delete_attempt_ol(attempt, ayear, dappid) {
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
            delete_block_ol(attempt, ayear, dappid);


        }
    })


}

function delete_block(attempt, ayear, dappid) {




    if (attempt == '') {


        swal.fire({
            icon: 'error',
            title: "Delete Attempts!",
            text: "Invalid Attempts",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }


    if (ayear == '') {


        swal.fire({
            icon: 'error',
            title: "Delete Attempts!",
            text: "Invalid Year",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }


    var _token = $("input[name=_token]").val();


    $.ajax({
        url: "/delete/attempts",
        type: 'POST',
        data: { _token: _token, attempt: attempt, ayear: ayear, appid: dappid },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Delete Attempt!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });
                var div_id = "#" + attempt + ayear;
                $(div_id).remove();



            } else {

                swal.fire({
                    icon: 'error',
                    title: "Delete Attempt!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                // alert(data.msg);




            }


        }
    });



} // end otp


function delete_block_ol(attempt, ayear, dappid) {




    if (attempt == '') {


        swal.fire({
            icon: 'error',
            title: "Delete Attempts!",
            text: "Invalid Attempts",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }


    if (ayear == '') {


        swal.fire({
            icon: 'error',
            title: "Delete Attempts!",
            text: "Invalid Year",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }


    var _token = $("input[name=_token]").val();


    $.ajax({
        url: "/delete/attempts/ol",
        type: 'POST',
        data: { _token: _token, attempt: attempt, ayear: ayear, appid: dappid },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Delete Attempt!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });
                var div_id = "#ol" + attempt + ayear;
                $(div_id).remove();



            } else {

                swal.fire({
                    icon: 'error',
                    title: "Delete Attempt!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                // alert(data.msg);




            }


        }
    });



}