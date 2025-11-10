document.addEventListener("DOMContentLoaded", function() {
    const applynow = document.getElementById("applynow");
    const form = document.getElementById("application_form");
    form.style.height = "0";
    form.style.filter = "blur(4px)";
    form.style.opacity = "0";
    form.style.transition = "height 0.8s ease, opacity 1s ease, filter 1s ease";

    /*
    transition is set on the main CSS. And element style is used for simplicity.
    These peramaters will allow the expansion of the parent as it changes height and fades in.
    */
    applynow.addEventListener("click", function (e) {
        transitionForm();
    });
    function transitionForm() {
        form.style.display = "block";
        /*
        The scrollHeight read-only property of the Element interface is a measurement of the height of an element's content, including content not visible on the screen due to overflow.
        using fixed pixel or auto will not work.
        This is found at https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
         */
        form.style.height = form.scrollHeight + "px";
        form.style.filter = "blur(0)";
        form.style.opacity = "0.9";
        setTimeout(function () {scroll();}, 1000);
    }
    function scroll(){
        form.scrollIntoView({ behavior: "smooth", block: "end" });
    }
})