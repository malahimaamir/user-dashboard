
import express from "express";
import { createUser, getUsers, updateUser } from "../controllers/userController";
import upload from "../middleware/upload";

const router = express.Router();

router.post("/", upload.single("photo"), createUser);
router.get("/", getUsers);
router.put("/:id", upload.single("photo"), updateUser); 

export default router;
