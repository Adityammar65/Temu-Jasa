function redirect() {
  window.location.href = "homepage.html";
}

var div=document.getElementById('[id]');
var display=0

function toggleDisplay(){
  if(display==1){
    div.style.display='flex';
    display=0;
  }else{
    div.style.display='none';
    display=1;
  }
}

function toggleDiv(id) {
  const element = document.getElementById(id);
  element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'flex' : 'none';
}

function pesanJasa(){
  alert('Anda telah memesan Jasa!')
}

function filterDivsBySearch(inputId, itemClass, mode = 'text') {
  const input = document.getElementById(inputId).value.toLowerCase();
  const items = document.getElementsByClassName(itemClass);

  for (let i = 0; i < items.length; i++) {
    let content;

    if (mode === 'text') {
      content = items[i].textContent.toLowerCase();
    } else if (mode === 'html') {
      content = items[i].innerHTML.toLowerCase();
    } else {
      content = items[i].getAttribute(mode)?.toLowerCase() || '';
    }

    items[i].style.display = content.includes(input) ? 'block' : 'none';
  }
}