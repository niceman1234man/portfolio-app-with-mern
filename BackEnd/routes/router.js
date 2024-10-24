import express from "express";
import {
  getHome,
  getAbout,
  getSkill,
  getService,
} from "../controller/index.js";

const router = express.Router();

router.post("/", getHome);
router.post("/", getAbout);
router.post("/", getSkill);
router.post("/", getService);

export default router;
