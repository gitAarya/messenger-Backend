import dotenv from 'dotenv'
import connectDB from './db/db.js'
import { app } from './app.js'
dotenv.config(
    {
        path:'./env'
    }
)
connectDB()
.then(
    app.listen( process.env.PORT || 3000,()=>{
        console.log(` server is running at port ${ process.env.PORT}`);
        
    }),
    app.on("error",()=>{
        console.log("error:",error);
        throw error
        
       })
)
.catch( (err)=>{
    console.log(`Mongo DB connection failed!!!${err}`);
    
})