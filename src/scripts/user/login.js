require(['jquery'], function ($) {
    var password = $('#password');
    password.blur(function () {
        console.log('Send Ajax! Please wait...');
        console.log(this.value);
        $.ajax({
            url: '/UCM/user/5',
            data: { _method: 'PUT', firstName: 'GYM123456' },
            type: 'POST',
            contentType: "application/x-www-form-urlencoded",
            success: function (data, textStatus) {
                console.log('Success!');
                console.log(data);
                console.log(textStatus);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('Failed!');
                console.log(XMLHttpRequest);
                console.log(errorThrown);
                console.log(XMLHttpRequest.responseText);
            }
        });
    });

    $('#verification-code-image').click(function () {
        var data = { 'code': $('#verification-code')[0].value };
        console.log('Send Ajax! Please wait...');
        console.log(data);
        $.ajax({
            url: '/UCM/checkVerificationCode',
            data: data,
            type: 'post',
            async : false,
            success: function (data, textStatus) {
                console.log('Success!');
                console.log(data);
                console.log(textStatus);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('Failed!');
                console.log(XMLHttpRequest);
                console.log(errorThrown);
                console.log(XMLHttpRequest.responseText);
            }
        });
        console.log('post end!');
    });
});