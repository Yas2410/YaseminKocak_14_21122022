import express from "express";
import {
  getEmployees,
  getEmployeeById,
  saveEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/EmployeeController.js";

const router = express.Router();

/*Les différentes routes de mon application :
1. Retourner l'ensemble des employées
2. Retourner un employé (ID)
3. Ajouter un employé
4. Mettre à jour un employé
5. Supprimer un employé
*/
router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);
router.post("/employees/add", saveEmployee);
router.patch("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;
