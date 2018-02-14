.PHONY: console
console:
	geth --networkid "10" --nodiscover --datadir "./" console 2>>./geth_err.log

.PHONY: ide
ide:
	google-chrome browser-solidity-gh-pages/index.html
	geth --networkid "10" --nodiscover --datadir "./" --mine --unlock 0x7d315a351967521ee38422d60b2146ddfc6e1b8f --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" console 2>> ./geth_err.log


