const questionCtrl= require("../Controllers/questionController")
const express= require("express")
const router= express.Router()

router.get("/getQuestions",questionCtrl.getQuestions)
router.post("/addQuestion", questionCtrl.addQuestion)

module.exports=router;