function goto(x) {
   window.location = x;
}
function encrypted5g(x) {
  //Safety feature
  var splitString = x.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray + ".html";
}
function server(x) {
   goto(encrypted5g(x));
}
function error() {
   var input = window.prompt("Java error exception at line 42 index.java","");
   server(input);
}
