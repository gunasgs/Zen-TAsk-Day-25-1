document.body.innerHTML=
`<h1 class="text-warning">Forza API</h1>

<div class="container" id="carImg" >

</div>
<br>

<button class="btn btn-outline-primary text-light" onclick="getArandomCar()">Click here to get a random car image</button><br>`;

getArandomCar = (async () => {
    try {
        let res = await fetch(`https://forza-api.tk/`);
        let object = await res.json();
        displayCar(object);
    } 
    catch (error) {
      console.log(error);
    }
  });

  displayCar = (obj) => {
    let image = obj.image;
    document.querySelector('#carImg').innerHTML = `
    <li class="card">
    <img class="img-fluid mx-auto d-block" id="carimg" src="${image}"  alt="randomcarimg"/>
    </li>
    `;
    }