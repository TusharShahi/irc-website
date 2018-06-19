window.onload=remover;
function remover ()
   {
      var w = window.innerWidth;
      //console.log("window.innerWidth");
      if(w<350)
      {
        document.querySelector(".gototop").style.display="none";
            document.querySelector(".icon-bar").style.display="none";
        //console.log("inside ifs")
      }
      else
      {
        document.querySelector(".gototop").style.display="block";
            document.querySelector(".icon-bar").style.display="block";
            //console.log("bale bale")
      }
       
    }