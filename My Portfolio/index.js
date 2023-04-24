var tablinks =document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwGx4Ajg7ervGHuqbmNS8Z_6jIYN4HzY2xZHOmM1T8_l7ImgZRH1KlSuQT3jhsx52Yv/exec'
  const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000 )
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  const msg = document.getElementById("msg")
  btn3= document.getElementById("btn3");
window.onscroll=function(){
    if(scrollY >= 400){
        btn3.style.display='block';
    }else{
        btn3.style.display='none';

    }
}
btn3.onclick = function () {
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}