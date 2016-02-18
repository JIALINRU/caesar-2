var y = 0;
function CaesarCipher(str, num) {
    var result = '';
    var charcode = 0;
    for (i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 65 && c <=  90) {
        result += String.fromCharCode((c - 65 + num) % 26 + 65);
      }
		  else if (c >= 97 && c <= 122) {
        result += String.fromCharCode((c - 97 + num) % 26 + 97);
      }
		  else {
        result += str.charAt(i);
      }
    }
    return result;

}
function submitCode() {
  var code = document.getElementById("code");
  var shift = document.getElementById("shift");
  var enciphered = document.createElement("p");
  var node = document.createTextNode(CaesarCipher(code.value, parseInt(shift.value)));
  if ()
  enciphered.appendChild(node);
  enciphered.id = "p1"
  var element = document.getElementById("pcontainer");
  if (y > 0) {
    element.removeChild(document.getElementById("p1"));
  }
  element.appendChild(enciphered);
  y += 1;
}
