function getDate() {
  var date = new Date();

  return date;
}

var date = getDate();   // create a new variable date which has scope outside of the function and then try to log
console.log(date);      // this works fine
