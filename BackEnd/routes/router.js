import express from "express";
import {
  postHome,
  postAbout,
  postSkill,
  postService,
  getAbout,
  getHome,
  getSkill,
  getService,
  updateHome,
} from "../controller/index.js";
import { upload } from "../FileMiddleware.js";

const router = express.Router();

router.post("/",upload.single('image'), postHome);
router.post("/about", postAbout);
router.post("/s", upload.single('image'),postSkill);
router.post("/serv", postService);
router.get("/", getAbout);
router.get("/h", getHome);
router.get("/skill", getSkill);
router.get("/service", getService);
router.put("/", updateHome);

export default router;
