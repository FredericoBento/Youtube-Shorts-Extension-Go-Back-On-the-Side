const timer = setInterval(() => {
    console.log("on")
    const shorts_container =  document.getElementById("shorts-container");
    const short = document.getElementById("shorts-inner-container");
    if(shorts_container && short) {
      clearTimeout(timer);
      shorts_container.addEventListener("click", function(e) {
        var short_coords = getPosition(short);
        if(e.clientX <= short_coords.x){
            history.back();
        }
        
      });
    }
  }, 1000);

function getPosition(element) {
    var ClientRect = element.getBoundingClientRect();
    return {x:ClientRect.left,y:ClientRect.top}
 }