let listContainer=document.querySelector(".container");
let btnAdd=document.querySelector(".add");

let inp1=document.getElementById("denumire");
let inp2=document.getElementById("culoare");
let inp3=document.getElementById("material");
let inp4=document.getElementById("pret");

fetch("http://localhost:8080/api/v1/mobile").then(data=>{
    return data.json();
}).then(data=>{
    attachRows(data);
})

fetch("http://localhost:8080/api/v1/mobile/denumire").then(data=>{
    return data.json();
}).then(data=>{
    createOptions(data);
})


let denumire=document.querySelector(".mobile");

denumire.addEventListener("change",(e)=>{
    console.log(denumire.value);
    fetch(`http://localhost:8080/api/v1/mobile/${denumire.value}`)
    .then(data=>{
        return data.json();
    }).then(data=>{
        console.log(data);
        attachRows(data);
    })
})



btnAdd.addEventListener("click",()=>{
 let mobila={denumire:inp1.value,culoare:inp2.value,material:inp3.value,pret:+inp4.value};

 addMobila(mobila).then(data=>{
    let container=document.querySelector(".container");

    let t=createRow(data);

    container.appendChild(t);
 })
})



let containerSelect=document.querySelector(".mobile");

getAllDenumiri().then((data)=>{
    createOptions(data);
    console.log(data);
});

