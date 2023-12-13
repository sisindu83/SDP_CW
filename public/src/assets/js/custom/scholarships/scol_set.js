$('#sco').change(function() {
    $('#sbatch').val('');
    $('#toggleAccordion').html('');
});


$('#sbatch').change(function() {

    var _token = $("input[name=_token]").val();
    var sco_code = $('#sco').val();
    var batch_cd = $('#sbatch').val();



    if (sco_code != '' && batch_cd != '') {

        $.ajax({
            url: "/payment/Scholarships/values",
            type: 'POST',
            data: {
                _token: _token,
                sco_code: sco_code,
                sbatch: batch_cd

            },
            success: function(data) {

                if (data.mtype == 1) {


                    $('#toggleAccordion').html(data.divdata);

                } else {

                }

            }
        })
    };
});




$(document).ready(function() {

    $('input[type=radio][name=sctype]').change(function() {
        if (this.value == 1) {
            $('#pmplndiv').removeClass("hidden")
            $('#othpmplndiv').addClass("hidden")
            $('#s_pname').prop('required', true);
            $('#add-pmhed').addClass("hidden");
            $('#pers').prop('disabled', false);
        } else if (this.value == 0) {
            $('#pmplndiv').addClass("hidden")
            $('#othpmplndiv').removeClass("hidden")
            $('#s_pname').prop('required', false);
            $('#tblid').html('');
            $('#add-pmhed').removeClass("hidden");
            $('#s_pname').prop('required', false);
            $('#amnt').prop('checked', true);
            $('#pers').prop('disabled', true);

        }
    });

});


$(document).ready(function() {

    $('input[type=radio][name=vltype]').change(function() {
        if (this.value == 0) {
            $('#thval').text("%")
        } else if (this.value == 1) {
            $('#thval').text("Amount")
        }
    });

});


// modal

$("#style-3").on('click', '.add-row-rec', function() {


    var itemcode = $(this).closest("tr").find("td:eq(0) input[type='hidden']").val();
    var itemname = $(this).closest("tr").find("td:eq(1) input[type='hidden']").val();


    var tblrow = '<tr>' +
        ' <td scope="col" >' + itemcode + '</td>' +
        '<td scope="col"><input type="hidden" name="pf_name[]" value="' + itemname + '" required>' +
        itemname + '</td>' +
        '<td><input type="hidden" name="pf_code[]" value="' + itemcode +
        '" required><input type="number" class="form-control form-control-sm mb-6" name="pament_val[]" id="' +
        itemcode + '" placeholder="value"  value="" step=".01" style="text-align: right" required></td>' +
        '</tr>';


    var found_code = false;

    $("#invtable > tbody tr").each(function() {

        var currentRow = $(this);
        var tbl_itemcode = currentRow.find("td:eq(2) input[type='hidden']").val() || '';
        if (tbl_itemcode == itemcode) {
            found_code = true;
        }

    });

    if (found_code == false) {
        tableBody = $("#invtable tbody");
        tableBody.append(tblrow);
    } else {

        swal.fire({
            icon: 'error',
            title: "Add Item!",
            text: "already exists",
            timer: 3000,
            showConfirmButton: false
        });
    }



    $('#clsmod').click();
});


function delete_scol_plan(pid) {


    //delregid = $("#refid").val();
    // deldegree = $("#deg_id").val();

    if (pid > 0) {

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
                delete_scol_h(pid)
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

function delete_scol_h(pid) {

    var _token = $("input[name=_token]").val();
    $.ajax({
        url: "/Scholarships/delete",
        type: 'POST',
        data: {
            _token: _token,
            scol_id: pid

        },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Delete Records!",
                    text: data.msg,
                    timer: 3000,
                    showConfirmButton: false
                });


                //$('#heading_oth' + pid).addClass('deleted_text');
                $("#sco_oth" + pid).remove();

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