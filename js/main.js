$(document).ready(function () {

    $('input[type="submit"]').click(function (event) {

        // Stop the default form action from executing
        event.preventDefault();

        // Get the value of text input fields
        var incomplete = $('input[type="text"]').val();

        // Check if nothing was enetered using the variable
        if (incomplete == "") {

            // Show alert 
            alert("Incomplete text fields");
        } else {
            $('input[type="submit"]').submit();
            window.location = "thankyou.html";
        }
    });

});
