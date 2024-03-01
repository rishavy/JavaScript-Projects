const body = document.querySelector('body');
const h1 = document.querySelector("h1");
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn_icon');

function store(value){
  localStorage.setItem('darkmode', value);
}

function load(){
  const darkmode = localStorage.getItem('darkmode');

  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode === 'true'){ 
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
    h1.style.color = '#eee';
  } else if(darkmode === 'false'){ 
    icon.classList.add('fa-sun');
  }
}

load();

btn.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    icon.classList.toggle('fa-moon'); 
    icon.classList.add('animated');
    store(body.classList.contains('darkmode'));
  
    if (body.classList.contains('darkmode')){
        icon.classList.remove('fa-sun');
        h1.style.color = 'white';
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        h1.style.color = 'black';
    }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})
