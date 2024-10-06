import express from "express"
import { isAuthenticate } from "../middleware/verifyToken.js"
import { getMessage, sendMessage } from "../controller/message.controller.js"

const router = express.Router()

router.get("/:id",(req, res) => {
    console.log(req.body);  // Log incoming request data
    // Process the request
})
router.post("/send/:id", isAuthenticate, sendMessage)

export default router
