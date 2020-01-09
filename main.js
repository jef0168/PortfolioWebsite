$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log("Clicked button")


        var name = $('.namePerson').val();
        var email = $('.email').val()
        var message = $('.message').val()
        var stat = $('.status')
        stat.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            stat.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            stat.append('<div>Email is NOT valid</div>')
        }

        if (name.length > 1) {
            stat.append('<div>Name is valid</div>')
        } else {
            event.preventDefault()
            stat.append('<div>Name is NOT valid</div>')
        }

        if (message.length > 0) {
            stat.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            stat.append('<div>Message is NOT valid</div>')
        }
    })
})