
 function submitForm(){
    var lastname = document.getElementById("lastname").value;
    var firstname = document.getElementById("firstname").value;
    var age = document.getElementById("age").value;
    var date_de_naissance = document.getElementById("date_de_naissance").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    alert ("Inscription reussi avec succes!");

} 

/* fetch("http://localhost:5000/users/login"), {
    body: users,
    method: "POST",
  }
  .then((reponse)=>{
    reponse.json()
    .then((data)=>{
       console.log(data);
    })
 })
  .catch((error)=>{
    throw error
  }) */
  const loginForm = document.querySelector("form");

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
   const nom= document.getElementById('lastname').value;
   const prenom= document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send a POST request to the Node.js backend with the email and password
  const formdata ={
    nom : nom,
    prenom: prenom,
    email:email,
    password: password
  }
  fetch("http://localhost:5000/users/signup", {
    method: 'POST',  
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formdata),
  })
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
     if (data.success) {
      // Redirect to the admin panel or perform other actions
      window.location.href = 'frontend/pages/Accueil.html'
    } else {
      // Display an error message
    }
  })
  .catch((error) => {
    throw error
  });
});
/* .then((reponse)=>{
  reponse.json()
  .then((data)=>{
     console.log(data);
  })
})
.catch((error)=>{
  throw error
}) */
