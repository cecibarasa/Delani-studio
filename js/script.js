$(function () {
    let design = $('#design');
    let develop = $('#develop');
    let product = $('#product');
    let destxt = $('#destxt');
    let devtxt = $('#devtxt');
    let protxt = $('#protxt');

    $(design).hide();
    $(develop).hide();
    $(product).hide();

    //Show paragraph content
    $('.des').on('click', function () {
        $('.des').slideToggle('slow');
        $(design).slideToggle(500);
        $(destxt).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideToggle('slow');
        $(develop).slideToggle(500);
        $(devtxt).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(product).show(500);
        $(prodtxt).animate({fontWeight:'bolder',fontSize:'30px'})
    });

    //Hide paragraph content
    $(design, destxt).on('click', function () {
        $('.des').slideToggle();
        $(design).slideToggle(500);
        $(destxt).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(develop, devtxt).on('click', function () {
        $('.dev').slideToggle();
        $(develop).slideToggle(500);
        $(devtxt).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(product, prodtxt).on('click', function () {
        $('.pro').slideToggle();
        $(product).slideToggle(500);
        $(prodtxt).animate({fontWeight:'normal',fontSize:'16px'})
    })

    //Overlay images

    $('.portimg').hover(function(){
        $('.porttext',this).slideToggle('slow');
     }, function(){
        $('.porttext',this).slideToggle('slow');
     });


    //Form Validation
        $("form#form").on('submit',function(event){
            event.preventDefault();
            let name = $("input#name").val();
            let email = $("input#email").val();
            let message = $("textarea#message").val();

            if ($("input#name").val() && $("input#email").val()){
                alert ("Hey " + name + ", Thanks for your feedback, we'll get back to you soon...We Got You!");
            }
            else {
                alert("Please provide your correct name and email!");
            }

        });



});