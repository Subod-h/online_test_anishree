$('document').ready(function () {
    $('#signup-btn').click(function () {
        var username = $('#name').val();
        var email = $('#email').val();
        var contact = $('#contact').val();
        var college = $('#input4').val();
        var course = $('#input5').val();

        // if(username === ''){
        //     $('#error-message').text('Username is required');
        // }else if(contact ==''){
        //     $('#error-message').text('Contact no is required');
        // }

        $.ajax({
            type: 'POST',
            url: 'backend brake out',
            contentType: 'application/json',
            data: JSON.stringify({ username, email, contact, college, course }),
            success: function (data) {
                console.log(data)
                alert("registration successful!");
            },
            error: function (error) {
                console.log(error);
            }
        })

        // console.log(username+ " " + password + " " + email);//




    })
})





$('document').ready(() => {
    $('#login-btn').click(function () {
        var login_name = $('#name').val();
        var login_contact = $('#contact').val();

        if (login_name === username && login_contact === contact) {
            $.ajax({
                type: 'POST',
                url: 'backend brake out',
                contentType: 'application/json',
                data: JSON.stringify({ login_name, login_contact}),
                success: function (data) {
                    console.log(data)
                    alert("login successful!");
                },
                error: function (error) {
                    console.log(error);
                }
            })
        } else{
            alert("invalid  details!");
        }


        

    })

})