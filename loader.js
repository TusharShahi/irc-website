  function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

          function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("img").src = images[x];
          }

          function startTimer() {
             var x= setInterval(displayNextImage, 200);
               var y=setInterval(move,2000);
               setTimeout(function(){
          clearInterval(x);
          clearInterval(y);
         clearInterval(id)},9000);

               
          }
          //setTimeout(function(){
          //clearInterval(x);
          //clearInterval(y);
         //clearInterval(id)},8000);

          var images = [], x = -1;
          images[0] = "images/astronaut.png";
          images[1] = "images/testtube.jpeg";
          images[2] = "images/akshat.png";
          images[3] = "images/equipment.png";
          images[4] = "images/roverer.jpg.jpg";
          
          function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      //elem.innerHTML = width * 1  + '%';
    }
  }
}