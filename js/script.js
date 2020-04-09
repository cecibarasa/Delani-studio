$(function() {
    let design = $('#design');
    let develop = $('#develop');
    let product = $('#product');


    //Show paragraph content
    $('.des').on('click', function() {
        $('.des').slideToggle();
        $(design).slideToggle();

    });
    $('.dev').on('click', function() {
        $('.dev').slideToggle();
        $(develop).slideToggle();
    });
    $('.pro').on('click', function() {
        $('.pro').slideToggle('slow');
        $(product).slideToggle();
    });

    //Hide paragraph content
    $(design).on('click', function() {
        $('.des').slideToggle();
        $(design).slideToggle();
    });
    $(develop).on('click', function() {
        $('.dev').slideToggle();
        $(develop).slideToggle();
    });
    $(product).on('click', function() {
        $('.pro').slideToggle();
        $(product).slideToggle();
    })

    //Overlay images

    $('.p-img').hover(function() {
        $('.p-txt').slideToggle('slow');
    }, function() {
        $('.p-txt').slideToggle('slow');
    });


    //Form Validation
    $("form#form").on('submit', function(event) {
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();

        if ($("input#name").val() && $("input#email").val()) {
            alert("Hey " + name + ", Thanks for your feedback, we'll get back to you soon...We Got You!");
        } else {
            alert("Please provide your correct name and email!");
        }

    });



});