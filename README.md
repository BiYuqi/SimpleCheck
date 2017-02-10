# SimpleCheck
Js 表单验证代码小插件 支持二级校验(内置:为空校验+自定义校验)
### 使用方法
```javascript
#克隆项目
git clone https://github.com/BiYuqi/SimpleCheck.git
```
###正确引入js文件
```javascript
<script src="checkSimple.js"></script>
```
###API
```javascript
/*
*@target    //目标元素
*@reg       //校验规则
*@tips     //提示框元素
*@tipsText    //正则对应的提示文字
*@isBlank     // true表示不能为空
*@isBlankText   //为空时提示文本
*/
传参是个数组对象
ex:var ooo = [
                {
                    target:'.user-name',//目标元素
                    reg:/[a-zA-Z_]{6,}/,//校验规则
                    tips:'.tips',//提示框元素
                    tipsText:'此处只能是字母下划线(字母不计大小写)',//正则对应的提示文字
                    isBlank:true,// true表示不能为空
                    isBlankText:'输入不能为空'//为空时提示文本
                }
              ]
```
### DEMO
```html
<div class="box">
    <div>
        姓名：<input type="text" class="user-name" placeholder="此处只能是字母下划线(字母不计大小写)"><span class="tips"></span>
    </div>
    <div>
        密码：<input type="text" class="user-pass" placeholder="字母数字下划线,6~16位"><span class="tips"></span>
    </div>
    <div>
        财富: <input type="text" class="user-age" placeholder="只能为数字,最多精确到小数1位"><span class="tips"></span>
    </div>
</div>
```
```javascript
//写规则
var ooo = [
            {
                target:'.user-name',//目标元素
                reg:/[a-zA-Z_]{6,}/,//校验规则
                tips:'.tips',//提示框元素
                tipsText:'此处只能是字母下划线(字母不计大小写)',//正则对应的提示文字
                isBlank:true,// true表示不能为空
                isBlankText:'输入不能为空'//为空时提示文本
            },
            {
                target:'.user-pass',
                reg:/[\w]{6,16}/,
                tips:'.tips',
                tipsText:'字母数字下划线,6~16位',
                isBlank:true,//可以为空
                isBlankText:'输入不能为空'
            },
            {
                target:'.user-age',
                reg:/^(([1-9]+(\.[0-9]{1})?)||(^0\.[1-9]{1}))$/,
                tips:'.tips',
                tipsText:'小数最多精确到分',
                isBlank:false,//可以为空
                isBlankText:'输入不能为空'
            }
        ];
 //传参调用即可  
 CheckSimple(ooo)
```
