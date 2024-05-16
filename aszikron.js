export function getAdat(vegpont, calback){
    fetch(vegpont, {method:"GET"})
    .then((respone)=>respone.json)
    .then((data)=>{console.log(data)})
    .catch((error)=>console.log(error));
    //megfogja kérni a végpontott, method megadjuk a kérést
}

/*
fetch(file)
.then(x=> x.text())
.then(y => myDisplay);
*/