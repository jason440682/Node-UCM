requirejs.config({
    baseUrl: '/scripts/lib',

    paths: {
        jquery: 'jquery-3.1.1.min',
        bootstrap: 'bootstrap.min',
        date_picker: 'My97DatePicker/WdatePicker.js'
    },
    shim : {
        // 声明 bootstrap 加载前需要加载 jquery
        bootstrap : {
            deps : ['jquery']
        },
    }
});
