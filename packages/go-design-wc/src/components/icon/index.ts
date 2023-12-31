import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.ce.vue'

const Icon = defineCustomElement(comp)

const registerComponent = (prefix = 'Go') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Icon, registerComponent as registerIconComponent }

export default registerComponent
