var Common = {
	init: function() {
        Common.menu();
        Common.main();
	},
    menu: function() {
        $('.mob_btn').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            $('aside,body').toggleClass('open');
        });
    },
	main: function() {
        setTimeout(function() {
          $('select').styler();
        }, 100);
        $('input, textarea').on('click focus blur change keypress focusin',function(){
            if($(this).val() != "") {
                $(this).addClass('val')
            }else{
                $(this).removeClass('val')
            }
        });
    },
};

$(function() {
	Common.init();
});