word = document.querySelector(".word")
mean = document.querySelector(".mean")
next = document.querySelector(".next")
show = document.querySelector(".show")
prev = document.querySelector(".prev")

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
        show.style.display = "flex"
    }else{
        prev_no = no;
    }

    if(prev.style.display === "none"){
        prev.style.display = "flex";
    }

    no = Math.floor(Math.random() * keys.length);

    word.innerHTML = keys[no];
    mean.style.display = "none";
    mean.innerHTML = Data[word.innerHTML]

});

show.addEventListener("click",()=>{
    if(no == null){
        alert("Please Press Next First");
    }else{
        mean.style.display = "block";
    }
})


prev.addEventListener("click",()=>{

    word.innerHTML = keys[prev_no];
    mean.style.display = "none";
    mean.innerHTML = Data[word.innerHTML]
    prev.style.display = "none";

});