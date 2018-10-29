$(document).ready(() => {
    $btn1 = $("#btn-1");
    $btn2 = $("#btn-2");
    $btn3 = $("#btn-3");
    $btn4 = $("#btn-4");
    $pcard1 = $("#p-card1");
    $pcard2 = $("#p-card2");
    $pcard3 = $("#p-card3");
    $pcard4 = $("#p-card4");
    $braids = $(".braids");
    $display = $(".display");
    $characters = $(".characters");
    $flashcards = $(".flash-cards");
    $xIcon = $(".x-icon");

    $xIcon.on("click", () => {
        $braids.fadeOut(600);
    });

    $btn1.on("click", (event) => {
        event.preventDefault();
        $braids.fadeIn(600);
    });

    $btn2.on("click", (event) => {
        event.preventDefault();
        $pcard2.toggle();
    });

    $btn3.on("click", (event) => {
        event.preventDefault();
        $pcard3.toggle();
    });

    $btn4.on("click", (event) => {
        event.preventDefault();
        $pcard4.toggle();
    });

});