import { Router } from "express";
import mongoose from "mongoose";
import Post from "./post.js"
import PostController from "./PostController.js";

const router = new Router();

router.get("/posts", PostController.getAll);
router.post("/posts", PostController.create);
router.get("/posts/:id",PostController.getOne);

export default router;