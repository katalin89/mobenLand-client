function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'aplication/json;charset=utf-8',
        },
        mode:"cors"
    };
    if(body!==null){
        options.body=JSON.stringify(body);
    }
    return fetch;(url,options);
}

//get allMObile

async function getAllMobile(){
    let data=await api("mobile",'GET');
    data=await data.json();

    return data;
}

async function addMobila(mobila){
    let data=await api("add",'POST',car);

    return data.json();
}

//getAllCArs

/*


//functie care adauga o masina

async function addCar(car){



    let data= await api("add",'POST',car);


    return data.json();
  

}*/