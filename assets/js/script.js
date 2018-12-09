var animation = [
  { "id":"photoanimation", "time":11500, },
  { "id":"copyanimation", "time":4300, },
  { "id":"mainanimation", "time":2500, },
];

var i = 1;

function anime () {
  if(animation[i]){
      setTimeout(function () {
        document.getElementById(animation[(i-1)]["id"]).style.display = "none";
        document.getElementById(animation[i]["id"]).style.display = "block";
        console.log(animation[i]["id"]+":"+animation[i]["time"]+"ms");
        ++i;
        anime ();
      }, animation[(i-1)]["time"] );
  }
}

anime ();
/*
window.onload = function(){
  setTimeout(function () {
    document.getElementById("opinganimation").style.display = "none";
    document.getElementById("mainanimation").style.display = "block";
  }, 2500);
};
*/
