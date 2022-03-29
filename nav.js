


document.querySelector("#btnMBars").onclick = function(e) {
  const btn = e.target.classList;
  const mMenu = document.querySelector("#mMenu");
  if(btn.contains('bars')) {
    btn.add('close');
    btn.remove('bars');
    mMenu.style.display = "block";
  }else{
    btn.add('bars');
    btn.remove('close');
    mMenu.style.display = "none";
  }
}