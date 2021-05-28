word = document.querySelector(".word")
mean = document.querySelector(".mean")
next = document.querySelector(".start")
show = document.querySelector(".show")
prev = document.querySelector(".prev")
done = document.querySelector(".done")
flag = document.querySelector(".flag")
main = document.querySelector(".main")
divMarked = document.querySelector(".marked-words")
speak = document.querySelector(".speak")

let flashed = [];
let wordSpeak = new SpeechSynthesisUtterance();
let speaking = null;
let marked = []

let review = false;
let reviewTimer = 2;

prev_no = null;
keys = []
let no = null;
let Data = {}

$.getJSON("./content.json", function(data){
    Data = data
    for(let k in data){
        keys.push(k);
    }
});



next.addEventListener("click",() =>{

    if(no == null){
        prev.style.display = "flex";
        next.innerHTML = "Next";
        next.className = "next";
        show.style.display = "flex"
        done.style.display = "flex"
        flag.style.display = "flex"
        main.style.width = "75%";

        if ('speechSynthesis' in window) {
            speak.style.display = "flex"
        }
        
    }else{
        prev_no = no;
    }

    if(review){
        review = false;
        reviewTimer = Math.floor(Math.random() * 4);
    }else if(reviewTimer === 0){
        review = true;
    }
    else if(!review && reviewTimer > 0 && marked.length){
        reviewTimer = reviewTimer - 1;
    }

    if(prev.style.display === "none"){
        prev.style.display = "flex";
    }

    if(keys[no] in marked){
        flag.src = "./icons/checked.svg";
    }
    else{
        flag.src = "./icons/flag.svg";
    }
    
    show.style.animation = "showcame 0.5s forwards"
    show.style.display = "flex";

    if(review){
        no = Math.floor(Math.random() * marked.length);
        word.innerHTML = marked[no];
        flag.src = "./icons/checked.svg";
    }else{
        no = Math.floor(Math.random() * keys.length);
    }
    if(!(flashed.includes(no) && !review)){
        flashed.push(no)
    }
    window.speechSynthesis.cancel();
    done.innerHTML = `${flashed.length} out of ${keys.length} Cards Flashed`
    speak.style.animation = "animspeakfor 0.5s forwards";


    if(review){
        word.innerHTML = marked[no];
    }
    else{
        word.innerHTML = keys[no];
    }
    word.style.animation = "animword 0.5s forwards";
    mean.style.display = "none";
    mean.innerHTML = Data[word.innerHTML];
    setTimeout(rmanim, 600);
    setTimeout(animspeak, 600);
});

show.addEventListener("click",()=>{
    if(no == null){
        alert("Please Press Next First");
    }else{
        mean.style.display = "block";
        mean.style.animation = "animmean 0.5s forwards";
        show.style.animation = "showgone 0.5s forwards"
        setTimeout(animean,505);
    }
})


prev.addEventListener("click",()=>{
    window.speechSynthesis.cancel();
    if(prev_no){
    no = prev_no;
    if(marked.includes(keys[no])){
        flag.src = "./icons/checked.svg";
    }
    else{
        flag.src = "./icons/flag.svg";
    }
    word.innerHTML = keys[no];
    word.style.animation = "animword 0.5s forwards";
    speak.style.animation = "animspeakback 0.5s forwards"
    show.style.animation = "showcame 0.5s forwards"
    show.style.display = "flex";
    mean.style.display = "none";
    mean.innerHTML = Data[word.innerHTML]
    prev.style.display = "none";
    setTimeout(rmanim, 600);
    setTimeout(animspeak, 600);
    }

});

flag.addEventListener("click",()=>{
    if(keys[no] !== null && marked.includes(keys[no])){
        flag.src = "./icons/flag.svg";
        marked = marked.filter(item => item !== keys[no])
    }
    else if(review){
        flag.src = "./icons/flag.svg";
        marked = marked.filter(item => item !== marked[no])
    }
    else{
        flag.src = "./icons/checked.svg";
        marked.push(keys[no]);
    }

    divMarked.innerHTML = "";
    divMarked.style.animation = "span 1s forwards"
    marked.forEach((x, i) => {
        if(divMarked.innerHTML === ""){
            divMarked.innerHTML = x;
        }
        else{
        divMarked.innerHTML = `${divMarked.innerHTML} , ${x} `
        
        }
    });
    setTimeout(animspan, 1010);
})

speak.addEventListener("click",()=>{
    if(speaking){
        null;
    }
    else{
    wordSpeak.text = word.innerHTML;
    window.speechSynthesis.speak(wordSpeak);
    speak.style.color = "#ff3300";

    wordSpeak.onend = () => {
        speaking = null;
        speak.style.color = "white";
    }
    speaking = true;
    }
})

function animspan(){
    divMarked.style.animation = "none";
}

function rmanim(){
    word.style.animation = "none";
}

function animean(){
    mean.style.animation = "none";
    show.style.display = "none";
    show.style.animation = "none";
}

function animspeak(){
    speak.style.animation = "none";
}
