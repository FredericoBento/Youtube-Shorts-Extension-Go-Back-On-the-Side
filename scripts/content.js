const timer = setInterval(() => {
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
  }, 150);

function getPosition(element) {
    var ClientRect = element.getBoundingClientRect();
    return {x:ClientRect.left,y:ClientRect.top}
 }