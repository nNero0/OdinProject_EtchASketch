let id =0;

function makeTable(){
    const doc= document.getElementById("basetable");
    let i;
    let j;
    for( i =0 ; i < 16 ;i++){
        for( j =0; j<16;j++){
            let square= document.createElement("div");
            square.setAttribute("class","item-container");
            square.setAttribute("id",id);
            id+=1;
            doc.appendChild(square);
            console.log("aaaa");
        }
    }
}

    function changeColor(){

    return "#"+Math.floor(Math.random()*16777215).toString(16);
    }

makeTable();

const items=document.getElementsByClassName("item-container");
for(let x = 0 ; x < items.length;x++ ){
    items[x].addEventListener("mouseover",event => {
        event.currentTarget.style.backgroundColor=changeColor();
    });
}