function showModal(scholid, sc_type, scol_code) {

    var dis_type = 0;
    var radname = 'scholradio' + scholid;
    if (sc_type == 1) { // payment plan
        // dis_type=$("#scholradio"+scholid).val();

        dis_type = $('input[name="' + radname + '"]:checked').val();

        if (dis_type > 0) {

        } else {
            swal.fire({
                icon: 'error',
                title: "Scholarships !",
                text: "Invalid Details",
                timer: 3000,
                showConfirmButton: false
            });

            return false;
        }

    }

    var tot_val = $("#totAmount" + scholid).val();


    $('#scholcode').val(scol_code);
    $('#scolid').val(scholid);
    $('#distype').val(dis_type);
    $('#sctype').val(sc_type);
    $('#chkamount').val(tot_val);
    $('#add-pmhed').click();
}

function save_schols_cheque() {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Save it!'
    }).then((result) => {
        if (result.isConfirmed) {

            save_schol_withcheque();
        }
    });




}


function save_schol_withcheque() {

    scholid = $('#scolid').val();
    scol_code = $('#scholcode').val();
    dis_type = $('#distype').val();
    sc_type = $('#sctype').val();



    if (scholid == 0 || scol_code == "") {
        swal.fire({
            icon: 'error',
            title: "Scholarships!",
            text: "Invalid Details1",
            timer: 3000,
            showConfirmButton: false
        });

        return false;
    }
    /*scholid = $('#scolid').val();
    scol_code = $('#scholcode').val();
    dis_type = $('#distype').val();
    sc_type = $('#sctype').val();*/


    var tot_val = $("#totAmount" + scholid).val();

    var reg_no = $("#regno").val();
    var _token = $("input[name=_token]").val();
    var cheque_num = $("#chequeno").val();
    var cheque_date = $("#invdate").val();
    var cheque_refno = $("#refno").val();
    var cheque_amount = $("#chkamount").val();
    var cheque_remark = $("#chkremark").val();



    var codeArr = [];
    var desArr = [];
    var scvArr = [];
    var initamuArr = [];
    var paidArr = [];
    var balanceArr = [];
    var discountArr = [];

    var sch_table = "#scholtbl" + scholid + " > tbody tr.items";

    $(sch_table).each(function() {
        var currentRow = $(this);
        var cod = currentRow.find("td:eq(0) input[type='hidden']").val() || '';
        var desc = currentRow.find("td:eq(1) input[type='hidden']").val() || '';
        var scv = currentRow.find("td:eq(2) input[type='hidden']").val() || 0;
        var inam = currentRow.find("td:eq(3) input[type='hidden']").val() || 0;
        var pd = currentRow.find("td:eq(4) input[type='hidden']").val() || 0;
        var blns = currentRow.find("td:eq(5) input[type='hidden']").val() || 0;
        var dis = currentRow.find("td:eq(6) input[type='hidden']").val() || 0;

        codeArr.push(cod);
        desArr.push(desc);
        scvArr.push(scv);
        initamuArr.push(inam);
        paidArr.push(pd);
        balanceArr.push(blns);
        discountArr.push(dis);
    });




    $.ajax({
        url: "/proceed/Scholarships/students/save/cheque",
        type: 'POST',
        data: {
            _token: _token,
            scol_id: scholid,
            regid: reg_no,
            discount_type: dis_type,
            total_discount: tot_val,
            scol_code: scol_code,
            code: codeArr,
            desc: desArr,
            sclval: scvArr,
            initval: initamuArr,
            paidval: paidArr,
            blanceval: balanceArr,
            todis: discountArr,
            scol_type: sc_type,
            chequeno: cheque_num,
            cheque_date: cheque_date,
            chk_refno: cheque_refno,
            chk_amount: cheque_amount,
            chk_remark: cheque_remark,
        },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Save Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });


                $('#savebtn' + scholid).remove();
                $('#chequebtn' + scholid).remove();
                //$("#delbt_oth" + pid).remove();

            } else {

                swal.fire({
                    icon: 'error',
                    title: "Save Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });



            }


        }
    });

    $("#sdcd").click();

}