import Contact from "./schemas/contact.js";

const getAllContacts = async () => {
  return Contact.find();
};

const getContactById = (id) => {
  return Contact.findOne({ _id: id });
};

const createContact = (body) => {
  return Contact.create(body);
};

const updateContact = (id, body) => {
  return Contact.findByIdAndUpdate({ _id: id }, body, { new: true });
};

const removeContact = (id) => {
  return Contact.findByIdAndRemove({ _id: id });
};

const updateContactFavorite = (id, favorite) => {
  const update = { favorite: favorite };
  return Contact.findByIdAndUpdate({ _id: id }, update, { new: true });
};

export default {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  removeContact,
  updateContactFavorite,
};
