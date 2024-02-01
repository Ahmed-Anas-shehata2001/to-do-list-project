
let content = document.querySelector(".content");
let input = document.querySelector(".my_input");
let add_button = document.querySelector(".add_button");

add_button.addEventListener('click' , ()=>{

    if(input.value ===''){
        alert("you have to write something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
            content.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
    }
    input.value="";
    saveData();


})

content.addEventListener("click" , (e)=>{

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
} , false)

function saveData(){
    localStorage.setItem("data" , content.innerHTML);
}

function showTask(){
    content.innerHTML = localStorage.getItem("data");
}
showTask();