   /* La función getPerson es invocada para obtener los datos personales y la url de 
   la imagen de una nueva persona (ficticia) cada vez que la página del curriculum 
   se recarga, desde https://randomuser.me */

async function getPerson() {
    const users = await fetch("https://randomuser.me/api/?results=2");
    const data = await users.json();
    document.getElementById("photo").src = data.results[0].picture.large;
    document.getElementById("name").innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    if (data.results[0].gender == "male") {
      document.getElementById("gender").innerHTML = "Sexo: Masculino";
    }else{
      document.getElementById("gender").innerHTML = "Sexo: Femenino";
    }
    document.getElementById("age").innerHTML = "Edad: " + data.results[0].dob.age + " años";
    document.getElementById("location").innerHTML = 
    "Ubicación: " + data.results[0].location.country + ", " +data.results[0].location.city;
    document.getElementById("address").innerHTML = 
    "Dirección: " + data.results[0].location.street.name + " " + data.results[0].location.street.number;
    document.getElementById("phone").innerHTML = "Teléfono: " + data.results[0].cell;
    document.getElementById("email").innerHTML = "E-mail: " + data.results[0].email;
    document.getElementById("email2").innerHTML = data.results[0].email;
    return data
    
    
     
    
  }


  
  
  
  
  
  
  
  
  
  

 
  
