# 结尾...显示

```javascript
import Vue from 'vue'
import utils from '@/common/utils'
const Tip = Vue.extend({
	template: `
	<el-tooltip effect="dark" placement="top" ref="tooltip">
		<div slot="content" v-html="showText"></div>
		<span :style="style" v-html="text" ref="text"></span>
	</el-tooltip>`,
	data () {
		return {
			showText: '',
			text: '',
			width: 0,
			height: 0,
			rows: 0,
			type: ''
		}
	},
	computed: {
		style () {
			switch (this.type) {
			case 'vertical':
				return `overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: ${this.rows};margin-bottom: 16px; height: 72px;`
			default:
				return 'white-space: nowrap;overflow: hidden;text-overflow: ellipsis; max-width: ' + (this.width ? this.width + 'px' : 'auto') + ';'
			}
		}
	}
})
function ellipsis (el, bindling, vnode) {
	switch (bindling.arg) {
	case 'vertical':
		if (el.scrollHeight > el.clientHeight) {
			if (utils.isIeOrEdge()) {
				el.style.overflow = 'hidden'
			}
			new Tip({
				data: {
					showText: el.children && el.children[0] ? el.children[0].innerHTML : el.innerHTML,
					text: el.outerHTML,
					rows: bindling.value,
					type: bindling.arg
				}
			}).$mount(el)
		}
		break
	default:
		if (el.scrollWidth > bindling.value) {
			new Tip({
				data: {
					showText: el.children && el.children[0] && el.children[0].tagName === 'A' ? el.children[0].innerHTML : el.innerHTML,
					text: el.outerHTML,
					width: bindling.value,
					type: bindling.arg
				}
			}).$mount(el)
		}
		break
	}
}
export default {
	name: 'Ellipsis',
	/**
	 *
	 * @param {HTMLElement} el
	 * @param {import("vue/types/options").DirectiveBinding} bindling
	 * @param {import("vue").VNode} vnode
	 *
	 */
	inserted (el, bindling, vnode) {
		ellipsis(el, bindling, vnode)
	}
}
```