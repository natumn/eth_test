web3 = new Web3();

// RPCプロバイダを設定
if (!web3.currentProvider) {
	web3.setProvider(new web3.providers.HttpProvider("http:/localhost:8545"));
}

// EthAccounts初期化
EthAccounts.init();

// EthBlocksの初期化
EthBlocks.init();

// Session変数を初期化
initSessionVars();

// オブサーバーの起動
observeNode();
