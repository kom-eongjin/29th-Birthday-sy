var section = document.querySelector('section');
window.addEventListener('scroll', function(){
  var value = window.scrollY;
   section.style.WebkitClipPath = "circle("+ value +"px at center)"
})
