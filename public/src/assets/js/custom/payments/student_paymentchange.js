$("#poptdiv input:radio").click(() => {

    var exd = $("input[type='radio']:checked").val();
    if (exd == 1) {
        $('#basicFlatpickr').removeClass("hidden")
        $('#basicFlatpickr').prop('required', true);

    } else {
        $('#basicFlatpickr').addClass("hidden")
        $('#basicFlatpickr').val("")
        $('#basicFlatpickr').prop('required', false);
    }

});

function numberWithCommas(x) {

    // return x.val().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function() {
    $("#pmpln").on("input", function() {


        total = 0;
        $(".pvalue").each(function() {
            total += parseFloat($(this).val()) || 0;
            divid = '#div' + $(this).attr('id');

            var rest = parseFloat($(this).val())
            rest = rest.toFixed(2);
            rest = numberWithCommas(rest)
            $(divid).text(rest);

            // ;
        });
        // Print entered value in a div box
        var tot_payval = total.toFixed(2)
        tot_payval = numberWithCommas(tot_payval);


        $("#paid_val").val(total.toFixed(2));
        $("#divpaid_val").text(tot_payval);



        // $('divpaid_val')=

        req_val = parseFloat($('#total_value').val());
        prepaid_val = parseFloat($('#total_paid').val());

        blp = req_val - (prepaid_val + total);
        blp = blp.toFixed(2);
        $('#balance_val').val(blp)
        $('#div_balance').text(numberWithCommas(blp));
        // $('#divpaid_val').text(blp);

        if (blp > 0) {

            $("#paid_val").css("border", "1px solid Tomato ");
            $("#opttemp").prop("checked", true);
            $('#basicFlatpickr').removeClass("hidden")
            $('#basicFlatpickr').prop('required', true);

        } else {
            $("#paid_val").css("border", "1px solid");
            $('#basicFlatpickr').addClass("hidden")
            $('#basicFlatpickr').val("")
            $('#basicFlatpickr').prop('required', false);
        }

    });


});

$("#form_id").submit(function(e) {

    var radioValue = $("input[name='hd_stat']:checked").val();
    var dateval = $("#basicFlatpickr").val();
    if (radioValue == 1 && dateval == '') {
        swal.fire({
            icon: 'error',
            title: "Payment !",
            text: "Invalid Financial Hold",
            timer: 3000,
            showConfirmButton: false
        });

        return false;
    }


    e.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, change plane'
    }).then((result) => {
        if (result.isConfirmed) {
            $("#form_id").submit();
        }
    })

});

function deletepayment(pid) {

    delregid = $("#refid").val();
    deldegree = $("#deg_id").val();

    if (pid > 0 && delregid > 0 && deldegree > 0) {

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
                delete_payment_h(pid, delregid, deldegree)
            }
        })

    } else {
        swal.fire({
            icon: 'error',
            title: "Payment !",
            text: "Invalid Details",
            timer: 3000,
            showConfirmButton: false
        });

        return false;
    }

}

function delete_payment_h(pid, delregid, deldegree) {
    var _token = $("input[name=_token]").val();
    $.ajax({
        url: "/payment/students/details/delete",
        type: 'POST',
        data: { _token: _token, plid: pid, regid: delregid, degree: deldegree },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Delete Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });

                $('#heading' + pid).addClass('deleted_text');
                $("#delbt" + pid).remove();

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

}

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}