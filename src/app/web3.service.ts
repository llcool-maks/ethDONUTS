import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const EthDonutsABI = require('../assets/abi/EthDonutsABI.json');
import Web3 from 'web3';
declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  // tslint:disable:prefer-const
  // tslint:disable:max-line-length
  //
  //
  // NOTE: TO CHANGE TO YOUR CUSTOM OBJECT, IN MICROSOFT VISUAL STUDIO CODE
  // NOTE: USE CTRL+F TO FIND ALL INSTANCES OF "donut", case sensitive, replace with your object name, in all lowercase.
  // NOTE: THEN USE CTRL+F AGAIN TO FIND ALL INSTANCSE OF "Donut", case sensitive, replace with your object name, with only the first letter uppercased.
  // NOTE: THEN USE CTRL+F AGAIN TO FIND ALL INSTANCSE OF "DONUT", case sensitive, replace with your object name, in all uppercase.
  // NOTE: RESULTS, AND UPPERCASE ON THE "Donut" RESULTS.
  //
  //
  // NOTE: AFTER THIS YOU MUST EDIT THE METADATA
  // NOTE: FOR SOME REASON, CONTRACTS OUTPUT BOTH NAMED VARIABLES
  // NOTE: AND ALSO AN INDEXED COPY OF THE SAME VARIABLES (1,2,3,4)
  // NOTE: I BELIVE IT IS NECESSARY TO COPY THESE INDEXES IN YOUR OBJECT
  // NOTE: THOUGH I AM UNSURE. OK ENJOY, AND HAPPY LEARNING. - YOUR FREN OCB
  //
  // NOTE: AFTER THIS YOU MUST CHANGE THE CONTRACT ADDRESS ON LINE 67, CURRENTLY THIS
  // NOTE: IS NAMED 'EthDonutsAddress', pointing at 0x33D98600272cDD1b6e62eA3601a952D64dAc4071
  //
  //
  // NOTE: YOU MUST THEN CHANGE THE ABI FOUND IN 'assets/abi/EthDonutsABI.json',
  // NOTE: AND PASTE YOUR OWN ABI JSON TO REPLACE THE 'ETHDonuts' ABI JSON. (YOU CAN GET FROM REMIX.ETHEREUM.ORG)
  //
  //
  // NOTE: THE APPLICATION AUTOMATICALLY DETECTS WHICH BLOCKCHAIN THE USER IS ON, IF USING METAMASK
  // NOTE: I NEED TO IMPLEMENT THE DIFFERENT WALLET LIBRARIES AS THIS ONLY WORKS WITH BRAVE WALLET AND
  // NOTE: METAMASK WALLET.
  //
  //

  // NFT METADATA OBJECT VARIABLE
  specificDonut: BehaviorSubject<{
    0: number,
    1: number,
    2: number,
    3: number,
    icing_type: number,
    icing_color: number,
    dough_color: number,
    background_color: number,
  }> = new BehaviorSubject({
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    icing_type: 3,
    icing_color: 4,
    dough_color: 5,
    background_color: 5
  });

  // WEB3 VARIABLES
  web3: Web3; // WEB3 INSTANCE (UNDEFINED)
  chainId: BehaviorSubject<any> = new BehaviorSubject(0); // BLOCK CHAIN (TELLS YOU IF YOU ARE ON TESTNET OR NOT)

  // USER VARIABLES
  myAddress: BehaviorSubject<any> = new BehaviorSubject(0); // USER ADDRESS

  // BROWSER VARIABLES
  isOnline: BehaviorSubject<boolean> = new BehaviorSubject(false); // LINE 101 (DISABLED) - TELLS APP IF BROWSER IS CONNECTED TO THE INTERNET OR NOT
  // CONTRACT VARIABLES
  EthDonutsContract; // LINE 141-161 - THIS OBJECT IS YOUR ACTUAL SOLIDITY CONTRACT, INITIALIZED WITH THE ABI JSON AND THE CONTRACT'S ADDRESS
  EthDonutsAddress = '0x33D98600272cDD1b6e62eA3601a952D64dAc4071'; // LINE 161 - GETS CALLED TO BUILD THE CONTRACT
  mintedDonuts = new BehaviorSubject(2); // LINED 166 - THIS IS THE AMOUNT OF CURRENTLY MINTED DONUTS, PULLED FROM THE CONTRACT VIA WEB3
  mintCost = new BehaviorSubject(2); // LINE 143 - THIS IS THE COST OF MINTING EACH DONUT, PULLED FROM THE CONTRACT VIA WEB3
  mintingOpens = new BehaviorSubject(5); // LINE 149 - THIS IS THE MINTING OPENING TIME IN UNIX TIMESTAMP FORMAT, PULLED FROM THE CONTRACT VIA WEB3

  // APP VARIABLES
  mintButtonText = new BehaviorSubject('Mint Donut'); // LINE 198-219 - THIS BEHAVIOR SUBJECT IS UPDATED DYNAMICALLY WHEN THE CLAIM FUNCTION IS CALLED TO UPDATE THE BUTTON ON THE FRONT END
  newlyMintedPopup = new BehaviorSubject(false);
  objectName = 'Donut';


  // CONTRACT OUTPUT
  donuts: any[] = []; // LINE 172 - AN ARRAY OF ALL THE DONUTS THAT HAVE BEEN MINTED
  storedDonutCount = 0; // LINE 171 - HOW MANY DONUTS HAVE BEEN STORED IN THE ABOVE ARRAY
  userDonuts: any[] = []; // LINE 175 - AN ARRAY OF ALL THIS USER'S DONUTS









  constructor() {
    this.web3 = new Web3(Web3.givenProvider);
    if (Web3.givenProvider) {
      this.web3 = new Web3(Web3.givenProvider);
    } else {
      this.web3 = new Web3(window.ethereum);
    }
    if (!this.web3.givenProvider && !this.web3.currentProvider) {
      this.web3 = new Web3('http://localhost:8545');
    }
    try {
      this.getContracts();
      this.requestAccounts();
      // Actions to take when account changes
      window.ethereum.on('accountsChanged', (myAddresses) => {
        this.myAddress.next(myAddresses[0]);
        this.web3.eth.getChainId().then(result => {
          this.chainId.next(result);
        });
        this.web3.eth.defaultAccount = myAddresses[0];
      });
      this.getMintingOpen();
      this.getMintingPrice();
      this.getMintedDonuts();
      this.getAllDonuts();
      setInterval(() => {
        this.web3.eth.getChainId().then(result => {
          if (result !== this.chainId.getValue()) {
            this.chainId.next(result);
          } else {

          }
        });
      }, 5000);
    } catch (error) {
    }
  }

  async getMintingPrice(): Promise<any> {
    this.EthDonutsContract.methods.MINT_PRICE().call().then(results => {
      this.mintCost.next(results);
    });
  }

  async getMintingOpen(): Promise<any> {
    this.EthDonutsContract.methods.MINTING_OPENS().call().then(results => {
      this.mintingOpens.next(results);
    });
  }

  async requestAccounts(): Promise<any> {
    await this.web3.eth.requestAccounts().then(myAddresses => {
        this.web3.eth.defaultAccount = myAddresses[0];
        this.myAddress.next(myAddresses[0]);
    });
  }

  async getContracts(): Promise<any> {
    this.EthDonutsContract = new this.web3.eth.Contract(EthDonutsABI, this.EthDonutsAddress);
  }

  async getMintedDonuts(): Promise<any> {
    await this.EthDonutsContract.methods.actualMintNr().call().then(results => {
      this.mintedDonuts.next(results);
    }).catch({});
  }

  async getAllDonuts(): Promise<any> {
    for (let index = 0; index < this.mintedDonuts.getValue(); index++) {
      await this.EthDonutsContract.methods.assets(index).call().then( async (results: any) => {
        this.storedDonutCount = this.storedDonutCount + 1;
        this.donuts.push(results);
        await this.EthDonutsContract.methods.ownerOf(index).call().then((resultsIsOwner: any) => {
          if (resultsIsOwner === this.myAddress.getValue()) {
            this.userDonuts.push([results, index]);
          }
        }).catch({});
      }).catch({});

    }
  }

  async getSpecificDonut(index: number): Promise<any> {
    await this.EthDonutsContract.methods.assets(index).call().then(results => {
      this.specificDonut.next(results);
    }).catch({});
  }

  async mintDonut(): Promise<any> {
    if (this.mintButtonText.getValue() === 'Minting...' || this.mintButtonText.getValue() === 'Minting Already...') {
      this.mintButtonText.next('Minting Already...');
      return;
    }
    this.mintButtonText.next('Minting...');
    this.EthDonutsContract.methods
    .claim()
    .send({from: this.myAddress.getValue(), value: this.mintCost.getValue()}).then((result: any) => {
      this.displayMintedDonutAfterItsMinted(result.events.NewAsset.returnValues.tokenId);
      if (result.status === true) {
        this.mintButtonText.next('Minted');
        setTimeout(() => {
            this.mintButtonText.next('Mint Donut');
          }, 2500);
      } else {
        this.mintButtonText.next('Failed');
        setTimeout(() => {
          this.mintButtonText.next('Mint Donut');
        }, 2500);
      }
    }).catch({
    }); // mint isn't called because this is an internal function in which it would end up being free for the public
  }

  async displayMintedDonutAfterItsMinted(id: number): Promise<any> {
    this.getSpecificDonut(id);
    this.newlyMintedPopup.next(true);
  }

}
