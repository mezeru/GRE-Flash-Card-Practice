word = document.querySelector(".word")
mean = document.querySelector(".mean")
next = document.querySelector(".start")
show = document.querySelector(".show")
prev = document.querySelector(".prev")
done = document.querySelector(".done")
flag = document.querySelector(".flag")
main = document.querySelector(".main")
divMarked = document.querySelector(".marked-words")

let flashed = [];

let marked = []

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
    }else{
        prev_no = no;
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

    no = Math.floor(Math.random() * keys.length);
    if(!(marked.includes(keys[no]))){
        flashed.push(no)
    }
    done.innerHTML = `${flashed.length} out of ${keys.length} Cards Flashed`

    word.innerHTML = keys[no];
    word.style.animation = "animword 0.5s forwards";
    mean.style.display = "none";
    mean.innerHTML = Data[word.innerHTML];
    setTimeout(rmanim, 600);
});

show.addEventListener("click",()=>{
    if(no == null){
        alert("Please Press Next First");
    }else{
        mean.style.display = "block";
        mean.style.animation = "animmean 0.5s forwards";
        setTimeout(animean,600);
    }
})


prev.addEventListener("click",()=>{
    if(marked.includes(keys[prev_no])){
        flag.src = "./icons/checked.svg";
    }
    else{
        flag.src = "./icons/flag.svg";
    }
    word.innerHTML = keys[prev_no];
    word.style.animation = "animword 0.5s forwards";
    mean.style.display = "none";
    mean.innerHTML = Data[word.innerHTML]
    prev.style.display = "none";
    setTimeout(rmanim, 600);

});

flag.addEventListener("click",()=>{
    if(keys[no] !== null && marked.includes(keys[no])){
        flag.src = "./icons/flag.svg";
        marked = marked.filter(item => item !== keys[no])
    }
    else{
        flag.src = "./icons/checked.svg";
        marked.push(keys[no]);
    }

    divMarked.innerHTML = "";

    marked.forEach((x, i) => {
        if(divMarked.innerHTML === ""){
            divMarked.innerHTML = x;
        }
        else{
        divMarked.innerHTML = `${divMarked.innerHTML} , ${x} `
        }
    });

})

function rmanim(){
    word.style.animation = "none";
}

function animean(){
    mean.style.animation = "none";
}

