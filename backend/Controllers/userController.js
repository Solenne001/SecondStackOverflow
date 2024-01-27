const dataBase = require("../config/mysql")
const bcrypt= require("bcrypt")


exports.signup= (req, res)=>{
    console.log(req.body);
    let insertUser= "INSERT INTO utilisateur(name_user, firstname_user, mail_user, pwd_user) VALUES (?,?,?,?)"

    bcrypt
    .hash(req.body.password, 10)
    .then((hash)=>{
        dataBase.query(
            insertUser,
        [req.body.Nom,req.body.Prenom,req.body.Email,hash],
        (error, result)=>{
            if (error) {
                res.status(401).json(error)
            }
             res.status(201).json({hash, id: result.insertId})
        }
        )
    })

    .catch((error)=>{
        res.status(500).json(error)
    })
}

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: "Tous les champs sont obligatoires" });
    }
  
    let selectCategoriesQuery = "SELECT * FROM utilisateur WHERE mail_user = ?";
    dataBase.query(selectCategoriesQuery, [req.body.email], (error, result) => {
      if (error) {
        return res.status(500).json(error);
      }
  
      if (result === undefined) {
        return res.status(404).json({ message: "Utilisateur introuvable" });
      }
  
      bcrypt.compare(req.body.password, result[0].pwd_user).then((valid) => {
        if (!valid) {
          res.status(401).json({ message: "Mot de passe incorrect" });
        } else {
          res.status(200).json({ message: "Connexion réussie" });
        }
      }); 
    });
  };
  
  