# oss-upload-vue

> how to upload file to oss service

## Build Setup

``` bash
# 需要引入的组件
在package.json 中，引入 "plupload": "^2.3.6","ali-oss": "^6.0.1",


# 核心 要获取自己oss一些参数
 let new_multipart_params = {
          'key': json.key,
          'policy': json.policy,
          'OSSAccessKeyId': json.accessid,
          'success_action_status': '200', //让服务端返回200,不然，默认会返回204
          'signature': json.signature,
        };
        
#然后初始化你的oss插件
   this.plUploader = new plupload.Uploader({
          runtimes: 'html5,flash,silverlight,html4',
          url: 'http://oss.aliyuncs.com',
          browse_button: _this.uploadId,
          multi_selection: false,//一次最多上传文件个数
          filters: {
            mime_types: [
              {title: '文件类型', extensions:this.upType}
            ],
            max_file_size: '60mb',
            prevent_duplicates: true
          },
          init: {
            FilesAdded: function (up, files) {
              console.log('有新文件添加至队列')
              up.start();
            },
            BeforeUpload: this.beforeUpload,
            UploadProgress: this.uploadProgress,
            FileUploaded: this.fileUploaded,
            uploadError: this.uploadError,
            Error: this.error
          }
        })
        this.plUploader.init()        


# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
