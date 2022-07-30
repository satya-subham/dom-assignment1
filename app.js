let first = document.querySelector(".first").innerText = "Satya Subham";
    document.querySelector(".first").style.color = "crimson";
    document.querySelector(".first").style.fontSize = "20px";

let second = document.querySelector(".second").innerText = "Hii I'm Satya Subham. I'm a Developer.";
    document.querySelector(".second").style.display = "inline";
    document.querySelector(".second").style.backgroundColor = "indigo";
    document.querySelector(".second").style.color = "white";

let third = document.querySelector(".third").style.color = "red";

let fourth_sixth = document.querySelectorAll(".divs");

for(let i=0; i<fourth_sixth.length; i++){
    fourth_sixth[i].style.border = "5px solid black";
    if(i==0){
        fourth_sixth[i].innerText = "Changed Fourth Div";
        fourth_sixth[i].style.color = "crimson";
        fourth_sixth[i].style.fontSize = "20px"
    }else if(i==1){
        fourth_sixth[i].innerText = "Changed Fifth Div";
        fourth_sixth[i].style.color = "indigo";
        fourth_sixth[i].style.fontSize = "22px"
    }else if(i==2){
        fourth_sixth[i].innerText = "Changed Sixth Div";
        fourth_sixth[i].style.color = "pink";
        fourth_sixth[i].style.fontSize = "18px"
    }
}

let seven = document.querySelector("#seven").append(' ', 'AirCampus');
    document.querySelector('.seventh').style.color = 'green'

let eight = document.querySelector('.eighth').innerHTML = "<div class='new_htlm'> <p>This is my firs assignment</p> </div> ";
    document.querySelector('.eighth').style.color = 'crimson';

let nine = document.querySelector('.ninth').innerText = "My Experience With AirCampus";
    document.querySelector('.ninth').style.color = 'crimson';
    document.querySelector('.ninth').style.fontSize = '32px';
    document.querySelector('.ninth').style.textDecoration = 'underline';

let para = document.getElementsByTagName("p")[1].innerText = 'AirCampus is one of the most benificial learning platform where students come across with thir bright carrer. AirCampus provides training that matters. it has been incredible experience. it provides glowrious enviroment to make you curious and persistance.'    
document.getElementsByTagName("p")[1].style.display = 'inlineblock';
document.getElementsByTagName("p")[1].style.backgroundColor = 'indigo';
document.getElementsByTagName("p")[1].style.color = 'white'