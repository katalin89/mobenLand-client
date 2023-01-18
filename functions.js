
function createRow(mobila){
    let tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${mobila.id}</td>
    <td>${mobila.denumire}</td>
    <td>${mobila.culoare}</td>
    <td>${mobila.material}</td>

    <td>${mobila.pret}</td>
    `
console.log(mobila.denumire)
    return tr;
}

function attachRows(arr){
    let container=document.querySelector(".container");
    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
        console.log(arr[i]);
    }
}

function returnDenumirile(arr){
    let arrayNou;
    for(let i=0;i<i<arr.length;i++){
        arrayNou.appendChild(arr[i].denumire);
    }
    return arrayNou;
}


function returnMobila(data,denumire){
    for(let i=0;i< data.length;i++){
        if(data[i].denumire==denumire){
            return data[i].denumire;
        }
    }
    return -1;
}
