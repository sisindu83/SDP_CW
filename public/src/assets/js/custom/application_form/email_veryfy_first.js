function getotp() {



    var email = $("#email");
    var _token = $("input[name=_token]").val();



    if (email.val() == '') {
        //alert('Invalid Email *');

        swal.fire({
            icon: 'error',
            title: "Email Verification!",
            text: "Invalid Email",
            timer: 3000,
            showConfirmButton: false
        });

        return;
    }


    var reason = '';
    reason += isEmail(email);


    if (reason != '') {
        // alert("Some fields need correction:\n" + reason);

        swal.fire({
            icon: 'error',
            title: "Email Verification!",
            text: "Some fields need correction:\n" + reason,
            timer: 3000,
            showConfirmButton: false
        });




        return false;
    }



    swal.fire({
        position: 'center',
        icon: 'info',
        title: "Email Verification!",
        text: "OTP will be send to your email",
        timer: 3000,
        showConfirmButton: false
    });




    $.ajax({
        url: "/getotp",
        type: 'POST',
        data: { _token: _token, email: email.val() },
        success: function(data) {

            if (data.mtype == 1) {
                //alert(data.msg);

                //$('#userid').val(data.lcid);
                //$('#uname').val(data.name);
                // $("#otp").attr("readonly", false);
                // $("#email").attr("readonly", true);
                swal.fire({
                    icon: 'success',
                    title: "Email Verification!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                //alert(data.msg);

            } else {

                // $("#otp").attr("readonly", true);
                // $("#email").attr("readonly", false);

                swal.fire({
                    icon: 'error',
                    title: "Email Verification!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                // alert(data.msg);




            }


        }
    });



} // end otp

function isEmail(fld) {

    var error = "";
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (fld.val() != "") {

        if (regex.test(fld.val())) {

            var sreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (sreg.test(fld.val())) {
                fld.css("border-color", "Gray");

                //fld.style.background = 'White';
            } else {
                fld.css("border-color", "Tomato");
                error = "Invalid E-mail.\n";
            }

        } else {
            fld.css("border-color", "Tomato");
            // fld.style.background = 'Yellow';
            error = "Invalid E-mail.\n";
        }

    } else {
        fld.css("border-color", "Tomato");
        //fld.style.background = 'Yellow';
        error = "E-mail Required.\n";
    }



    return error;

} // email
