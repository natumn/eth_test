Template.nodeStatusComponent.helpers({
	
	//接続先ノードを取得
	currentProvider: function() {
		return web3.currentProvider.host;
	},

	//接続先のノードのマイニング状態を確認
	//マイニング中ならtrue, そうでなければfalse
	isMining: function() {
		return web3.eth.mining;
	},

	//接続先ノードのマイニングのハッシュレートを取得
	crrentHashrate: function() {
		return web3.net.peerCount;
	},
});
