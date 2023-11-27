
# Message 全局提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 一般用法

从顶部出现，3 秒后自动消失。

<go-button type="primary" id="btn">显示 Message</go-button>

## 不同类型

「成功、警告、消息、错误」

<go-button type="success" id="btn-s">显示 Message</go-button>
<go-button type="warning" id="btn-w">显示 Message</go-button>
<go-button type="danger" id="btn-e">显示 Message</go-button>
<go-button type="info" id="btn-i">显示 Message</go-button>


## 手动关闭的 notice

<go-button type="border" id="btn-n">notice</go-button>
```html
message.notice({
    content: '常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。',
    onClose:()=>{
     console.log('callback');
    }
})
```
<script setup>
import { onMounted } from 'vue';
import { message } from '@wdslib/go-design'
onMounted(()=>{
    // console.log(message)
    document.getElementById('btn').addEventListener('click', ()=>{
        message.success('这是测试内容')
    })
    document.getElementById('btn-n').addEventListener('click', ()=>{
         message.notice({content: '常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。',onClose:()=>{
                console.log('callback');
         }})
    })
    document.getElementById('btn-s').addEventListener('click', ()=>{
        message.success('这是测试内容')
    })
    document.getElementById('btn-w').addEventListener('click', ()=>{
        message.warning('这是测试内容')
    })
    document.getElementById('btn-e').addEventListener('click', ()=>{
        message.error('这是测试内容')
    })
    document.getElementById('btn-i').addEventListener('click', ()=>{
        message.info('这是测试内容')
    })
    
})
</script>
