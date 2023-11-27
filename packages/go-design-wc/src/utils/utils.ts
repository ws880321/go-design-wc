/*
 * @Author: ws880321 wangshuai@vip.126.com
 * @Date: 2023-11-23 13:30:23
 * @LastEditors: ws880321 wangshuai@vip.126.com
 * @LastEditTime: 2023-11-27 14:49:01
 * @FilePath: /go-design/packages/go-design-wc/src/utils/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'

export interface MessageConfig {
    content?: string
    duration?: number
    type?: 'success' | 'info' | 'warning' | 'error' | 'notice'
    onClose?: () => void
}

const curMessageIndex = ref(0)
const createMessage = (Message: CustomElementConstructor) => {
    const parseMessageConfig = (config: MessageConfig | string): MessageConfig => {
        let conf: MessageConfig = {}
        const type = Object.prototype.toString.call(config).slice(8, -1)
        if (type === 'Object') {
            conf = { ...(config as MessageConfig) }
        } else {
            conf = {
                type: 'info',
                content: config as string
            }
        }
        return conf
    }
    const message = (config: MessageConfig | string) => {
        let parent = document.querySelector('.go-message-box')
        if (!parent) {
            parent = document.createElement('div')
            parent.className = 'go-message-box'
            parent.setAttribute(
                'style',
                'position: fixed; top: 0; left: 0; z-index: 9999999;width: 100%;height: 0;'
            )
            document.body.appendChild(parent)
        }
        const conf = parseMessageConfig(config)
        const instance: any = new Message()
        instance.setAttribute('type', conf.type || 'info')
        instance.setAttribute('duration', conf.duration || 3000)
        instance.setAttribute('content', conf.content || '')
        ;(parent as any).appendChild(instance)
        if (conf.onClose) {
            instance.setAttribute('on-close', conf.onClose)
        }
        instance.setAttribute('content', conf.content)
        return instance
    }

    message.success = (config: MessageConfig | string) => {
        const conf = parseMessageConfig(config)

        return message({ ...conf, type: 'success' })
    }
    message.error = (config: MessageConfig | string) => {
        const conf = parseMessageConfig(config)
        return message({ ...conf, type: 'error' })
    }
    message.warning = (config: MessageConfig | string) => {
        const conf = parseMessageConfig(config)
        return message({ ...conf, type: 'warning' })
    }
    message.info = (config: MessageConfig | string) => {
        const conf = parseMessageConfig(config)
        return message({ ...conf, type: 'info' })
    }
    message.notice = (config: MessageConfig | string) => {
        const conf = parseMessageConfig(config)
        return message({ ...conf, type: 'notice' })
    }

    return message
}

const curNotificationIndex = ref(0)

export { createMessage, curMessageIndex, curNotificationIndex }
export default {
    createMessage,
    curMessageIndex,
    curNotificationIndex
}
