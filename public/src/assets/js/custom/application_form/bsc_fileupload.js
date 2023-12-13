// var fileTypes = ['pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png', 'txt'];  //acceptable file types
var fileTypes = ['pdf']; //acceptable file types
var myuel = 'http://127.0.0.1:8000'

function readURL(input, doctype) {

    if (doctype == 1) {
        var fileTypes = ['jpg', 'jpeg', 'png'];
    } else {

        var fileTypes = ['pdf'];
    }
    if (input.files && input.files[0]) {
        var extension = input.files[0].name.split('.').pop().toLowerCase(), //file extension from input file
            isSuccess = fileTypes.indexOf(extension) > -1; //is extension in acceptable types

        if (isSuccess) { //yes

            var reader = new FileReader();
            var successimg = false;

            if (extension == 'pdf') {
                $(input).closest('.fileUpload').find(".icon").attr('src',
                    myuel + '/src/assets/img/icon/pdf.svg');
            } else if (extension == 'docx') {

                $(input).closest('.fileUpload').find(".icon").attr('src',
                    myuel + '/src/assets/img/icon/docx_icon.svg ');
            } else if (extension == 'rtf') {
                $(input).closest('.fileUpload').find(".icon").attr('src',
                    myuel + '/src/assets/img/icon/rtf.svg ');
            } else if (extension == 'png') {

                $(input).closest('.fileUpload').find(".icon").attr('src',
                    myuel + '/src/assets/img/icon/png.svg');
            } else if (extension == 'jpg' || extension == 'jpeg') {
                $(input).closest('.fileUpload').find(".icon").attr('src',
                    myuel + '/src/assets/img/icon/jpg.svg');
            } else if (extension == 'txt') {
                $(input).closest('.fileUpload').find(".icon").attr('src',
                    myuel + '/src/assets/img/icon/txt.svg');
            } else {


                $(input).closest('.fileUpload').find(".icon").attr('src',
                    myuel + '/src/assets/img/icon/error_doc.svg');

            }

            if (doctype == 1) {


                const [file] = imgInp.files
                if (file) {
                    blah.src = URL.createObjectURL(file);

                    $('#profpic').removeClass('hidden');
                    $('#profpic').css({ opacity: 0, visibility: "visible" }).animate({ opacity: 1 }, 1000);
                    //$('#profpic').fadeOut(200);

                    // $('#profpic').fadeIn(10);
                }
            }







            reader.readAsDataURL(input.files[0]);




            const fsize = input.files[0].size;
            const file_m = Math.round((fsize / 1024));


            if (file_m > 20480) {

                input.value = '';
                let timerInterval
                Swal.fire({
                    title: 'File Upload!',
                    html: 'Please select a file less than 20mb',
                    icon: 'error',
                    timer: 2500,
                    timerProgressBar: false,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {

                    }
                });

            } else {


                if (doctype == 1) {
                    //$('#pr1').addClass('hidden');
                    $('#pr1').removeClass('hidden');

                }

                if (doctype == 2) {
                    //$('#pr1').addClass('hidden');
                    $('#pr2').removeClass('hidden');

                }

                if (doctype == 3) {
                    //$('#pr1').addClass('hidden');
                    $('#pr3').removeClass('hidden');

                }

                if (doctype == 4) {
                    //$('#pr1').addClass('hidden');
                    $('#pr4').removeClass('hidden');

                }

                if (doctype == 5) {
                    //$('#pr1').addClass('hidden');
                    $('#pr5').removeClass('hidden');

                }


                var appid_f = $('#appid_f').val();
                var file = input.files[0];
                var _token = $("input[name=_token]").val();



                var postData = new FormData();
                postData.append('file', input.files[0]);
                postData.append('_token', _token);
                postData.append('appid', appid_f);
                postData.append('filetype', doctype);




                $.ajax({
                    url: "/upload/files",
                    async: true,
                    type: "post",
                    contentType: false,
                    data: postData,
                    processData: false,
                    success: function(data) {

                        if (data.mtype == 1) {

                            if (doctype == 1) {
                                $('#pr1').addClass('hidden');

                            }

                            if (doctype == 2) {
                                $('#pr2').addClass('hidden');
                            }

                            if (doctype == 3) {
                                $('#pr3').addClass('hidden');
                            }

                            if (doctype == 4) {
                                $('#pr4').addClass('hidden');
                            }

                            if (doctype == 5) {
                                $('#pr5').addClass('hidden');
                            }

                            swal.fire({
                                icon: 'success',
                                title: "File Upload!",
                                text: data.msg,
                                timer: 2500,
                                showConfirmButton: false
                            });

                            $("#filetbl").html(data.tbl);
                            $("#profilepic").html(data.prof_url);


                            input.value = '';

                        } else {

                            if (doctype == 1) {
                                $('#pr1').addClass('hidden');

                            }

                            if (doctype == 2) {
                                $('#pr2').addClass('hidden');
                            }

                            if (doctype == 3) {
                                $('#pr3').addClass('hidden');
                            }

                            if (doctype == 4) {
                                $('#pr4').addClass('hidden');
                            }

                            if (doctype == 5) {
                                $('#pr5').addClass('hidden');
                            }



                            swal.fire({
                                icon: 'error',
                                title: "File Upload!",
                                text: data.msg,
                                timer: 2500,
                                showConfirmButton: false
                            });



                            input.value = '';



                        }


                    }
                });

            }



        } else {

            if (doctype == 1) {

                $('#blah').addClass('hidden');

            }

            $(input).closest('.fileUpload').find(".icon").attr('src',
                myuel + '/src/assets/img/icon/error_doc.svg');

            let timerInterval
            Swal.fire({
                title: 'File Upload!',
                html: 'Please upload valid file.',
                icon: 'error',
                timer: 2500,
                timerProgressBar: false,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {

                }
            });




        }
    }
}
$(document).ready(function() {

    $(document).on('change', '.up', function() {
        var id = $(this).attr('id'); /* gets the filepath and filename from the input */
        var profilePicValue = $(this).val();
        var fileNameStart = profilePicValue.lastIndexOf('\\'); /* finds the end of the filepath */
        profilePicValue = profilePicValue.substr(fileNameStart + 1).substring(0,
            20); /* isolates the filename */
        //var profilePicLabelText = $(".upl"); /* finds the label text */
        if (profilePicValue != '') {
            //console.log($(this).closest('.fileUpload').find('.upl').length);
            $(this).closest('.fileUpload').find('.upl').html(
                profilePicValue); /* changes the label text */
        }
    });

});




