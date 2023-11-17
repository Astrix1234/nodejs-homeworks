import express from "express";
import ctrlContacts from "../../controller/ctrlContacts.js";

const router = express.Router();

router.get("/contacts", ctrlContacts.get);

router.get("/contacts/:id", ctrlContacts.getById);

router.post("/contacts", ctrlContacts.create);

router.put("/contacts/:id", ctrlContacts.update);

router.delete("/contacts/:id", ctrlContacts.remove);

router.patch("/contacts/:id/favorite", ctrlContacts.updateStatus);

export default router;
