# 关键词高亮指令

```javascript
export default {
	name: 'Highlight',
	/**
	 *
	 * @param {HTMLElement} el
	 * @param {import("vue/types/options").DirectiveBinding} bindling
	 * @param {import("vue").VNode} vnode
	 *
	 */
	bind (el, bindling, vnode) {
		if (!bindling.value) {
			return
		}
		let reg
		if (bindling.value instanceof Array) {
			bindling.value = bindling.value.filter(item => item)
			reg = new RegExp('(' + bindling.value.join('|') + ')', 'gi')
		} else if (typeof bindling.value === 'string') {
			reg = new RegExp('(' + bindling.value + ')', 'gi')
		}
		el.innerHTML = el.innerHTML.replace(reg, '<b style="color: red;">$1</b>')
	}
}
```

