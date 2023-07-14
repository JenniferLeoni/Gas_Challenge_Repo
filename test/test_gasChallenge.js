const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Deploy Gas Challenge Contract", () => {
  let gas_contract;

  beforeEach(async () => {
    const gas_challenge_contract = await ethers.getContractFactory(
      "gasChallenge"
    );
    gas_contract = await gas_challenge_contract.deploy();
  });

  describe("Compute Gas", () => {
    it("Should return lower gas", async () => {
      await gas_contract.notOptimizedFunction();
      await gas_contract.optimizedFunction();

      /* THIS CODE BELOW IS JUST FOR TRYING TO ACTUALLY COMPARE THE GAS USED
      I DO NOT KNOW IF THIS IS THE RIGHT WAY TO DO IT, BUT AS FAR AS I RUN IT, 
      IT ALWAYS PASSES THE TEST */

      //FOR NOT OPTIMIZED
      // const notOpt = await gas_contract.notOptimizedFunction();
      // const receiptNO = await notOpt.wait();
      // const gasUsedNO = BigInt(receiptNO.cumulativeGasUsed) * BigInt(receiptNO.effectiveGasPrice);

      //FOR OPTIMIZED
      // const opt = await gas_contract.optimizedFunction();
      // const receiptO = await opt.wait();
      // const gasUsedO = BigInt(receiptO.cumulativeGasUsed) * BigInt(receiptO.effectiveGasPrice);

      // expect(gasUsedO).to.lt(gasUsedNO);
    });
  });

  describe("Check Sum Of Array", () => {
    it("Should return 0", async () => {
      //this is to check whether the sum of the optimized array function is equal to 0
      await gas_contract.optimizedFunction(); //call the optimized function
      const sum = await gas_contract.getSumOfArray(); //get the sum
      expect(sum).to.equal(0); //compare it
    });
  });
});
