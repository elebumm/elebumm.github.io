/*

Script  : Reservation Form
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

*/

$(function() {

    "use strict";

    /* ================================================
       jQuery Validate - Reset Defaults
       ================================================ */

    $.validator.setDefaults({
        ignore: [],
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'small',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length || element.parent('label').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    /* 
    VALIDATE
    -------- */

    $("#reservationform").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            }
        },
        submitHandler: function(form) {

            $("#js-reservation-btn").attr("disabled", true);

            /* 
            CHECK PAGE FOR REDIRECT (Thank you page)
            ---------------------------------------- */

            var redirect = $('#reservationform').data('redirect');
            var noredirect = false;
            if (redirect == 'none' || redirect == "" || redirect == null) {
                noredirect = true;
            }

            $("#js-reservation-result").html('<p class="help-block">Please wait...</p>');

            /* 
            FETCH SUCCESS / ERROR MSG FROM HTML DATA-ATTR
            --------------------------------------------- */

            var success_msg = $('#js-reservation-result').data('success-msg');
            var error_msg = $('#js-reservation-result').data('error-msg');

            var dataString = $(form).serialize();

            /* 
             AJAX POST
             --------- */

            $.ajax({
                type: "POST",
                data: dataString,
                url: "php/reservation.php",
                cache: false,
                success: function(d) {
                    $(".form-group").removeClass("has-success");
                    if (d == 'success') {
                        if (noredirect) {
                            $('#js-reservation-result').fadeIn('slow').html('<div class="alert alert-success top-space">' + success_msg + '</div>').delay(3000).fadeOut('slow');
                        } else {
                            window.location.href = redirect;
                        }
                    } else {
                        $('#js-reservation-result').fadeIn('slow').html('<div class="alert alert-danger top-space">' + error_msg + '</div>').delay(3000).fadeOut('slow');
                    }
                    $("#js-reservation-btn").attr("disabled", false);
                }
            });
            return false;

        }
    });

})
