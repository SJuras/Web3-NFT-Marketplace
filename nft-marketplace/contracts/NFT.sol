// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// for setting the token's URI
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// for incrementing numbers
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
  using Counters for Counters.Counter;

  // keep track of unique token Ids
  // first minted token gets id of 1, next one gets incremented token id
  Counters.Counter private _tokenIds;
  address contractAddress;

  constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT"){
    contractAddress = marketplaceAddress;
  }

  // mint new tokens
  function createToken(string memory tokenURI) public returns(uint){
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();

    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);
    setApprovalForAll(contractAddress, true);
    // returns new token id so we can deisplay it in frontend.
    return newItemId;
  }
  
}
