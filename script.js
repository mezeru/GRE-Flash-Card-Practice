word = document.querySelector(".word")
mean = document.querySelector(".mean")
next = document.querySelector(".next")
show = document.querySelector(".show")

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
        next.innerHTML = "Next";
        show.style.display = "flex"
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