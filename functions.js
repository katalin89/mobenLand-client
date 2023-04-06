
async function attachHomePage(){

    let container=document.querySelector(".container");

    container.innerHTML=`
        <h1>Mobile</h1>
        <p><a class="button new-mobila">Create new Mobila</a></p>


        <table>
            <thead>
                <tr class="container-sort">
                    <th class="id">Id</th>
                    <th class="denumire">Denumire</th>
                    <th class="culoare">Culoare</th>
                    <th class="material">Material</th>
                    <th class="pret">Pret</th>
                    
                </tr>
            </thead>

            <tbody class="container-mobile"

            </tbody>
        </table>
    `;

    let data=await getAllMobile();
    attachRows(data);

    let containerSort=document.querySelector(".container-sort");
    
    containerSort.addEventListener("click",async(e)=>{
        e.preventDefault;
        let data=e.target;

        if(data.classList.contains("denumire")){
            let vec=await sortByDenumire();

            attachRows(vec);
        }else if(data.classList.contains("culoare")){

            let vec=await sortByCuloare();

            attachRows(vec);

        }else if(data.classList.contains("material")){
            let vec=await sortByMaterial();

            attachRows(vec);
        }else if(data.classList.contains("pret")){

            let vec=await sortByPret();

            attachRows(vec);
        }
    });





let btnAddNewMobila=document.querySelector(".new-mobila");

btnAddNewMobila.addEventListener("click",(e)=>{
    attachNewMobilaPage();
})

let rowsContainer=document.querySelector(".container-mobile");

rowsContainer.addEventListener("click",(e)=>{
    e.preventDefault();
    let data=e.target.parentNode;

    let mobilaProperties=data.children;

    const mobila={
        mobilaId:mobilaProperties[0].innerHTML,
        denumire:mobilaProperties[1].innerHTML,
        culoare:mobilaProperties[2].innerHTML,
        material:mobilaProperties[3].innerHTML,
        pret:mobilaProperties[4].innerHTML
    };

    attachUpdatePage(mobila);
    });
}

function update(){
    let inp1=document.getElementById("denumireInp");
    let inp2=document.getElementById("culoareInp");
    let inp3=document.getElementById("materialInp");
    let inp4=document.getElementById("pretInp");

    const mobila={
        denumire:inp1.value ,
        culoare:inp2.value ,
        material:inp3.value ,
        pret: inp4.value,
    };
    updateMobila(mobila);

}

async function attachUpdatePage(mobila){
    let container=document.querySelector(".container");

    container.innerHTML = ` <h1>Update Mobila</h1> 
    <input name="mobilaId" class="mobilaId" type="hidden" value="${mobila.mobilaId}"/>
    
    
    <ul class="error">
        
    </ul>

    <p>
        <label for="denumireInp">Denumire</label>
        <input name="denumire" type="text" class="denumire" id="denumire" value="${mobila.denumire}"  disabled>
    </p>
    <p>
        <label for="culoareInpl">Culoare</label>
        <input name="culoarelInp" type="text" class="culoare" id="culoare" value="${mobila.culoare}">
    </p>
    <p>
        <label for="materialInp">Material</label>
        <input name="materialInp" type="text"  class="material" id="material" value="${mobila.material}">
    </p>
    <p>
        <label for="pret">Pret</label>
        <input name="pret" type="text" class="pret" id="pret" value="${mobila.pret}">
    </p>
  
    <div>
        <button class="update">Update Mobila</button>
        <button class="delete" >Delete Mobila</button>
        <button class="cancel">Cancel</button>
    </div>
`;


let btnCancel = document.querySelector(".cancel");
btnCancel.addEventListener("click", () => {
  attachHomePage();
});

let  btnUpdate=document.querySelector(".update");
btnUpdate.addEventListener("click",async()=>{
    let input1 = document.querySelector(".denumire");
    let input2 = document.querySelector(".culoare");
    let input3 = document.querySelector(".material");
    let input4 = document.querySelector(".pret");

    let mobila = {
        denumire: input1.value,
        culoare: input2.value,
        material: input3.value,
        pret: input4.value,
       
      };
      let erors=[];
      if(input2.value==""){
        erors.push("trebuie pus culoarea");
        input1.style.borderColor="red";
      }

      if(input3.value==""){
        erors.push("trebuie pus materialul");

        input3.style.borderColor="red";

      }

      if(input4.value==0){
        erors.push("trebuie pus pretul");
        input4.style.borderColor="red";
      }
      

      if(erors.length>0){

        let errorContainer=document.querySelector(".error");

        let h1=document.createElement("h1");

        for(let i=0;i<erors.length;i++){
            let li=document.createElement("li");

            li.textContent=erors[i];

            errorContainer.appendChild(li);
        }
      }else{

        let errorContainer=document.querySelector(".error");

        errorContainer.innerHTML="";
      }

      if(erors.length==0){

        let data=await updateMobila(mobila);

        attachHomePage();
      }
});

    let btnDelete=document.querySelector(".delete");

    btnDelete.addEventListener("click", async () => {
        let input = document.querySelector(".mobilaId");

        console.log(input);
    
        let mobilaId = input.value;
        console.log(mobilaId);
    
        let data = await deleteMobila(mobilaId);
    
        attachHomePage();
      });

}

