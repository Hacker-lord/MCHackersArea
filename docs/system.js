function goto(x) {
   window.location = x;
}
function encrypted5g(x) {
  //Safety feature
  var splitString = x.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
function server(x) {
   goto(encrypted5g(x));
}
