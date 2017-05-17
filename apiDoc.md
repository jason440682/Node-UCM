# UCM 后台相关接口
这份 API 接口需求只写了我前端传递的数据和需要的数据，省略了实际上传回来的数据可能需要包括的 Status Code 等相关信息，具体设计交给 Kevin 吧！

返回的数据我写成了类似 JSON 的格式，前面是字段名，后面是字段的值的类型，有些类型后面带括号的是我自己的备注，希望对 Kevin 后台对字段处理优化的时候能有帮助。比如有些字段的类型是 `String (Checkbox)` ，表示他在前端是个单选框的值，那么 Kevin 在后台处理的时候可以针对这一点对数据表进行优化。更多的信息 Kevin 可以看一下 Raymond 发给我们的设计稿，所有的字段都有在设计稿里面出现的。

由于时间关系，我可能暂时不能写完整个 API 的接口信息，所以先发一份写完的接口给 Kevin 看。如果 Kevin 有足够的时间，Kevin 可以看一下 Raymond 的设计稿，我的 API 需求基本是跟设计稿是一样的，甚至 Kevin 可以直接根据设计稿对数据库进行设计了，只要返回的数据有前端需要的数据就可以了。

整个 API 文档可能写的不是很好，Kevin 有问题可以在群上问，我看到后会立即回复的！

## 验证码的接口：
注：验证码的接口之前没做过，不知道一般是不是这样子做的？如果不是的话就按照你们做的方式来吧，这个是我自己推测的验证码的接口，可能安全和性能方面不是这样子考虑的。。

GET 返回的数据：
```
{
    url:        String,     // 验证码图片地址的 URL，值为字符串类型，下同
    value:      String      // 验证码的值，传回给前端方便做校验
}
```

## 登录（Login）的接口：

POST 的数据：
```
{
    username:   String,
    password:   String
}
```
POST 返回的数据：
```
// 记得需要有返回登录是否成功的信息
{
    user_id:    Int,
    user_name:  String
}
```

## 注册（Sign Up）的接口（POST）：
POST 的数据：
```
{
    username:                   String,
    password:                   String,
    security_question:          String,
    security_question_answer:   String,
    enable_auth_login:          Boolean,
    send_passcode_to:           String (CheckBox，只有 Mobile Phone 和 Email 两个选项，可以考虑换成 Int 或其他),
    first_name:                 String,
    last_name:                  String,
    email:                      String,
    mobile_phone:               Int,
    other_phone:                Int,
    business_name:              String,
    business_type:              String (CheckBox，选项值暂时未定),
    business_time_zone:         String (CheckBox，选项值暂时未定),
    work_email:                 String,
    business_phone_number:      Int,
    business_address:           String,
    business_description:       String (内容可能比较多，为 Textarea 区域),
    business_logo_file:         File (Logo 的附件文件),
}
```
返回的数据：
```
{
    // 暂时返回注册是否成功即可
}
```

## 创建员工用户（Create Staff User）的接口：
POST 的数据：
```
{
    username:                   String,
    password:                   String,
    security_question:          String,
    security_question_answer:   String,
    enable_auth_login:          Boolean,
    send_passcode_to:           String (CheckBox，只有 Mobile Phone 和 Email 两个选项，可以考虑换成 Int 或其他),
    first_name:                 String,
    last_name:                  String,
    email:                      String,
    mobile_phone:               Int,
    other_phone:                Int,
    job_title:                  String,
    department_or_division:     String (CheckBox，选项值暂时未定),
    work_time_zone:             Int (时间戳),
    work_email:                 String,
    office_phone_number:        Int,
    office_address:             String,
    user_note:                  String (内容可能比较多，为 Textarea 区域),
    personal_photo_file:        File ( Logo 的附件文件),
}
```
POST 返回的数据：
```
{
    // 暂时返回注册是否成功即可
}
```

## 客户账户（Client Accounts）的接口：

GET 传递的 Query 和值：user_id

GET 返回的数据：
```
[
    {
        id:                     Int, //用户的 ID
        number:                 Int,
        client:                 String,
        assigned_staff:         Staff,
        account_status:         String (可以考虑换成 Int ),
        contact:                String,
        email:                  String,
        phone:                  Int
    },
    ...
]
```

## 创建客户账户（Create Client Account）的接口：
POST 的数据：
```
{
    account_type:               String (Checkbox, 值为 Personal 或者 Business),
    account_name:               String,
    account_status:             String (Checkbox),
    assigned_to:                String (Checkbox),
    contact_first_name:         String,
    contact_last_name:          String,
    email:                      String,
    phone_number:               String,
    mailing_address:            String,
    billing_address:            String,
    account_notes:              String (Textarea),
    email_group:                String (Checkbox),
    notification_preference:    String,
    client_portal:              String (Checkbox)
}
```
POST 返回的数据：
```
{
    // 暂时返回注册是否成功即可
}
```
**注：该页面需要添加一个修改字段的接口，即要有个接口能修改上面字段的某个信息**

## 通知管理（Notification Manager）的接口：
GET 返回的数据：
```
[
    {
        number:                 Int,
        name:                   String,
        discription:            String,
        recipients:             String,
        send_datetime:          Int (时间戳),
        status:                 String (可以考虑换成 Int ),
    },
    ...
]
```

## 文档管理（Document Manager）的接口：

GET 传递的 Query 和值：user_id

GET 返回的数据：
```
{
    files: [
        // 包含了文件的对象
        {
            type: String,   // 文件的类型，folder 或者 file
            name: String,   // 文件或者文件夹的名字
            list: [         // 如果是文件夹，则有个 list 字段，包含了一个数组，内容和 files 是一样的，下面是一个例子
                {
                    type: 'folder', 
                    name: 'file1-1', 
                    list: [
                        {type: 'file', name: 'file1-1-1'},
                        {type: 'file', name: 'file1-1-2'},
                        {type: 'file', name: 'file1-1-3'},
                        {type: 'file', name: 'file1-1-4'}
                    ]
                },
                ...
        ]},
        ...
    ]
}
```

## 查看、修改客户账户（View/Modify Client Account）的接口：

GET 传递的 Query 和值：account_id

GET 返回的数据：
```
{
    business_name:              String,
    account_status:             String (Checkbox),
    assigned_to:                String (Checkbox),
    contact_first_name:         String,
    contact_last_name:          String,
    email:                      String,
    phone_number:               String,
    mailing_address:            String,
    billing_address:            String,
    account_notes:              String (Textarea),
    email_group:                String (Checkbox),
    notification_preference:    String,
    client_portal:              String (Checkbox)
}
```