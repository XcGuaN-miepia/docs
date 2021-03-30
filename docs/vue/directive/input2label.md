# input转换label
```javascript
/**
 * created by zhouzt on 2021-01-27
 *
 *
 * @param {HTMLElement} el
 * @param {import("vue/types/options").DirectiveBinding} bindling
 * @param {import("vue").VNode} vnode
 *
 * description: input标签转换成label标签
 *
 */
async function input2Label (el, bindling, vnode) {
	el.style.visibility = ''

	if (!bindling.value) {
		return
	}

	const input = el.querySelector('input') || el.querySelector('textarea')

	// 绑定this
	let _this = vnode.context
	await _this.$nextTick()
	if (!input) {
		return
	}
	if (input.type === 'radio') {
		const inputs = el.querySelectorAll('input')
		let checked
		for (let index = 0; index < inputs.length; index++) {
			const item = inputs[index]
			if (item.checked) {
				checked = item
			}
		}
		if (!el.parentElement) {
			return
		}
		el.parentElement.innerHTML = `<label style="line-height: 38px;">${checked.parentElement.nextElementSibling.innerText}</label>`
	} else {
		if (!input.value && input.type === 'textarea') {
			el.innerHTML = ''
			el.parentElement.style.width = 'auto'
			return
		}
		el.innerHTML = `<label ${input.type !== 'textarea' ? 'style="line-height: normal;"' : ''}>${input.value}</label>`
		el.parentElement.style.height = '38px'
		el.parentElement.style.lineHeight = 'normal'
		// if (input.type !== 'textarea') {
		// 	el.style.width = 'calc(100% - 165px)'
		// } else {
		el.style.cssText = 'width: 100%!important; padding: 10px 0;'
		// }
	}
	el.style.pointerEvents = 'none'
	_this.$forceUpdate()
}
export default {
	name: 'Input2Label',
	bind (el, bindling) {
		if (!bindling.value) {
			return
		}
		el.style.visibility = 'hidden'
	},
	componentUpdated (el, bindling, vnode) {
		input2Label(el, bindling, vnode)
	}
}
```