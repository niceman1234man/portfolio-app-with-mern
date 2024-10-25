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

} from "../controller/index.js";

const router = express.Router();

router.post("/",  postHome);
router.post("/", postAbout);
router.post("/",  postSkill);
router.post("/",  postService);
router.get('/',getAbout);
// router.get('/',getHome);
// router.get('/',getSkill);
// router.get('/',getService);


export default router;
