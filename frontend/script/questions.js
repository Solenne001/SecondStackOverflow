/* const { error } = require("console"); */
const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});













function toggleComments(postId) {
    var commentsDiv = document.getElementById("comments-" + postId);
    commentsDiv.style.display = (commentsDiv.style.display === "none" || commentsDiv.style.display === "") ? "block" : "none";
}

function toggleQuestionForm() {
    var questionForm = document.getElementById("question-form");
    questionForm.style.display = (questionForm.style.display === "none" || questionForm.style.display === "") ? "block" : "none";
}

var questionText;

function submitQuestion() {
    var questionInput = document.getElementById("question-input");
    questionText = questionInput.value;

    // Validation de la question
    if (!questionText) {
        alert("Veuillez saisir une question.");
        return;
    }

    console.log("Submitted Question: " + questionText);

    questionInput.value = "";
    toggleQuestionForm();

    // Requête Fetch 
    fetch("http://localhost:5000/question/addQuestion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ questionText: questionText }),
    })
    .then(response => {
        console.log("Response status:", response.status);
        if (response.ok) {
            return response.json();
        } else {
            console.log("Échec de l'ajout:", response.statusText);
            throw new Error(response.statusText);
        }
    })
    .then(data => {
        console.log("Question ajoutée avec succès!", data);
    })
    .catch(error => {
        console.error("Erreur Fetch:", error);
    });


      // recuperation des questions et affichage

      fetch("http://localhost:5000/question/getQuestions", {
        method: "GET",
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Erreur de récupération des questions:", response.statusText);
          throw new Error(response.statusText);
        }
      })
      .then(data => {
        console.log("Données reçues du serveur:", data);
      
        const table = document.querySelector("table");
      
        // Supprime tous les éléments existants du tbody ou de la table directement
        table.innerHTML = "";
      
        // Créez la tête du tableau (thead) si elle n'existe pas déjà
        if (!table.querySelector("thead")) {
          table.createTHead();
        }
      
        // Ajoutez une ligne d'en-tête avec des exemples de colonnes
        const thead = table.querySelector("thead");
        thead.innerHTML = "<tr><th>Contenu de la question</th><th>Actions</th></tr>";
      
        // Créez le corps du tableau (tbody) s'il n'existe pas déjà
        if (!table.querySelector("tbody")) {
          table.createTBody();
        }
      
        const tbody = table.querySelector("tbody");
      
        // Parcourez les données et créez une ligne pour chaque question
        for (const questionId in data) {
          if (data.hasOwnProperty(questionId)) {
            const question = data[questionId];
            
            // Créez une nouvelle ligne (tr)
            const row = document.createElement("tr");
      
            // Créez une cellule pour le contenu de la question (td)
            const questionCell = document.createElement("td");
            const questionParagraph = document.createElement("p");
            questionParagraph.textContent = question.content_question;
            questionCell.appendChild(questionParagraph);
      
            // Créez une cellule pour les actions (td)
            const actionsCell = document.createElement("td");
            const editButton = document.createElement("button");
            editButton.textContent = "Modifier";
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Supprimer";
      
            // Ajoutez les boutons à la cellule des actions
            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
      
            // Ajoutez les cellules à la ligne
            row.appendChild(questionCell);
            row.appendChild(actionsCell);
      
            // Ajoutez la ligne au tbody
            tbody.appendChild(row);
          }
        }
      })
      
      .catch(error => {
        console.error("Erreur Fetch:", error);
      });
}

























/* const questionContainer = document.getElementById("question_content");

function getQuestions() {
    fetch("http://localhost:5000/question/getQuestion")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur dans la récupération des questions");
            }
            return response.json();
        })
        .then(data => {
            displayQuestions(data);
        })
        .catch(error => {
            console.error("Erreur de récupération des questions", error);
        });
} */

f/* unction displayQuestions(questions) {
    questionContainer.innerHTML = "";

    questions.forEach(question => {
        const questionElement = document.createElement("div");

        // Vérifier si 'question.content_question' existe avant de l'ajouter à la balise 'div'
        const contentQuestion = question.content_question ? question.content_question : "Contenu de la question non disponible";

        questionElement.innerHTML = `<p>${contentQuestion}</p>`;
        questionContainer.appendChild(questionElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getQuestions();
}); */
