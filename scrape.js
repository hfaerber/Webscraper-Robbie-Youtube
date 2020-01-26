var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false });

nightmare
  .goto('https://youtube.com')
  .viewport(1500, 1500)
  .wait('#search')
  .type('input[name="search_query"]', 'jaegernoms')
  .click('#search-icon-legacy')
  .wait(2000)
  .click('.original-link')
  .wait('#subscribers')
  .evaluate(function () {
    var subscriberCount = document.getElementById('subscribers')
    return subscriberCount.innerText
  })
  .end()
  .then(function (result) {
    console.log('result', result)
  })
  .catch(function (error) {
    console.log('something went wrong: ', error);
  })
