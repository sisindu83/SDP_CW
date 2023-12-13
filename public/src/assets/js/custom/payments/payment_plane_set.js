function planevalidate() {
    var planecode = $('#s_pname').val();


    if (planecode == '') {
        swal.fire({
            icon: 'error',
            title: "Payment Plan!",
            text: "Invalid Payment Plan",
            timer: 3000,
            showConfirmButton: false
        });

        return false;

    } else {
        $('#plc').val(planecode);


        return true;
    }

};


$('#s_pname').change(function() {


    var _token = $("input[name=_token]").val();
    var planecode = $('#s_pname').val();

    if (planecode != '') {
        $.ajax({
            url: "/payment/plan/edit",
            type: 'POST',
            data: {
                _token: _token,
                plid: planecode

            },
            success: function(data) {

                if (data.mtype == 1) {

                    $('#left-defaults').html(data.left_div);
                    $('#right-defaults').html(data.right_div);

                    var ldivh = $('#left-defaults').height();
                    var rdivh = $('#right-defaults').height();

                    if (ldivh > rdivh) {
                        $('#right-defaults').height(ldivh);
                    } else {
                        //  $('#left-defaults').height(rdivh);

                    }

                }


            }
        })
    };
});


/*$('#left-defaults').resize(function() {

}); */