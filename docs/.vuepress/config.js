module.exports = {
  title: '咩屁啊的个人文档',
	description: '随心所欲',
	base: '/docs/',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'node', link: '/node/' }
		],
		sidebar: {
			'/node/': [{
				title: 'git',
				children: ['', 'git-lint']
			}]
		},
		lastUpdated: '上次更新'
	}
}