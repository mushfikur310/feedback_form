$(document).ready(function() {
      toastr.options = {
        'closeButton': true,
        'debug': false,
        'newestOnTop': false,
        'progressBar': true,
        'positionClass': 'toast-top-right',
        'preventDuplicates': false,
        'showDuration': '1000',
        'hideDuration': '1000',
        'timeOut': '4000',
        'extendedTimeOut': '1000',
        'showEasing': 'swing',
        'hideEasing': 'linear'
      }
    });

  // Toast Type
    $('#success').click(function(event) {
      toastr.success('You clicked Success toast');
    });
    $('#info').click(function(event) {
      toastr.info('You clicked Info toast')
    });
    $('#error').click(function(event) {
      toastr.error('You clicked Error Toast')
    });
    $('#warning').click(function(event) {
      toastr.warning('You clicked Warning Toast')
    });

  // Toast Position
    $('#position').click(function(event) {
      var pos = $('input[name=position]:checked', '#positionForm').val();
      toastr.options.positionClass = "toast-" + pos;
      toastr.options.preventDuplicates = false;
      toastr.info('This sample position', 'Toast Position')
    });