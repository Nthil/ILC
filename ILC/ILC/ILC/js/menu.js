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