# CGPT Token Overview
ChainGPT is backed by the $CGPT utility token, which is required to access various AI tools and products powered by ChainGPT. It's playing a significant role in the ecosystem of ChainGPT. 

### Security Audit Report
- Certik: https://www.certik.com/projects/chaingpt

### Token Utility:
ChainGPT AI, API Access, DAO & Voting, Staking, Farming, Liquidity Providing.

## Contract Details
`ChainGPT.sol` is an ERC20/BEP20 standard smart-contract named CGPT. The contract inherits from the ERC20, ERC20Burnable, and Ownable contracts. The token can be used for any type of transactions on the BSC blockchain. The contract mints 1,000,000,000 CGPT tokens to the address that deploys the contrat, and does not have the ability to mint any more tokens after the deployment. 

- <b>Network:</b> Binance Smart Chain (BEP20)
- <b>Token Name:</b> ChainGPT
- <b>Token Symbol:</b> CGPT
- <b>Total Supply:</b> 1,000,000,000 (1 billion)
- <b>Decimals:</b> 18

### Solidity
- <b>License:</b> `SPDX-License-Identifier: MIT`
- <b>Solidity Version:</b> `pragma solidity ^0.8.9;`
- <b>The ChainGPT.sol contract imports the following OpenZeppelin smart-contracts:</b><br>
`import "@openzeppelin/contracts/token/ERC20/ERC20.sol";`<br>
`import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";`<br>
`import "@openzeppelin/contracts/access/Ownable.sol";`<br>