function attachNewMobilaPage(){
    let container=document.querySelector(".container");

    container.innerHTML=`
    <h1>New Mobila</h1>

    <ul class="error">
            
    </ul>
        <p>
            <label for="denumire">Denumire</label>
            <input name="denumire" type="text" id="denumire" class="denumire"/>
        </p>
        <p>
            <label for="title">Culoare</label>
            <input name="culoare" type="text" id="culoare" class="culoare">
        </p>
        <p>
            <label for="material">Material</label>
            <input name="material" type="text" id="material" class="material">
        </p>
        

        <p>
            <label for="pret">pret</label>
            <input name="pret" type="text" id="pret" class="pret">
        </p>

        <div class="butoane">
            <button class="add">Add new  Mobila</button>
            <button class="cancel">Cancel</button>
            </div
   
    
    `;
    let btnCancel = document.querySelector(".cancel");
    btnCancel.addEventListener("click", () => {
      attachHomePage();
    });

    let btnAddNewMobila = document.querySelector(".add");
    let inp0 = document.getElementById("mobilaId");
    let inp1 = document.getElementById("denumire");
    let inp2 = document.getElementById("culoare");
    let inp3 = document.getElementById("material");
    let inp4 = document.getElementById("pret");

    btnAddNewMobila.addEventListener("click",async()=>{

        let inp1 = document.querySelector(".denumire");
        let inp2 = document.querySelector(".culoare");
        let inp3 = document.querySelector(".material");
        let inp4 = document.querySelector(".pret");

        let mobila = {
            denumire: inp1.value,
            culoare: inp2.value,
            material: inp3.value,
            pret: inp4.value,
           
        };

        let erors=[];

        if(inp1.value=="" && inp2.value=="" &&inp3.value=="" && inp4==0){
            erors.push("Nu ati completat campurile");
        }
        if(inp1.value==""){
            erors.push("trebuie pusa denumirea");
            inp1.style.borderColor="red"
        }

        if(inp2.value==""){
            erors.push("trebuie pusa culoarea");
            inp2.style.borderColor="red";
        }

        if(inp3.value==""){
            erors.push("Trebuie pusa materialul");
            inp3.style.borderColor="red";
        }

        if (inp4.value==0){
            erors.push("Trebuie pusa pretul")

            inp4.style.borderColor="red";
        }

        if(erors.length>0){
            let errorContainer=document.querySelector(".error");

            errorContainer.innerHTML ="";
            let h1=document.createElement("h1");

            h1.textContent="Oooops";

            errorContainer.appendChild(h1);

            for(let i=0;i<erors.length;i++){
                
                let li=document.createElement("li");

                li.textContent=erors[i];

                errorContainer.appendChild(li);
            }
        }else{

            let data=await addMobila(mobila);

            attachHomePage();
        }
      
      

    });
  
  
}

function createRow(mobila){
    let tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${mobila.id}</td>
    <td>${mobila.denumire}</td>
    <td>${mobila.culoare}</td>
    <td>${mobila.material}</td>
    <td>${mobila.pret}</td>
    `

    return tr;
}

function attachRows(arr){
    let container=document.querySelector(".container-mobile");
    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
        
    }
}

