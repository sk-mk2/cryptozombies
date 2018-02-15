.PHONY: console
console:
	geth --networkid "10" --nodiscover --datadir "./" --mine --unlock 0xf066e19ec41df881f3a90610ecb9992a8955220c --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" console 2>> ./geth_err.log

.PHONY: ide
ide:
	google-chrome browser-solidity-gh-pages/index.html
	geth --networkid "10" --nodiscover --datadir "./" --mine --unlock 0xf066e19ec41df881f3a90610ecb9992a8955220c --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" console 2>> ./geth_err.log

