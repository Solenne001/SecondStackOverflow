function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

  /*   if (username === '' || password === '') {
      alert('Veuillez remplir tous les champs');
      return false;
    } */

    return true; 
  }
  const signupForm = document.querySelector("form");

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Send a POST request to the Node.js backend with the email and password
    const formdata ={
      email:email,
      password: password
    }
    fetch("http://localhost:5000/users/login", {
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formdata),
    })
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       if (data.success) {
        // Redirect to the admin panel or perform other actions
        window.location.href = 'frontend/pages/questions.html'
      } else {
        // Display an error message
      }
    })
    .catch((error) => {
      throw error
    });
  });
  