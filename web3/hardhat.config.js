/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
		version: "0.8.9",
		defaultNetwork: "sepolia",
		networks: {
			hardhat: {},
			sepolia: {
				url: "https://rpc.ankr.com/eth_sepolia",
				accounts: [
					`0x20b0632aec5c73b0226ef67391a2b7173e7151c9233ed3c1e7e84bca5f236249`,
				],
			},
		},
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
