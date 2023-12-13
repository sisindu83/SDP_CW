

</div>
<!--  END CONTENT AREA  -->
</div>
<!-- END MAIN CONTAINER -->


<!-- BEGIN GLOBAL MANDATORY SCRIPTS -->
<script src="<?php echo url('/'); ?>/src/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/mousetrap/mousetrap.min.js"></script>
<script src="<?php echo url('/'); ?>/layouts/vertical-dark-menu/app.js"></script>
<!-- END GLOBAL MANDATORY SCRIPTS -->

<!--  BEGIN CUSTOM SCRIPTS FILE  -->
<script src="<?php echo url('/'); ?>/src/plugins/src/filepond/filepond.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/filepond/FilePondPluginFileValidateType.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/filepond/FilePondPluginImageExifOrientation.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/filepond/FilePondPluginImagePreview.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/filepond/FilePondPluginImageCrop.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/filepond/FilePondPluginImageResize.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/filepond/FilePondPluginImageTransform.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/filepond/filepondPluginFileValidateSize.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/notification/snackbar/snackbar.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/sweetalerts2/sweetalerts2.min.js"></script>
<script src="<?php echo url('/'); ?>/src/assets/js/users/account-settings.js"></script>

<script src="<?php echo url('/'); ?>/src/assets/js/scrollspyNav.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/flatpickr/flatpickr.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/flatpickr/custom-flatpickr.js"></script>

<!--  END CUSTOM SCRIPTS FILE  -->


<!-- BEGIN PAGE LEVEL PLUGINS -->
<script src="<?php echo url('/'); ?>/src/plugins/src/filepond/custom-filepond.js"></script>
<!-- END PAGE LEVEL PLUGINS -->


<script src="<?php echo url('/'); ?>/src/plugins/src/sweetalerts2/custom-sweetalert.js"></script>
<script src="<?php echo url('/'); ?>/src/assets/js/authentication/2-Step-Verification.js"></script>



<script src="<?php echo url('/'); ?>/src/plugins/src/global/vendors.min.js"></script>
<script src="<?php echo url('/'); ?>/src/assets/js/custom.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/table/datatable/datatables.js"></script>

<script src="<?php echo url('/'); ?>/src/plugins/src/drag-and-drop/dragula/dragula.min.js"></script>
<script src="<?php echo url('/'); ?>/src/plugins/src/drag-and-drop/dragula/custom-dragula.js"></script>



<!-- END GLOBAL MANDATORY SCRIPTS -->

<!-- BEGIN PAGE LEVEL SCRIPTS -->

@isset($tab_dtls)


@if($tab_dtls)

@if($tab_dtls['active_link']!='')
<script>
   $('.mylinkmenu').removeClass('active');
    $("{{ $tab_dtls['active_link'] }}").addClass('active');
</script>

@endif

@endif
@endisset


<script>
// var e;
c1 = $('#style-1').DataTable({
"dom": "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>>" +
"<'table-responsive'tr>" +
"<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
"oLanguage": {
    "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
    "sInfo": "Showing page _PAGE_ of _PAGES_",
    "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    "sSearchPlaceholder": "Search...",
   "sLengthMenu": "Results :  _MENU_",
},
"stripeClasses": [],
"lengthMenu": [5, 10, 20, 50],
"pageLength": 10
});

multiCheck(c1);

c2 = $('#style-2').DataTable({
headerCallback:function(e, a, t, n, s) {
    e.getElementsByTagName("th")[0].innerHTML=`
    <div class="form-check form-check-primary d-block new-control">
        <input class="form-check-input chk-parent" type="checkbox" id="form-check-default">
    </div>`
},
columnDefs:[ {
    targets:0, width:"30px", className:"", orderable:!1, render:function(e, a, t, n) {
        return `
        <div class="form-check form-check-primary d-block new-control">
            <input class="form-check-input child-chk" type="checkbox" id="form-check-default">
        </div>`
    }
}],
"dom": "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>>" +
"<'table-responsive'tr>" +
"<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
"oLanguage": {
    "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
    "sInfo": "Showing page _PAGE_ of _PAGES_",
    "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    "sSearchPlaceholder": "Search...",
   "sLengthMenu": "Results :  _MENU_",
},
"lengthMenu": [5, 10, 20, 50],
"pageLength": 10
});

multiCheck(c2);

c3 = $('#style-3').DataTable({
"dom": "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>>" +
"<'table-responsive'tr>" +
"<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
"oLanguage": {
    "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
    "sInfo": "Showing page _PAGE_ of _PAGES_",
    "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    "sSearchPlaceholder": "Search...",
   "sLengthMenu": "Results :  _MENU_",
},
"stripeClasses": [],
"lengthMenu": [5, 10, 20, 50],
"pageLength": 10
});

multiCheck(c3);

c4 = $('#style-4').DataTable({
headerCallback:function(e, a, t, n, s) {
    e.getElementsByTagName("th")[0].innerHTML=`
    <div class="form-check form-check-primary d-block new-control">
        <input class="form-check-input chk-parent" type="checkbox" id="form-check-default" >
    </div>`
},
columnDefs:[ {
    targets:0, width:"30px", className:"", orderable:!1, render:function(e, a, t, n) {
        return `
        <div class="form-check form-check-primary d-block new-control">
            <input class="form-check-input child-chk add-row-rec" type="checkbox" id="form-check-default">
        </div>`
    }
}],
"dom": "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>>" +
"<'table-responsive'tr>" +
"<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
"oLanguage": {
    "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
    "sInfo": "Showing page _PAGE_ of _PAGES_",
    "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    "sSearchPlaceholder": "Search...",
   "sLengthMenu": "Results :  _MENU_",
},
"lengthMenu": [5, 10, 20, 50],
"pageLength": 10
});

multiCheck(c4);
</script>
<!-- END PAGE LEVEL SCRIPTS -->

</body>
</html>
