const request = require('./request');

const getRequest = {
  hostname: 'www.thecatapi.com',
  port: 3000,
  url: 'https://api.thecatapi.com/v1/breeds/search?q=sib',
  method: 'GET',
};
console.log(typeof body)

const data = JSON.parse(body);
console.log(data);
console.log(typeof data);

request(getRequest, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
})

