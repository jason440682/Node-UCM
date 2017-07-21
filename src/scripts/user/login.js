const $ = window.jQuery;
$(() => console.log('heiheihei'));
const password = $('#password');
password.blur(() => {
    console.log('Yes!')
    console.log('Send Ajax! Please wait...');
    console.log(password[0].value);
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
    console.log('click!!');
    let data = new FormData();
    let array = $('form').serializeArray();
    array.forEach(item => data.append(item.name, item.value));
    console.log(data);
});