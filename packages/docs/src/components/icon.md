# Icon 图标

## 基础用法

通过 `name` 来设置不同的图标

<go-icon name="download"></go-icon>
<go-icon name="edit" class="margin-left"></go-icon>
<go-icon name="reading" class="margin-left"></go-icon>

```html
<go-icon name="download"></go-icon>
<go-icon name="edit" class="margin-left"></go-icon>
<go-icon name="reading" class="margin-left"></go-icon>
```

## 旋转

添加 `spin` 属性来使 icon 旋转

<go-icon name="loading" spin></go-icon>
<go-icon name="refresh-right" spin class="margin-left"></go-icon>
<go-icon name="refresh" spin class="margin-left"></go-icon>

```html
<go-icon name="loading" spin></go-icon>
<go-icon name="refresh-right" spin class="margin-left"></go-icon>
<go-icon name="refresh" spin class="margin-left"></go-icon>
```

## 大小

添加 `size` 属性和直接设置 css 来设置大小，`size` 属性的优先级高

<go-icon name="loading" size="12px"></go-icon>
<go-icon name="loading" class="margin-left"></go-icon>
<go-icon name="loading" size="16px" class="margin-left"></go-icon>
<go-icon name="loading" size="18px" class="margin-left"></go-icon>
<go-icon name="loading" size="20px" class="margin-left"></go-icon>

```html
<go-icon name="loading" size="12px"></go-icon>
<go-icon name="loading" class="margin-left"></go-icon>
<go-icon name="loading" size="16px" class="margin-left"></go-icon>
<go-icon name="loading" size="18px" class="margin-left"></go-icon>
<go-icon name="loading" size="20px" class="margin-left"></go-icon>
```

## 颜色

添加 `color` 属性和直接设置 css 来设置颜色，`size` 属性的优先级高

<go-icon name="loading"></go-icon>
<go-icon name="loading" color="red" class="margin-left"></go-icon>
<go-icon name="loading" color="blue" class="margin-left"></go-icon>
<go-icon name="loading" color="pink" class="margin-left"></go-icon>
<go-icon name="loading" color="green" class="margin-left"></go-icon>

```html
<go-icon name="loading"></go-icon>
<go-icon name="loading" color="red" class="margin-left"></go-icon>
<go-icon name="loading" color="blue" class="margin-left"></go-icon>
<go-icon name="loading" color="pink" class="margin-left"></go-icon>
<go-icon name="loading" color="green" class="margin-left"></go-icon>
```

## Attrs

| 属性名 | 说明                      | 类型     | 可选值 | 默认值 |
| ------ | ------------------------- | -------- | ------ | ------ |
| size   | 图标大小，合法的 css 单位 | `string` | -      | -      |
| color  | 图标颜色，合法的颜色值    | `string` | -      | -      |
| name   | 图标名字                  | `string` | -      | -      |

## 所有 icon

