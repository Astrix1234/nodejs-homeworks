const express = require("express");
const Joi = require("joi");
const router = express.Router();

const contactOperations = require("../../models/contacts");

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).required(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email(),
  phone: Joi.string().min(7),
});

router.get("/", async (_, res, next) => {
  try {
    const contacts = await contactOperations.listContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactOperations.getContactById(contactId);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const contact = await contactOperations.addContact(value);
    res.status(201).json(contact);
  } catch (error) {
    if (error.isJoi) {
      const failedField = error.details[0].context.key;
      return res
        .status(400)
        .json({ message: `missing required ${failedField} field` });
    }
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactOperations.removeContact(contactId);
    if (!result) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "missing fields" });
    }

    const value = await updateSchema.validateAsync(req.body);
    const { contactId } = req.params;
    const contact = await contactOperations.updateContact(contactId, value);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(contact);
  } catch (error) {
    if (error.isJoi) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next(error);
  }
});

module.exports = router;
