

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
    const btn = document.querySelector('#formBtn');

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

    // This is an Ajax request to POST the form data to Google sheets
    // $("#btn").on('click', (event) => {
    //     event.preventDefault();
    //     $jqxhr = $.ajax({
    //     url: url,
    //     method: "GET",
    //     dataType: "json",
    //     data: $form.serialize()
    //     })
    //     console.log("Success!")
    // });

  

    //   Creating an event handler to use to submit he form
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        });
    

});