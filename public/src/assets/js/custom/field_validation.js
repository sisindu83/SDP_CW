function isEmail(fld) {

    var error = "";
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (fld.val() != "") {

        if (regex.test(fld.val())) {

            var sreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (sreg.test(fld.val())) {

                fld.css("border", "#1px solid");
            } else {
                fld.css("border", "1px solid Tomato ");
                error = "Invalid E-mail.\n";
            }

        } else {
            fld.css("border", "1px solid Tomato ");
            // fld.style.background = 'Yellow';
            error = "Invalid E-mail.\n";
        }

    } else {
        fld.css("border", "1px solid Tomato ");
        //fld.style.background = 'Yellow';
        error = "E-mail Required.\n";
    }



    return error;

} // email


function validatePassword(pwd1, pwd2) {

    var error = "";
    var re;

    if (pwd1.val() != "" && pwd1.val() == pwd2.val()) {

        if (pwd1.val() != "") {
            if (pwd1.val().length < 6) {
                error = "Password must contain at least six characters!\n";
                pwd1.css("border", "1px solid Tomato ");
                //pwd1.style.background = 'Yellow';
                return error;
            }

            re = /[0-9]/;
            if (!re.test(pwd1.val())) {
                error = "password must contain at least one number (0-9)!\n";
                pwd1.css("border", "1px solid Tomato");
                //pwd1.style.background = 'Yellow';
                return error;
            }

            re = /[a-z]/;
            if (!re.test(pwd1.val())) {
                error = "password must contain at least one lowercase letter (a-z)!\n";
                pwd1.css("border", "1px solid Tomato");
                return error;
            }

            re = /[A-Z]/;
            if (!re.test(pwd1.val())) {
                error = "password must contain at least one uppercase letter (A-Z)!\n";
                pwd1.css("border", "1px solid Tomato");
                return error;
            }
        } else {
            error = "Please check that you've entered password!\n";
            pwd1.css("border", "1px solid Tomato");
            return error;
        }

    } else {
        error = "Please check that you've entered and confirmed your password!\n";
        pwd1.css("border", "1px solid Tomato");
        pwd2.css("border", "1px solid Tomato");
        return error;
    }

    pwd1.css("border", "#1px solid");
    pwd2.css("border", "#1px solid");
    return error;





} // password


function validateLogin() {

    var pwd1 = $("#password")
    var email = $("#email")

    var reason = "";
    reason += isEmail(email);
    reason += validatePassword(pwd1, pwd1);


    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
        return false;
    }

    return true;
}


function validaterreset() {


    var pwd1 = $("#passeord");
    var pwd2 = $("#repasseord");

    // var chk_box = $("#checkbox-signup");

    var reason = "";

    reason += validatePassword(pwd1, pwd2);


    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
        return false;
    }

    /* if (chk_box.prop('checked') == false) {

        return false;
    } */

    return true;
} // end validate reg