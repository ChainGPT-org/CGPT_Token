# CGPT Token Overview
ChainGPT is a smart contract that deploys a ERC-20 compliant token named CGPT. The contract inherits from the ERC20, ERC20Burnable, and Ownable contracts. The token can be used for any type of transactions on the Ethereum blockchain. The contract mints 1,000,000,000 CGPT tokens to the address that deploys the contract.

## Contract Details
License: SPDX-License-Identifier: MIT
Solidity Version: pragma solidity ^0.8.9;
The first line of the contract is the SPDX-License-Identifier. It is a standard identifier used to specify the license under which the contract is released. In this case, the contract is released under the MIT license.
The second line specifies the Solidity version that should be used to compile the contract. In this case, version 0.8.9 of Solidity is used.
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

The next three lines import the ERC20, ERC20Burnable, and Ownable contracts from the OpenZeppelin library. These contracts are used as base contracts for the ChainGPT contract.

contract ChainGPT is ERC20, ERC20Burnable, Ownable {

The ChainGPT contract is defined next. It inherits from the ERC20, ERC20Burnable, and Ownable contracts, which are listed in the contract definition.

constructor() ERC20("ChainGPT", "CGPT") {

The constructor function is defined next. It is called when the contract is deployed. The constructor function sets the initial state of the contract.

In this case, the constructor function calls the constructor of the ERC20 contract, passing in the name and symbol of the token. The name of the token is "ChainGPT", and the symbol is "CGPT". The total supply of tokens is set to 1,000,000,000.

The constructor function also mints the initial supply of tokens to the address that deploys the contract.

_mint(msg.sender, 1000000000 * 10 ** decimals());

The _mint function is called to mint the initial supply of tokens. It takes two parameters: the address to which the tokens should be minted, and the amount of tokens to mint.

In this case, the tokens are minted to the address that deploys the contract, which is msg.sender. The amount of tokens to mint is 1,000,000,000, which is multiplied by 10 raised to the power of the number of decimals for the token.

Conclusion
The ChainGPT contract deploys a ERC-20 compliant token named CGPT. The contract inherits from the ERC20, ERC20Burnable, and Ownable contracts. The contract mints 1,000,000,000 CGPT tokens to the address that deploys the contract. The token can be used for any type of transactions on the Ethereum blockchain.
