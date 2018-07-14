// Mailchimp Newsletter
$(document).ready(function() {
    $('#invite').ketchup().submit(function() {
        if ($(this).ketchup('isValid')) {
            var action = $(this).attr('action');
            $('#invite button').html('<i class="fa fa-spinner fa-spin" style=" font-size: 18px; top:1px; left:0;"></i>');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    email: $('#address').val()
                },
                success: function(data) {
                    setTimeout(function() {
                        $('#invite button').html('<i class="fa fa-check bounceIn animated" style=" font-size: 20px; top:0; left:0;"></i>');
                    }, 1000)
                },
                error: function() {
                    setTimeout(function() {
                        $('#invite button').html('<i class="fa fa-angle-right"></i>');
                        $('#invite').addClass('shake animated');
                    }, 1000)
                    setTimeout(function() {
                        $('#invite').removeClass('shake animated');
                    }, 2000)
                }
            });
        }
        return false;
    });
});
