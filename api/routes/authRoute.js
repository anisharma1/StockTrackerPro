import express from "express";
import { google, signOut, register, signin } from "../controllers/authCtrl.js";

const router = express.Router();

router.post("/register", register);
router.post("/sign-in", signin);
router.post("/google", google);
router.get("/signout", signOut);

export default router;
