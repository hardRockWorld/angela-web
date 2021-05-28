// function which returns the current date using proper formating like how we write date normally

function getDate() {
  var date = new Date();

  function formatDate() {
    return date.toDateString().slice(4);
  }

  return formatDate();
}

var date = getDate();   //now the date scope is outside the getDate function
console.log(date);      // this works fine now.
