// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// to prevent attack from multiple transactions.
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarket is ReentrancyGuard {
  using Counters for Counters.Counter;

  // for each individual item that is created.
  Counters.Counter private _itemsIds;
  // counter for number of sold items.
  Counters.Counter private _itemsSold;

  // who is owner of the marketplace, so we can set commissions.
  address payable owner;

  // listing price
  // ether and Matic have both 18 decimal points.
  uint256 listingPrice = 0.025 ether;

  constructor(){
    // I am the owner of this marketplace.
    owner = payable(msg.sender);
  }

  // define each market items
  struct MarketItem {
    uint itemId;
    address nftContract;
    uint256 tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  }

  



}
