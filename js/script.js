$(function () {
    let desp = $('#desp');
    let devp = $('#devp');
    let prod = $('#prop');
    let destxt = $('#destxt');
    let devtxt = $('#devtxt');
    let protxt = $('#protxt');

    $(desp).hide();
    $(devp).hide();
    $(prop).hide();

    //Show paragraph content
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(desp).show(500);
        $(destxt).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devp).show(500);
        $(devtxt).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(prod).show(500);
        $(protxt).animate({fontWeight:'bolder',fontSize:'30px'})
    });

    //Hide paragraph content
    $(desp, destxt).on('click', function () {
        $('.des').slideDown();
        $(desp).hide(500);
        $(destext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(devp, devtxt).on('click', function () {
        $('.dev').slideDown();
        $(devp).hide(500);
        $(devtext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(prop, protext).on('click', function () {
        $('.pro').slideDown();
        $(prod).hide(500);
        $(protxt).animate({fontWeight:'normal',fontSize:'16px'})
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
                alert ("Hey " + name + ", Thanks for your feedback, we'll get back to you shortly...");
            }
            else {
                alert("Please provide your correct name and email!");
            }

        });



});