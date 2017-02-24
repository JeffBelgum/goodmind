
/*
  Goodmind.js
*/

var settings = {

};

var $elements = {
  mainText: 'main-text'
};

function getMessages(callback) {
  // Make a request for a user with a given ID
axios.get('/data.json')
  .then(function (response) {
    var data = response.data

    console.log(response.data);
    console.log(data.messages);

    renderMessage(pickMessage(data.messages));
  })
  .catch(function (error) {
    console.log(error);
  });
}


function pickMessage(messages) {
  return messages[Math.floor(Math.random() * messages.length)];
}

function renderMessage(message) {
  document.getElementById($elements.mainText).textContent = message;
}


document.addEventListener('DOMContentLoaded', function() {

    // Put the image URL in Google search.
    console.log('Initialized Extention');
    getMessages();
});
