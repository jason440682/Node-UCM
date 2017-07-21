const $ = window.jQuery;

$('#submit').click((event) => {
    const data = {}
    $('form').serializeArray().forEach(function(element) {
        data[element.name] = element.value
    }, this);
    console.log(data)

    $.ajax({
        url: '/UCM/SignUp',
        type: 'POST',
        data: data,
        contentType: "application/x-www-form-urlencoded",
        beforeSend() {
            console.log(this)
            console.log('Send Ajax! Please wait...');
        },
        success(data, status) {
            console.log('post success!')
            console.log(data)
            console.log(status)
        },
        error(xmlHttpRequest, status, errorThrown) {
            console.log('Failed!');
            console.log(xmlHttpRequest.status, xmlHttpRequest.responseText, errorThrown)
        }
    })

    return false;
})
