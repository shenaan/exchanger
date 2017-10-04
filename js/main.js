$(document).ready(function () {
   $("#btn-mob").click(function (e) {
       var $headerModal = $('#header-modal');
       e.preventDefault();
       $(this).toggleClass('active');
       $headerModal.toggleClass('active');
   })

    $(document).on('click',function(e){
        if(!$(e.target).closest('#btn-mob,#header-modal').length) {
            $('#btn-mob,#header-modal').removeClass('active');
        }
    });

});
