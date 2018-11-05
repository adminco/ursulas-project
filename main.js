

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
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw8r6Avdseg7IId43GXm2FUX8XcLRyaVnwn6lOk275HQi2R0wGl/exec';
    const form = document.forms['submit-to-google-sheet'];
    $btn = $('#btn');
    $tclose = $("#t-close");
    $thanks = $(".thanks");
    $toBlur = $(".toBlur");
    
    // This is for the flash-cards
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

    //   Creating an event handler to use to submit he form
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .then($thanks.setAttribute('display','block'))
            .catch(error => console.error('Error!', error.message))
        });
    
    $btn.on("click", () => {
        $thanks.fadeIn(600).delay(100);
        $toBlur.css('filter', 'blur(5px)');
    });

    $tclose.on("click", () => {
        $thanks.fadeOut(600);
        $toBlur.css('filter', 'blur(0px)');
        $('#myForm').trigger("reset");
    });

    // tclose.addEventListener('click', e => {
    //     thanks.setAttribute('display','none');
    // });

});