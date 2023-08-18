const request = require('./request');
const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
  });
  const data = JSON.parse(request);
  console.log(data);
  console.log(typeof data);
};

module.exports = { fetchBreedDescription };