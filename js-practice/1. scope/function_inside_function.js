function getDate() {
  var date = new Date();

  function formatDate() {
    return date.toDateString().slice(4);
  }

  return formatDate();
}

getDate();
console.log(date);  // "date" scope is outside of the function getDate(), so error-> ReferenceError: date is not defined
