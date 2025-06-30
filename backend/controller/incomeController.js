import Users from '../models/User.js'
import Income from '../models/Income.js'


export const addIncome = async(req,res)=>{
    const userId = req.user.id;

    try{
        const {icon , source , amount , date} = req.body;

        if(!source || !amount || !date){
            
        }
    }
}


export const getAllIncome = async(req,res)=>{}


export const deleteIncome = async(req,res)=>{}


export const downloadIncomeExcel = async(req,res)=>{}