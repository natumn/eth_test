Template.blockStatusComponent.helper({
	// 最新のブロック番号の取得
	latestBlockNum: function() {
		return EthBlocks.latest.number;
	},

	// 最新のブロックハッシュ値を取得
	latestBlockHash: function() {
		return EthBlock.latest.hash;
	},

	// 最新のブロックを採掘した採掘者のアドレスを取得
	latestBlockMiner: function() {
		return EthBlocks.latest.miner;
	},

	// 最新のブロックの採掘日時を取得
	latestBlockDatetime: function() {
		return unix2datetime(EthBlocks.latest.timestamp);
	}
});
