import express from 'express'
import router from "./routes.js"
const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/api', router);

async function starter (){
    try{
        app.listen(PORT, ()=>console.log(`Server starting at : ${PORT} PORT`))
    }
    catch(e){
        console.error(e);
    }
}

starter();