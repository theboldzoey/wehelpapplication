var bool = true; // used to toggle background color
var hide = true;

// toggle background color
function changeBg() {
  var card = document.getElementsByClassName("card");

  if (bool) {
    card[0].style.backgroundColor = "#b3ecff";
    bool = !bool;
  } else {
    card[0].style.backgroundColor = "ghostWhite";
    bool = !bool;
  }
}
var info = document.getElementById("hidedInfo");
// toggle hide information
function expand() {
  if (hide) {
    info.style.display = "block";
    hide = !hide;
  } else {
    info.style.display = "none";
    hide = !hide;
  }
}

// collapse card if reaches min height
window.addEventListener("resize", function () {
  var card = document.getElementsByClassName("card");
  var height = window.innerHeight * 0.8; // card has 80% height of body
  if (height < 600) {
    //alert();
    info.style.display = "none";
    hide = !hide;
  }
});
