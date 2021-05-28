function getDate() {
  var date = new Date();

  return date;
}

getDate();

// let us try to log the variable inside the function getDate outside its scoped
console.log(date);  // will this throw an error? just try and see it for yourself.. yes, Error is: ReferenceError: date is not defined
