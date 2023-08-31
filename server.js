const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    try{
        return res.json({code:200,content:"Hello World!"});
    }catch(error){
        return res.json({code:500, Error:error})
    }
});

baseRouter.post('/add', (req, res) => {
    const sum=req.body.first+req.body.second;
    res.json({ result: sum });
    
});


baseRouter.post('/subtract', (req, res) => {
    const sub=req.body.first-req.body.second;
    res.json({ result: sub });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});