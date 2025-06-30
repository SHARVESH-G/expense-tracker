import express from 'express'
import {  addIncome , getAllIncome , deleteIncome , downloadIncomeExcel } from '../controller/incomeController'

import {protect} from '../middleware/authMiddleware';

export const router = express.Router();

router.post("/add" , protect , addIncome);
router.get("/get" , protect , getAllIncome);
router.get("/downloadexcel" , protect , downloadIncomeExcel);
router.delete("/:id" , protect , deleteIncome);