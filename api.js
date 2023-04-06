function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/mobile/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
       
    };
    if(body!==null){
        options.body=JSON.stringify(body);
    }
    return fetch(url,options);
}

//get allMObile

async function getAllMobile(){
    let data=await api("all",'GET');
    data=await data.json();

    return data;
}

async function addMobila(mobila){
    let data=await api("add",'POST',mobila);

    return data;
}

async function getAllDenumiri(){
    let data=await api("denumire",'GET')

    data=await data.json();

    return data;
}

async function getAllMobilaByDenumire(denumire){
    let data=await api(`mobila/${denumire}`,'GET');

    data=await data.json();

    
    return data;
}


async function deleteMobila(mobilaId){
    let data=await api(`delete/${mobilaId}`,'DELETE');
    console.log(mobilaId);
 }

async function updateMobila(mobila){
    let data=await api(`update`,'PUT',mobila);

    return data;
}
async function sortByDenumire(){
     
    let data=await api(`sortByDenumire`,'GET');

    data=await data.json(data)

    return data;
}

async function sortByCuloare(){

    let data=await api(`sortByCuloare`,'GET');

    data=await data.json(data);

    return data;
}

async function sortByMaterial(){

    let data=await api(`sortByMaterial`,'GET');

    data=await  data.json(data);

    return data;
}

async function sortByPret(){
    let data= await api(`sortByPret`,'GET');

    data=await data.json(data);

    return data;
}