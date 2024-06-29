/* MENU PAGE */
function toggle() {
    $(this).parent().next().slideToggle(); 
    if ($(this).html() == "[-]"){ 
    $(this).html("[+]");
    } else { 
    $(this).html("[-]");
    }
}

function init() {
    $(".collapse").click(toggle);
}

$(document).ready(init);

/* ITEM PAGES */
jQuery(document).ready(($) => {
    $('.quantity').on('click', '.plus', function(e) {
        let $input = $(this).prev('input.qty');
        let val = parseInt($input.val());
        $input.val( val+1 ).change();
    });

    $('.quantity').on('click', '.minus', 
        function(e) {
        let $input = $(this).next('input.qty');
        var val = parseInt($input.val());
        if (val > 0) {
            $input.val( val-1 ).change();
        } 
    });

    $('.back-to-menu-button').click(function(){
        window.history.back();
    });
});