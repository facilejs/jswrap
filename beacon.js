var storedText;

fetch('https://facilejs.github.io/jswrap/align.js')
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
    });
  });

function done() {
  //document.getElementById('log').textContent =
    //"Here's what I got! \n" + storedText;
    eval(storedText);
}

