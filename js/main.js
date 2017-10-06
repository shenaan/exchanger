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
        range: false,
        min: 0,
        max: 50000,
        values: [17599],
        slide: function( event, ui ) {
            $( "#give-amount" ).val( ui.values[ 0 ]);
        }
    });
    $( "#give-amount" ).val( $( "#give-range" ).slider( "values", 0 ));


    $('.give-options').styler();


});
