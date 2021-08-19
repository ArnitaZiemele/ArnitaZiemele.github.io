function playVideo() {
  document.getElementById("play-btn").style.display = "none";
  document.getElementById("vid").play();
  document.getElementById("vid").setAttribute('controls','');
}

function menuPopUp() {
    var x = document.getElementById("topNav");
    if (x.className === "nav-main") {
      x.className += " responsive";
    } else {
      x.className = "nav-main";
    }
}
