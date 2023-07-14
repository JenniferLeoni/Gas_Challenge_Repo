require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    showMethodSig: true,
  },
  solidity: "0.8.18",
};
