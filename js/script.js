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
        $('.product').slideToggle();
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
        $('.p-txt', this).slideToggle();
    }, function() {
        $('.p-txt', this).slideToggle();

    });



    //Form Validation
    $("#form").submit(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if ($("#name").val() && $("#email").val()) {
            alert("Hey " + name + ", Thanks for your feedback, we'll get back to you soon...We Got You!");
        } else {
            alert("Please provide your correct name and email!");
        }

    });



});