function delete_file(app_id, file_id) {

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
            delete_file_id(app_id, file_id);



        }
    })

}


function delete_file_id(app_id, file_id) {


    if (app_id == 0) {


        swal.fire({
            icon: 'error',
            title: "Delete Filea!",
            text: "Invalid Access",
            timer: 2500,
            showConfirmButton: false
        });

        return;
    }


    if (file_id == 0) {


        swal.fire({
            icon: 'error',
            title: "Delete Filea!",
            text: "Invalid Files",
            timer: 2500,
            showConfirmButton: false
        });

        return;
    }


    var _token = $("input[name=_token]").val();


    $.ajax({
        url: "/delete/files",
        type: 'POST',
        data: { _token: _token, appid: app_id, fileid: file_id },
        success: function(data) {

            if (data.mtype == 1) {
                swal.fire({
                    icon: 'success',
                    title: "Delete File!",
                    text: data.msg,
                    timer: 2500,
                    showConfirmButton: false
                });
                var div_id = "#" + app_id + '_' + file_id;

                if (data.rem_prof == 1) {
                    $("#profilepic").html('');
                }
                $(div_id).remove();

            } else {

                swal.fire({
                    icon: 'error',
                    title: "Delete File!",
                    text: data.msg,
                    timer: 2500,
                    showConfirmButton: false
                });






            }


        }
    });



}