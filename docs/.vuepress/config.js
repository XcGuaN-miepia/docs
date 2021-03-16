module.exports = {
  title: '咩屁啊的个人文档',
	description: '随心所欲',
	base: '/docs/',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'vue', link: '/vue/directive/highlight' },
			{ text: 'node', link: '/node/git' },
			{ text: '服务器', link: '/server/docker/docker-install' },
			{ text: 'Github', link: 'https://github.com/XcGuaN-miepia/docs' }
		],
		sidebar: {
			'/vue/': [{
				title: 'vue自定义指令',
				children: ['directive/highlight', 'directive/ellipsis']
			}],
			'/node/': [{
				title: 'git',
				children: ['git', 'git-lint', 'deploy']
			}],
			'/server/': [{
				title: 'docker',
				children: ['docker/docker-install']
			}, {
				title: 'nginx',
				children: ['nginx/nginx-install']
			}, 'server-no-password']
		},
		lastUpdated: '上次更新'
	}
}