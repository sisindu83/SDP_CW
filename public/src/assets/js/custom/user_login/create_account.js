function validatergt() {


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