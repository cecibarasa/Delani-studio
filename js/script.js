$(function() {
    let design = $('#design');
    let develop = $('#develop');
    let product = $('#product');

    //Show paragraph content
    $('.design').click(function() {
        $('.design').slideToggle();
        $(design).slideToggle();

    });
    $('.develop').click(function() {
        $('.develop').slideToggle();
        $(develop).slideToggle();
    });
    $('.product').click(function() {
        $('.product').slideToggle('slow');
        $(product).slideToggle();
    });

    //Hide paragraph content
    $(design).click(function() {
        $('.design').slideToggle();
        $(design).slideToggle();
    });
    $(develop).click(function() {
        $('.develop').slideToggle();
        $(develop).slideToggle();
    });
    $(product).click(function() {
        $('.product').slideToggle();
        $(product).slideToggle();
    })

    //Overlay images

    $('.p-img').hover(function() {
        $('.p-txt', this).slideToggle('slow');
    }, function() {
        $('.p-txt', this).slideToggle('slow');

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