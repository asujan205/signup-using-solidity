export const LoginAbi= [
    {
      "constant": true,
      "inputs": [],
      "name": "nbOfUsers",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x12679323"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_signature",
          "type": "string"
        }
      ],
      "name": "register",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf2c298be"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSignatureHash",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc127ae41"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getUserAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xebc3eee8"
    }
  ]