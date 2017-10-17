$(document).ready(function () {

    //header modal

   $("#btn-mob").click(function (e) {
       var $headerModal = $('#header-modal');
       e.preventDefault();
       $(this).toggleClass('active');
       $headerModal.toggleClass('active');
   });

    $(document).on('click',function(e){
        if(!$(e.target).closest('#btn-mob,#header-modal').length) {
            $('#btn-mob,#header-modal').removeClass('active');
        }
    });

   //range slider

    $( "#give-slider" ).slider({
        // range: false,
        min: 0,
        max: 50000,
        value: 17599,
        slide: function( event, ui ) {
            $( "#give-amount" ).val( ui.value);
        }
    });

    $( "#receive-slider" ).slider({
        // range: false,
        min: 0,
        max: 50000,
        value: 352,
        slide: function( event, ui ) {
            $( "#receive-amount" ).val( ui.value);
        }
    });
    // $( "#give-amount" ).val( $( "#give-range" ).slider( "option","value", 17599));


    $('.give-options').styler();
    $('.receive-options').styler();


});
