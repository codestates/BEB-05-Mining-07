const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('9c706fbe7622c45a0bfc', '4ca6e054c7f3bb1dbf2ee891670a6f7cabbd086aef2068eae9e2b22c3d77bb15');

const axios = require('axios').default;

axios.get('https://gateway.pinata.cloud/ipfs/Qmdi3ND49TzkEeZhkArb8Y3UHY7aBf2xD7mZDHXiVmKVEc/1.png')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });