import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.ce.vue'

const Button = defineCustomElement(comp)

const registerComponent = (prefix = 'Go') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Button, registerComponent as registerButtonComponent }

export default registerComponent
