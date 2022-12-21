import mongoose from "mongoose";

/*Ici, je créé le modèle,
c'est à dire l'ensemble des informations qui doivent 
être enregistées en BDD, leur type et si elles sont
oui ou non requises*/
const Employee = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
});

export default mongoose.model("employees", Employee);