<div id="icons" class="icons">
<go-icon name="shopping-trolley"></go-icon>
<go-icon name="smoking"></go-icon>
<go-icon name="soccer"></go-icon>
<go-icon name="sold-out"></go-icon>
<go-icon name="sort"></go-icon>
<go-icon name="sort-down"></go-icon>
<go-icon name="sort-up"></go-icon>
<go-icon name="stamp"></go-icon>
<go-icon name="star"></go-icon>
<go-icon name="star-filled"></go-icon>
<go-icon name="stopwatch"></go-icon>
<go-icon name="success-filled"></go-icon>
<go-icon name="sugar"></go-icon>
<go-icon name="suitcase"></go-icon>
<go-icon name="suitcase-line"></go-icon>
<go-icon name="sunny"></go-icon>
<go-icon name="sunrise"></go-icon>
<go-icon name="sunset"></go-icon>
<go-icon name="switch"></go-icon>
<go-icon name="switch-button"></go-icon>
<go-icon name="switch-filled"></go-icon>
<go-icon name="takeaway-box"></go-icon>
<go-icon name="ticket"></go-icon>
<go-icon name="tickets"></go-icon>
<go-icon name="timer"></go-icon>
<go-icon name="toilet-paper"></go-icon>
<go-icon name="tools"></go-icon>
<go-icon name="top"></go-icon>
<go-icon name="top-left"></go-icon>
<go-icon name="top-right"></go-icon>
<go-icon name="trend-charts"></go-icon>
<go-icon name="trophy"></go-icon>
<go-icon name="trophy-base"></go-icon>
<go-icon name="turn-off"></go-icon>
<go-icon name="umbrella"></go-icon>
<go-icon name="unlock"></go-icon>
<go-icon name="upload"></go-icon>
<go-icon name="upload-filled"></go-icon>
<go-icon name="user"></go-icon>
<go-icon name="user-filled"></go-icon>
<go-icon name="van"></go-icon>
<go-icon name="video-camera"></go-icon>
<go-icon name="video-camera-filled"></go-icon>
<go-icon name="video-pause"></go-icon>
<go-icon name="video-play"></go-icon>
<go-icon name="view"></go-icon>
<go-icon name="wallet"></go-icon>
<go-icon name="wallet-filled"></go-icon>
<go-icon name="warning"></go-icon>
<go-icon name="warning-filled"></go-icon>
<go-icon name="warn-triangle-filled"></go-icon>
<go-icon name="watch"></go-icon>
<go-icon name="watermelon"></go-icon>
<go-icon name="wind-power"></go-icon>
<go-icon name="zoom-in"></go-icon>
<go-icon name="zoom-out"></go-icon>
<go-icon name="ice-cream"></go-icon>
<go-icon name="ice-drink"></go-icon>
<go-icon name="ice-tea"></go-icon>
<go-icon name="info-filled"></go-icon>
<go-icon name="iphone"></go-icon>
<go-icon name="key"></go-icon>
<go-icon name="knife-fork"></go-icon>
<go-icon name="lightning"></go-icon>
<go-icon name="link"></go-icon>
<go-icon name="list"></go-icon>
<go-icon name="loading"></go-icon>
<go-icon name="location"></go-icon>
<go-icon name="location-filled"></go-icon>
<go-icon name="location-information"></go-icon>
<go-icon name="lock"></go-icon>
<go-icon name="lollipop"></go-icon>
<go-icon name="magic-stick"></go-icon>
<go-icon name="magnet"></go-icon>
<go-icon name="male"></go-icon>
<go-icon name="management"></go-icon>
<go-icon name="map-location"></go-icon>
<go-icon name="medal"></go-icon>
<go-icon name="memo"></go-icon>
<go-icon name="menu"></go-icon>
<go-icon name="message"></go-icon>
<go-icon name="message-box"></go-icon>
<go-icon name="mic"></go-icon>
<go-icon name="microphone"></go-icon>
<go-icon name="milk-tea"></go-icon>
<go-icon name="minus"></go-icon>
<go-icon name="money"></go-icon>
<go-icon name="monitor"></go-icon>
<go-icon name="moon"></go-icon>
<go-icon name="moon-night"></go-icon>
<go-icon name="more"></go-icon>
<go-icon name="more-filled"></go-icon>
<go-icon name="mostly-cloudy"></go-icon>
<go-icon name="mouse"></go-icon>
<go-icon name="mug"></go-icon>
<go-icon name="mute"></go-icon>
<go-icon name="mute-notification"></go-icon>
<go-icon name="no-smoking"></go-icon>
<go-icon name="notebook"></go-icon>
<go-icon name="notification"></go-icon>
<go-icon name="odometer"></go-icon>
<go-icon name="office-building"></go-icon>
<go-icon name="open"></go-icon>
<go-icon name="operation"></go-icon>
<go-icon name="opportunity"></go-icon>
<go-icon name="orange"></go-icon>
<go-icon name="paperclip"></go-icon>
<go-icon name="partly-cloudy"></go-icon>
<go-icon name="pear"></go-icon>
<go-icon name="phone"></go-icon>
<go-icon name="phone-filled"></go-icon>
<go-icon name="picture"></go-icon>
<go-icon name="picture-filled"></go-icon>
<go-icon name="picture-rounded"></go-icon>
<go-icon name="pie-chart"></go-icon>
<go-icon name="place"></go-icon>
<go-icon name="platform"></go-icon>
<go-icon name="plus"></go-icon>
<go-icon name="pointer"></go-icon>
<go-icon name="position"></go-icon>
<go-icon name="postcard"></go-icon>
<go-icon name="pouring"></go-icon>
<go-icon name="present"></go-icon>
<go-icon name="price-tag"></go-icon>
<go-icon name="printer"></go-icon>
<go-icon name="promotion"></go-icon>
<go-icon name="quartz-watch"></go-icon>
<go-icon name="question-filled"></go-icon>
<go-icon name="rank"></go-icon>
<go-icon name="reading"></go-icon>
<go-icon name="reading-lamp"></go-icon>
<go-icon name="refresh"></go-icon>
<go-icon name="refresh-left"></go-icon>
<go-icon name="refresh-right"></go-icon>
<go-icon name="refrigerator"></go-icon>
<go-icon name="remove"></go-icon>
<go-icon name="remove-filled"></go-icon>
<go-icon name="right"></go-icon>
<go-icon name="scale-to-original"></go-icon>
<go-icon name="school"></go-icon>
<go-icon name="scissor"></go-icon>
<go-icon name="search"></go-icon>
<go-icon name="select"></go-icon>
<go-icon name="sell"></go-icon>
<go-icon name="semi-select"></go-icon>
<go-icon name="service"></go-icon>
<go-icon name="setting"></go-icon>
<go-icon name="set-up"></go-icon>
<go-icon name="share"></go-icon>
<go-icon name="ship"></go-icon>
<go-icon name="shop"></go-icon>
<go-icon name="shopping-bag"></go-icon>
<go-icon name="shopping-cart"></go-icon>
<go-icon name="shopping-cart-full"></go-icon>
<go-icon name="circle-check"></go-icon>
<go-icon name="circle-close"></go-icon>
<go-icon name="circle-close-filled"></go-icon>
<go-icon name="circle-plus"></go-icon>
<go-icon name="circle-plus-filled"></go-icon>
<go-icon name="clock"></go-icon>
<go-icon name="close"></go-icon>
<go-icon name="close-bold"></go-icon>
<go-icon name="cloudy"></go-icon>
<go-icon name="coffee"></go-icon>
<go-icon name="coffee-cup"></go-icon>
<go-icon name="coin"></go-icon>
<go-icon name="cold-drink"></go-icon>
<go-icon name="collection"></go-icon>
<go-icon name="collection-tag"></go-icon>
<go-icon name="comment"></go-icon>
<go-icon name="compass"></go-icon>
<go-icon name="connection"></go-icon>
<go-icon name="coordinate"></go-icon>
<go-icon name="copy-document"></go-icon>
<go-icon name="cpu"></go-icon>
<go-icon name="credit-card"></go-icon>
<go-icon name="crop"></go-icon>
<go-icon name="d-arrow-left"></go-icon>
<go-icon name="d-arrow-right"></go-icon>
<go-icon name="data-analysis"></go-icon>
<go-icon name="data-board"></go-icon>
<go-icon name="data-line"></go-icon>
<go-icon name="d-caret"></go-icon>
<go-icon name="delete"></go-icon>
<go-icon name="delete-filled"></go-icon>
<go-icon name="delete-location"></go-icon>
<go-icon name="dessert"></go-icon>
<go-icon name="discount"></go-icon>
<go-icon name="dish"></go-icon>
<go-icon name="dish-dot"></go-icon>
<go-icon name="document"></go-icon>
<go-icon name="document-add"></go-icon>
<go-icon name="document-checked"></go-icon>
<go-icon name="document-copy"></go-icon>
<go-icon name="document-delete"></go-icon>
<go-icon name="document-remove"></go-icon>
<go-icon name="download"></go-icon>
<go-icon name="drizzling"></go-icon>
<go-icon name="edit"></go-icon>
<go-icon name="edit-pen"></go-icon>
<go-icon name="eleme"></go-icon>
<go-icon name="eleme-filled"></go-icon>
<go-icon name="element-plus"></go-icon>
<go-icon name="expand"></go-icon>
<go-icon name="failed"></go-icon>
<go-icon name="female"></go-icon>
<go-icon name="files"></go-icon>
<go-icon name="film"></go-icon>
<go-icon name="filter"></go-icon>
<go-icon name="finished"></go-icon>
<go-icon name="first-aid-kit"></go-icon>
<go-icon name="flag"></go-icon>
<go-icon name="fold"></go-icon>
<go-icon name="folder"></go-icon>
<go-icon name="folder-add"></go-icon>
<go-icon name="folder-checked"></go-icon>
<go-icon name="folder-delete"></go-icon>
<go-icon name="folder-opened"></go-icon>
<go-icon name="folder-remove"></go-icon>
<go-icon name="food"></go-icon>
<go-icon name="football"></go-icon>
<go-icon name="fork-spoon"></go-icon>
<go-icon name="fries"></go-icon>
<go-icon name="full-screen"></go-icon>
<go-icon name="goblet"></go-icon>
<go-icon name="goblet-full"></go-icon>
<go-icon name="goblet-square"></go-icon>
<go-icon name="goblet-square-full"></go-icon>
<go-icon name="gold-medal"></go-icon>
<go-icon name="goods"></go-icon>
<go-icon name="goods-filled"></go-icon>
<go-icon name="grape"></go-icon>
<go-icon name="grid"></go-icon>
<go-icon name="guide"></go-icon>
<go-icon name="handbag"></go-icon>
<go-icon name="headset"></go-icon>
<go-icon name="help"></go-icon>
<go-icon name="help-filled"></go-icon>
<go-icon name="hide"></go-icon>
<go-icon name="histogram"></go-icon>
<go-icon name="home-filled"></go-icon>
<go-icon name="hot-water"></go-icon>
<go-icon name="house"></go-icon>
<go-icon name="ice-cream-round"></go-icon>
<go-icon name="ice-cream-square"></go-icon>
<go-icon name="add-location"></go-icon>
<go-icon name="aim"></go-icon>
<go-icon name="alarm-clock"></go-icon>
<go-icon name="apple"></go-icon>
<go-icon name="arrow-down"></go-icon>
<go-icon name="arrow-down-bold"></go-icon>
<go-icon name="arrow-left"></go-icon>
<go-icon name="arrow-left-bold"></go-icon>
<go-icon name="arrow-right"></go-icon>
<go-icon name="arrow-right-bold"></go-icon>
<go-icon name="arrow-up"></go-icon>
<go-icon name="arrow-up-bold"></go-icon>
<go-icon name="avatar"></go-icon>
<go-icon name="back"></go-icon>
<go-icon name="baseball"></go-icon>
<go-icon name="basketball"></go-icon>
<go-icon name="bell"></go-icon>
<go-icon name="bell-filled"></go-icon>
<go-icon name="bicycle"></go-icon>
<go-icon name="bottom"></go-icon>
<go-icon name="bottom-left"></go-icon>
<go-icon name="bottom-right"></go-icon>
<go-icon name="bowl"></go-icon>
<go-icon name="box"></go-icon>
<go-icon name="briefcase"></go-icon>
<go-icon name="brush"></go-icon>
<go-icon name="brush-filled"></go-icon>
<go-icon name="burger"></go-icon>
<go-icon name="calendar"></go-icon>
<go-icon name="camera"></go-icon>
<go-icon name="camera-filled"></go-icon>
<go-icon name="caret-bottom"></go-icon>
<go-icon name="caret-left"></go-icon>
<go-icon name="caret-right"></go-icon>
<go-icon name="caret-top"></go-icon>
<go-icon name="cellphone"></go-icon>
<go-icon name="chat-dot-round"></go-icon>
<go-icon name="chat-dot-square"></go-icon>
<go-icon name="chat-line-round"></go-icon>
<go-icon name="chat-line-square"></go-icon>
<go-icon name="chat-round"></go-icon>
<go-icon name="chat-square"></go-icon>
<go-icon name="check"></go-icon>
<go-icon name="checked"></go-icon>
<go-icon name="cherry"></go-icon>
<go-icon name="chicken"></go-icon>
<go-icon name="chrome-filled"></go-icon>
<go-icon name="circle-check-filled"></go-icon>
</div>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
        document.getElementById('icons').addEventListener('click', ev=>{
        const target = ev.target;
        const nodeName = target.nodeName;
        const tagName = nodeName.toLowerCase();
        if(tagName !== 'go-icon') return;
        const icon = `<${tagName} name="${target.getAttribute('name')}"></${tagName}>`;

        if (window.navigator.clipboard) {
            window.navigator.clipboard
                .writeText(icon)
                .then(
                    () => {
                        alert(`已复制到粘贴板：${icon}`);
                    },
                    () => {
                        alert(`复制到粘贴板失败：${icon}`);
                    }
                )
                .catch(e => {
                    throw e;
                });
        } else {
            alert('浏览器不支持，请切换到chrome浏览器')
        }

    }, false)
})

</script>
<style scoped>
.icons {
    display:flex;
    flex-wrap: wrap;
}
.icons > go-icon {
    margin: 10px;
    font-size: 20px;
}
</style>
