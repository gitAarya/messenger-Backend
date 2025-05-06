// const asynchandler=(fn)=>{
//     return (req,res,next)=>{
//         Promise.resolve( fn(req,res,next)).catch( (err)=> next(err))
//     }

import { apiResponse } from "./apiResponse"

    

// }

const asyncHandler=(fun)=> async (req,res,next)=>{
        try {
            await (req,res,next)
            
        } catch (error) {
            res.status(error.code||500).json(
               new apiResponse(500,"asunc fun connection failed! ")
            )
            
        }

    }

export {asynchandler}