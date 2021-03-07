module.exports = {
  title: '咩屁啊的个人文档',
	description: '随心所欲',
	base: '/docs/',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'node', link: '/node/git' },
			{ text: '服务器', link: '/server/docker/docker-install' },
			{ text: '编辑器', link: '/vscode/plugin' },
			{ text: 'Github', link: 'https://github.com/XcGuaN-miepia/docs' }
		],
		sidebar: {
			'/node/': [{
				title: 'git',
				children: ['git', 'git-lint']
			}],
			'/server/': [{
				title: 'docker',
				children: ['docker/docker-install']
			}, {
				title: 'nginx',
				children: ['nginx/nginx-install']
			}, 'server-no-password'],
			'/vscode/': [{
				title: 'VSCode',
				children: ['plugin']
			}]
		},
		lastUpdated: '上次更新'
	}
}