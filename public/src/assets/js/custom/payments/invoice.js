$(document).ready(function() {
    $("#sdcd").click(function() {
        $('#pfid').val('');
        $('#pfname').val('');
        $('#pfcode').val('');
    });
});


$("#style-3").on('click', '.add-row-rec', function() {


    var itemcode = $(this).closest("tr").find("td:eq(0) input[type='hidden']").val();
    var itemname = $(this).closest("tr").find("td:eq(1) input[type='hidden']").val();
    var unitprice = $(this).closest("tr").find("td:eq(2) input[type='hidden']").val();

    unitprice = parseFloat(unitprice);

    unitprice1 = unitprice.toFixed(2);
    //alert('aaa');

    var tblrow = '<tr>' +
        '<td scope="col" width="15%"><input type="hidden" id="itemcode[]" name="itemcode[]" value="' + itemcode + '">' + itemcode + '</td>' +
        '<td scope="col"><input type="hidden" value="' + itemname + '">' + itemname + '</td>' +
        '<td width="20%" style="text-align: right" scope="col"><input type="number" class="form-control file-upload-input mb-1 alert-light-success pvalue"  name="unitprice[]"  placeholder="value"  value="' + unitprice1 + '" step=".01" style="text-align: right" required></td>' +
        '<td width="10%"  style="text-align: right" scope="col"><input type="number" class="form-control file-upload-input mb-1 alert-light-success qtyvl"  name="qty[]"  placeholder="value"  value="1" style="text-align: right" required></td>' +
        '<td width="20%" style="text-align: right" scope="col"><input type="number" class="form-control file-upload-input mb-1 alert-light-success pvalue"  name="amount[]"  placeholder="value"  value="' + unitprice1 + '" step=".01" style="text-align: right" required></td>' +
        '<td class="text-center" scope="col" width="10%"> <a href="javascript:void(0);" class="remove-row-rec"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle table-cancel"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></a></td>' +
        '</tr>';

    //tableBody = $("#invtable tbody");

    //$('#invtable').closest('table').find('tr:last').prev().before(tblrow);

    //tableBody.append(tblrow);

    var i = $("#invtable > tbody > tr").length;

    $('#invtable > tbody > tr').eq(i - 1).before(tblrow);

    var i = $("#invtable > tbody > tr").length;








    var tot_val = 0;

    $("#invtable > tbody tr").each(function() {

        var currentRow = $(this);

        var unite_price = currentRow.find("td:eq(2) input[type='number']").val() || 0;
        var qt_val = currentRow.find("td:eq(3) input[type='number']").val() || 0;
        unite_price = parseFloat(unite_price);
        qt_val = parseFloat(qt_val);
        subtot = unite_price * qt_val;
        currentRow.find("td:eq(4) input[type='number']").val(subtot);

        tot_val += subtot;

    });

    $('#totAmount').val(tot_val.toFixed(2));
    $('#clsmod').click();
});

$("#invtable").on('click', '.remove-row-rec', function() {
    var tbl_raw = $(this).closest('tr');
    tbl_raw.remove();

});


$(document).ready(function() {
    $("#invtable").on("input", function() {
        tot_val = 0;
        $("#invtable > tbody tr").each(function() {

            var currentRow = $(this);

            var unite_price = currentRow.find("td:eq(2) input[type='number']").val() || 0;
            var qt_val = currentRow.find("td:eq(3) input[type='number']").val() || 0;
            unite_price = parseFloat(unite_price);
            qt_val = parseFloat(qt_val);
            subtot = unite_price * qt_val;
            currentRow.find("td:eq(4) input[type='number']").val(subtot);

            tot_val += subtot;

        });

        $('#totAmount').val(tot_val.toFixed(2));
    });
});


function delete_other_payment(pid) {

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
        url: "/payment/students/other/delete",
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


                $('#heading_oth' + pid).addClass('deleted_text');
                $("#delbt_oth" + pid).remove();

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