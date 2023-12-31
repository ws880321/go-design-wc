<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import useHostElement from '@/hooks/useHostElement'
import { curMessageIndex } from '@/utils/utils'
import useBroadCastChannel from '@/hooks/useBroadcastChannel'
import svg from '@/assets/fonts/iconfont.svg'

const emits = defineEmits(['onClose'])
defineOptions({
    name: 'Message',
    inheritAttrs: false
})
const props = defineProps({
    type: {
        type: String,
        default: 'info',
        validator: (value: string) => {
            return ['success', 'warning', 'error', 'info', 'notice'].includes(value)
        }
    },
    content: {
        type: String,
        default: ''
    },
    duration: {
        type: Number,
        default: 3000
    },
    onClose: {
        type: String
    }
})

const { el, getHostElement } = useHostElement()

const visible = ref(false)
const wrap = ref<HTMLElement>()

const curIndex = ref(curMessageIndex.value)

const { initBroadcastChannel, postMessage, closeBroadcastChannel } =
    useBroadCastChannel('go-message')

const calcTop = () => {
    const compHeight = curIndex.value > 0 ? curIndex.value * 40 : 0
    const gapHeight = (curIndex.value + 1) * 20
    return compHeight + gapHeight
}

const broadCastCallback = (data: any, host: HTMLElement) => {
    if (curIndex.value > data) {
        curIndex.value = curIndex.value > 0 ? curIndex.value - 1 : 0
    }
    const top = calcTop()
    host.style.top = `${top}px`
}
watch(visible, (newVal) => {
    const host = getHostElement() as HTMLElement
    if (newVal) {
        const top = calcTop()
        host.style.top = `${top}px`
        curMessageIndex.value = curIndex.value + 1
        if (props.type != 'notice') {
            setTimeout(() => {
                visible.value = false
            }, props.duration)
        }
    } else {
        if (curMessageIndex.value > 1) {
            postMessage(curIndex.value)
            closeBroadcastChannel()
            curMessageIndex.value = curMessageIndex.value - 1
        } else {
            curMessageIndex.value = 0
        }
    }
})
const close = () => {
    try {
        visible.value = false
        if (props.onClose && typeof props.onClose == 'string') {
            eval(props.onClose)()
        }
    } catch (error) {
        console.log(error)
    }
    emits('onClose')
    //  const onCloseCallback = wrap.getAttribute('on-close');
    //     if (onCloseCallback) {
    //         this.onClose = onCloseCallback; // 设置组件内部的关闭回调
    //     }
    // emits('onClose')
}
onMounted(() => {
    visible.value = true
    const host = getHostElement() as HTMLElement
    initBroadcastChannel((data: any) => {
        broadCastCallback(data, host)
    })
})
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style="position: absolute; width: 0; height: 0px; overflow: hidden"
        ref="el"
    >
        <symbol id="success" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="m16 24 6 6 12-12"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="warning" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                fill="currentColor"
                d="M24 37a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                data-follow-fill="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 12v16"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="error" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M29.657 18.343 18.343 29.657M18.343 18.343l11.314 11.314"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="info" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                fill="currentColor"
                d="M24 11a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                data-follow-fill="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24.5 34V20h-2M21 34h7"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="notice" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                fill="currentColor"
                d="M24 11a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                data-follow-fill="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24.5 34V20h-2M21 34h7"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
    </svg>
    <transition name="fade-down">
        <div class="message" v-show="visible" ref="wrap">
            <svg class="icon" v-if="props.type != 'notice'">
                <use :href="`#${props.type}`"></use>
            </svg>
            <div class="message-content">
                {{ props.content }}
                <span class="close" @click="close" v-if="props.type == 'notice'">
                    <svg class="go-icon">
                        <use :href="`${svg}#go-icon-close`"></use>
                    </svg>
                </span>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    width: 100%;
    display: flex;
    justify-content: center;
    pointer-events: none;
    font-size: var(--go-font-size);
    transition: all 0.3s;
    font-family: var(--go-font-family);
    position: fixed;
    transition: top 0.3s;
}

.message {
    display: inline-flex;
    margin: 0 auto;
    background-color: white;
    pointer-events: all;
    padding: 8px 12px;
    border: 1px solid transparent;
    border-radius: 4px;
    align-items: center;
    box-shadow: transparent;
    position: relative;
    .close {
        width: 16px;
        height: 16px;
        display: inline-block;
        background: url('../../assets/images/svg/close.svg');
        margin-left: 10px;
        cursor: pointer;
        .go-icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: #fff;
            stroke: #fff;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .message-content {
        display: flex;
        align-items: center;
    }
}
.icon {
    margin-right: 8px;
    font-size: 16px;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
:host([type='success']) .message {
    background-color: var(--go-color-success-light-9, #f0f9eb);
    color: var(--go-color-success, #67c23a);
}
:host([type='success']) .icon {
    color: var(--go-color-success, #67c23a);
}

:host([type='warning']) .message {
    background-color: var(--go-color-warning-light-9, #fdf6ec);
    color: var(--go-color-warning, #e6a23c);
}
:host([type='warning']) .icon {
    color: var(--go-color-warning, #e6a23c);
}

:host([type='info']) .message {
    background-color: var(--go-color-info-light-9, #f4f4f5);
    color: var(--go-color-info, #909399);
}
:host([type='info']) .icon {
    color: var(--go-color-info, #909399);
}

:host([type='error']) .message {
    background-color: var(--go-color-danger-light-9, #fef0f0);
    color: var(--go-color-danger, #f56c6c);
}

:host([type='error']) .icon {
    color: var(--go-color-danger, #f56c6c);
}
:host([type='notice']) .message {
    background: rgba(226, 143, 48, 0.4);
    color: var(--go-color-danger, #ffffff);
}
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.fade-down {
    &-enter-active,
    &-leave-active {
        transition:
            transform 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }

    &-enter-to,
    &-leave-from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
</style>
