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

  // mapping for market items
  // keeping up with items that were created
  mapping(uint256 => MarketItem) private idToMarketItem;

  // event to signal when the MarketItem is created
  event MarketItemCreated(
    uint indexed itemId,
    address indexed nftContract,
    uint256 indexed tokenId,
    address seller,
    address owner,
    uint256 price,
    bool sold
  );

  // function that returns the listing price
  // so we can get the listing price on the frontend when the new item is about to get minted.
  function getListingPrice() public view returns(uint256) {
    return listingPrice;
  }

  // create a MarketItem
  function createMarketItem(
    address nftContract,
    uint256 tokenId,
    uint256 price
    ) public payable nonReentrant {
      require(price > 0, "Price must be at least 1 Wei");
      require(msg.value == listingPrice, "Price must at least be equal to the Listing Price");

      _itemsIds.increment();
      uint256 itemId = _itemsIds.current();

      idToMarketItem[itemId] = MarketItem(
        itemId,
        nftContract,
        tokenId,
        payable(msg.sender),
        payable(address(0)),
        price,
        false
      );

      // transfer the ownership of the NFT to buyer
      IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

      // emit the event that new MarketItem is created
      emit MarketItemCreated(
          itemId,
          nftContract,
          tokenId,
          msg.sender,
          address(0),
          price,
          false
      );
    }

    // function for market sale
    function createMarketSale(
      address nftContract,
      uint256 itemId
      ) public payable nonReentrant {
          // get the price of the MarketItem
          uint price = idToMarketItem[itemId].price;
          // get the token Id of the MarketItem
          uint tokenId = idToMarketItem[itemId].tokenId;

          // buyer must send enough coins to meet the price of the NFT
          require(msg.value == price, "Please submit the asking price in order to complete the purchase.");

          // transfer the transaction, sending money to seller
          idToMarketItem[itemId].seller.transfer(msg.value);

          // transfer thr ownership, send NFT to buyer
          IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);

          // update mapping, new owner
          idToMarketItem[itemId].owner = payable(msg.sender);

          // setting the MarketItem status to "sold"
          idToMarketItem[itemId].sold = true;

          // increment the number of sold MarketItems
          _itemsSold.increment();

          // paying the owner of the contract (pay listing price (commission) to the owner of the marketplace).
          payable(owner).transfer(listingPrice);
      }


      // VIEW FUNCTIONS
      // returns unsold MarketItems, lists all available market items
      function fetchMarketItems() public view returns(MarketItem[] memory){
        // total number of items that are currently created.
        uint itemCount = _itemIds.current();
        // get the number of unsold items
        uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
        // for looping an Array
        uint currentIndex = 0;


        MarketItem[] memory items = new MarketItem[](unsoldItemCount);

        for(uint i = 0; i < itemCount; i++){
          
        }
      }

}
