//** Decubate Migration Script */
//** Author Aceson : Decubate Vesting 2022.6 */

require("dotenv").config();
const fs = require("fs");
const ChainGPT = artifacts.require("ChainGPT");

module.exports = async function (deployer, network, accounts) {

  await deployer.deploy(ChainGPT);

};
