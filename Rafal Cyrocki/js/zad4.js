const $colorInput= $("#color");

function changeColor(event) {
    const nowyKolor= $(event.target).val();
    $("body").css("background-color", nowyKolor);
}
$colorInput.keyup(changeColor);
