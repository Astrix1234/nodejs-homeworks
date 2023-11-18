import express from "express";

import { get } from "../../controller/ctrlContacts/getContacts.js";

import { getById } from "../../controller/ctrlContacts/getContactById.js";

import { create } from "../../controller/ctrlContacts/createContact.js";

import { update } from "../../controller/ctrlContacts/updateContact.js";

import { remove } from "../../controller/ctrlContacts/removeContact.js";

import { updateStatus } from "../../controller/ctrlContacts/updateContactFavorite.js";

const router = express.Router();

router.get("/contacts", get);

router.get("/contacts/:id", getById);

router.post("/contacts", create);

router.put("/contacts/:id", update);

router.delete("/contacts/:id", remove);

router.patch("/contacts/:id/favorite", updateStatus);

export default router;
