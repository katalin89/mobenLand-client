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

function createOptions(denumiri){
    let denumirile=document.querySelector(".mobile");
    for(let i=0;i<denumiri.length;i++){
        let option=document.createElement('option')
        
        option.value=denumiri[i];
        option.textContent=denumiri[i];
        denumirile.appendChild(option);
     }
}
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





