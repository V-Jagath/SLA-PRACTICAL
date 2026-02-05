import express from "express";
import {
    userCreate,
    userCheck,
    userShow,
    updateUser,
    deleteUser
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/userCreate", userCreate);
router.post("/checkUser", userCheck);

router.get("/showUser/:id", userShow);

router.put("/updateUser/:id", updateUser);

router.delete("/deleteUser/:id", deleteUser);

export default router;
