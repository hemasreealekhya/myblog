window.addEventListener("scroll", function(){
    var scroll = this.scrollY;
    
    document.getElementById("stars").style.borderTop = scroll*0.25+"px";
    document.getElementById("mountains_behind").style.top = scroll*0.5+"px";
    document.getElementById("mountains_front").style.top = scroll*0+"px";
    document.getElementById("text").style.marginRight = scroll*4+"px";
    document.getElementById("text").style.marginTop = scroll*1.5+"px";
    document.getElementById("header").style.top = scroll+0.5+"px";
})
$(document).ready(function(){
    $(".accordion-header").click(function(){
      $(this).next(".accordion-content").slideToggle("fast");
    });
  });