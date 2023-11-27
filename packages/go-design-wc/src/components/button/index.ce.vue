<script setup lang="ts">
import { Loading } from '@/utils/icons'
import type { GoSize, GoType } from '@/utils/typescript'

export type GoButtonType = GoType | 'default'

defineOptions({
    name: 'Button',
    inheritAttrs: false
})

const props = defineProps({
    type: {
        type: String,
        default: 'default',
        validator: (val: GoButtonType) =>
            [
                'default',
                'primary',
                'success',
                'warning',
                'danger',
                'info',
                'border',
                'secondary',
                'dashed',
                'text',
                'opacity'
            ].includes(val)
    },
    size: {
        type: String,
        default: 'medium',
        validator: (val: GoSize) => ['small', 'medium', 'large'].includes(val)
    },
    loading: Boolean,
    round: Boolean,
    disabled: Boolean
})
</script>

<template>
    <button
        :class="[
            'go-button',
            `go-button--${props.type}`,
            {
                'is-round': props.round,
                'is-disabled': props.disabled
            }
        ]"
    >
        <Loading v-if="props.loading" class="go-loading" />
        <slot></slot>
    </button>
    <div v-if="props.loading" class="is-loading"></div>
</template>

<style lang="scss">
:host {
    display: inline-flex;
    border-radius: 4px;
    overflow: hidden;
    --go-button-border-color: var(--go-border-color, #dcdfe6);
    --go-button-text-color: var(--go-text-color, #303133);
    --go-button-background-color: var(--go-color-white, #fff);

    --go-button-hover-text-color: var(--el-color-white, #fff);
    --go-button-hover-background-color: var(--go-color-primary-light-3, #79bbff);
    --go-button-hover-border-color: var(--go-color-primary-light-3, #79bbff);

    --go-button-active-background-color: var(--go-color-primary-dark-2, #337ecc);
    --go-button-active-border-color: var(--go-color-primary-dark-2, #337ecc);

    --go-button-disabled-text-color: var(--go-color-white, #fff);
    --go-button-disabled-background-color: var(--go-color-primary-light-5, #a0cfff);
    --go-button-disabled-border-color: var(--go-color-primary-light-5, #a0cfff);

    --go-button-height: var(--go-size-medium, 32px);
    margin-right: 12px;
    position: relative;
}
:host(:last-child) {
    margin-right: 0;
}
.go-button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    outline: 0;
    padding: 0 16px;
    height: var(--go-button-height);
    background-color: var(--go-button-background-color);
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid var(--go-button-border-color);
    box-sizing: border-box;
    transition: all 0.3s ease;
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    overflow: hidden;
    cursor: pointer;
    color: var(--go-button-text-color);
    &:hover,
    &:focus {
        background-color: var(--go-button-hover-background-color);
        color: var(--go-button-hover-text-color);
        border-color: var(--go-button-hover-border-color);
    }
    &:active {
        background-color: var(--go-button-active-background-color);
        border-color: var(--go-button-active-border-color);
    }
    &.is-disabled {
        background-color: var(--go-button-disabled-background-color);
        border-color: var(--go-button-disabled-border-color);
        color: var(--go-button-disabled-text-color);
        cursor: not-allowed;
    }
    & .go-loading {
        margin-right: 8px;
        animation: rotating 2s linear infinite;
    }

    &--primary {
        --go-button-border-color: var(--go-color-primary, #0c6dff);
        --go-button-text-color: var(--go-color-white, #fff);
        --go-button-background-color: var(--go-color-primary, #0c6dff);

        --go-button-hover-text-color: var(--el-color-white, #fff);
        --go-button-hover-background-color: var(--go-color-primary-light-3, #3d8aff);
        --go-button-hover-border-color: var(--go-color-primary-light-3, #3d8aff);

        --go-button-active-background-color: var(--go-color-primary-dark-2, #005de8);
        --go-button-active-border-color: var(--go-color-primary-dark-2, #005de8);

        --go-button-disabled-text-color: var(--go-color-white, #fff);
        --go-button-disabled-background-color: var(--go-color-primary-light-5, #0c6dff);
        --go-button-disabled-border-color: var(--go-color-primary-light-5, #0c6dff);
    }

    &--success {
        --go-button-border-color: var(--go-color-success, #1dbe88);
        --go-button-text-color: var(--go-color-white, #fff);
        --go-button-background-color: var(--go-color-success, #1dbe88);

        --go-button-hover-text-color: var(--el-color-white, #fff);
        --go-button-hover-background-color: var(--go-color-success-light-3, #95d475);
        --go-button-hover-border-color: var(--go-color-success-light-3, #95d475);

        --go-button-active-background-color: var(--go-color-success-dark-2, #529b2e);
        --go-button-active-border-color: var(--go-color-success-dark-2, #529b2e);

        --go-button-disabled-text-color: var(--go-color-white, #fff);
        --go-button-disabled-background-color: var(--go-color-success-light-5, #b3e19d);
        --go-button-disabled-border-color: var(--go-color-success-light-5, #b3e19d);
    }

    &--warning {
        --go-button-border-color: var(--go-color-warning, #e28f30);
        --go-button-text-color: var(--go-color-white, #fff);
        --go-button-background-color: var(--go-color-warning, #e28f30);

        --go-button-hover-text-color: var(--el-color-white, #fff);
        --go-button-hover-background-color: var(--go-color-warning-light-3, #eebe77);
        --go-button-hover-border-color: var(--go-color-warning-light-3, #eebe77);

        --go-button-active-background-color: var(--go-color-warning-dark-2, #b88230);
        --go-button-active-border-color: var(--go-color-warning-dark-2, #b88230);

        --go-button-disabled-text-color: var(--go-color-white, #fff);
        --go-button-disabled-background-color: var(--go-color-warning-light-5, #f3d19e);
        --go-button-disabled-border-color: var(--go-color-warning-light-5, #f3d19e);
    }

    &--danger {
        --go-button-border-color: var(--go-color-danger, #de5739);
        --go-button-text-color: var(--go-color-white, #fff);
        --go-button-background-color: var(--go-color-danger, #de5739);

        --go-button-hover-text-color: var(--el-color-white, #fff);
        --go-button-hover-background-color: var(--go-color-danger-light-3, #f89898);
        --go-button-hover-border-color: var(--go-color-danger-light-3, #f89898);

        --go-button-active-background-color: var(--go-color-danger-dark-2, #c45656);
        --go-button-active-border-color: var(--go-color-danger-dark-2, #c45656);

        --go-button-disabled-text-color: var(--go-color-white, #fff);
        --go-button-disabled-background-color: var(--go-color-danger-light-5, #fab6b6);
        --go-button-disabled-border-color: var(--go-color-danger-light-5, #fab6b6);
    }
    &--border {
        color: #3d8aff;
        --go-button-border-color: var(--go-color-danger, #0c6dff);
        --go-button-text-color: var(--go-color-white, #0c6dff);
        --go-button-background-color: var(--go-color-danger, #0c6dff00);

        --go-button-hover-text-color: var(--el-color-white, #0c6dff);
        --go-button-hover-background-color: var(--go-color-danger-light-3, #5a5c6200);
        --go-button-hover-border-color: var(--go-color-danger-light-3, #3d8aff);

        --go-button-active-background-color: var(--go-color-danger-dark-2, #c4565600);
        --go-button-active-border-color: var(--go-color-danger-dark-2, #c4565600);

        --go-button-disabled-text-color: var(--go-color-white, #0c6dff);
        --go-button-disabled-background-color: var(--go-color-danger-light-5, #00000000);
        --go-button-disabled-border-color: var(--go-color-danger-light-5, #3d8aff);
    }
    &--dashed {
        color: #3d8aff;
        border-style: dashed;
        --go-button-border-color: var(--go-color-danger, #0c6dff);
        --go-button-text-color: var(--go-color-white, #0c6dff);
        --go-button-background-color: var(--go-color-danger, #0c6dff00);

        --go-button-hover-text-color: var(--el-color-white, #0c6dff);
        --go-button-hover-background-color: var(--go-color-danger-light-3, #00000000);
        --go-button-hover-border-color: var(--go-color-danger-light-3, #3d8aff);

        --go-button-active-background-color: var(--go-color-danger-dark-2, #00000000);
        --go-button-active-border-color: var(--go-color-danger-dark-2, #00000000);

        --go-button-disabled-text-color: var(--go-color-white, #0c6dff);
        --go-button-disabled-background-color: var(--go-color-danger-light-5, #00000000);
        --go-button-disabled-border-color: var(--go-color-danger-light-5, #3d8aff);
    }
    &--secondary {
        --go-button-border-color: var(--go-color-danger, #3a3c44);
        --go-button-text-color: var(--go-color-white, #fff);
        --go-button-background-color: var(--go-color-danger, #3a3c44);

        --go-button-hover-text-color: var(--el-color-white, #fff);
        --go-button-hover-background-color: var(--go-color-danger-light-3, #5a5c62);
        --go-button-hover-border-color: var(--go-color-danger-light-3, #5a5c62);

        --go-button-active-background-color: var(--go-color-danger-dark-2, #2a2c34);
        --go-button-active-border-color: var(--go-color-danger-dark-2, #2a2c34);

        --go-button-disabled-text-color: var(--go-color-white, #5a5c62);
        --go-button-disabled-background-color: var(--go-color-danger-light-5, #3a3c44);
        --go-button-disabled-border-color: var(--go-color-danger-light-5, #3a3c44);
    }
    &--text {
        --go-button-border-color: var(--go-color-danger, #0c6dff00);
        --go-button-text-color: var(--go-text-color-primary, #0c6dff);
        --go-button-background-color: var(--go-color-danger, #0c6dff00);

        --go-button-hover-text-color: var(--el-color-white, #3d8aff);
        --go-button-hover-background-color: var(--go-color-danger-light-3, #0c6dff00);
        --go-button-hover-border-color: var(--go-color-danger-light-3, #0c6dff00);

        --go-button-active-background-color: var(--go-color-danger-dark-2, #0c6dff00);
        --go-button-active-border-color: var(--go-color-danger-dark-2, #0c6dff00);
        --go-button-active-text-color: var(--el-color-white, #005de8);

        --go-button-disabled-text-color: var(--go-color-white, #0c6dff);
        --go-button-disabled-background-color: var(--go-color-danger-light-5, #0c6dff00);
        --go-button-disabled-border-color: var(--go-color-danger-light-5, #0c6dff00);
    }
    &--info {
        --go-button-border-color: var(--go-color-info, #909399);
        --go-button-text-color: var(--go-color-white, #fff);
        --go-button-background-color: var(--go-color-info, #909399);

        --go-button-hover-text-color: var(--el-color-white, #fff);
        --go-button-hover-background-color: var(--go-color-info-light-3, #b1b3b8);
        --go-button-hover-border-color: var(--go-color-info-light-3, #b1b3b8);

        --go-button-active-background-color: var(--go-color-info-dark-2, #73767a);
        --go-button-active-border-color: var(--go-color-info-dark-2, #73767a);

        --go-button-disabled-text-color: var(--go-color-white, #fff);
        --go-button-disabled-background-color: var(--go-color-info-light-5, #c8c9cc);
        --go-button-disabled-border-color: var(--go-color-info-light-5, #c8c9cc);
    }
}
.is-loading {
    display: block;
    box-sizing: border-box;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: var(--go-mask-color-extra-light, rgba(255, 255, 255, 0.3));

    border-radius: 4px;
}

.go-button.is-round {
    border-radius: 9999990px;
}
@keyframes rotating {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
