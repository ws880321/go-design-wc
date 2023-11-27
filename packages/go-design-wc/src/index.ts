import './assets/main.scss'

import { Button } from './components/button/index'

import { Select, Option } from './components/select/index'

import { Message } from './components/message/index'
import { Icon } from './components/icon/index'

import { createMessage } from './utils/utils'

const comp: Record<string, any> = {
    Button,
    Select,
    Option,
    Message,
    Icon
}

export const registerComponents = async (prefix = 'Go') => {
    for (const key in comp) {
        const name: string = `${prefix}${key}`.replace(/([A-Z])([a-z]+)/g, (val, _, p, offset) => {
            return offset > 0 ? `-${val.toLowerCase()}` : `${val.toLowerCase()}`
        })

        customElements.define(name, comp[key])
    }
}

export const message = createMessage(Message)

export const registerComponent = (name: string, component: any) => {
    customElements.define(name, component)
}

export default {
    registerComponents,
    registerComponent,
    ...comp
}

declare module 'vue' {
    export interface GlobalComponents {
        Button: typeof comp.Button
        Select: typeof comp.Select
        Option: typeof comp.Option
        Message: typeof comp.Message
        Icon: typeof comp.Icon
    }
}
