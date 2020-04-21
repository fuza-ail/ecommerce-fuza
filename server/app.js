const express = require('express');
const PORT = process.env.PORT || 3000;
const router = require('./routes');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(router)

app.listen(PORT,()=>{
  console.log(`Listening to port ${PORT}`)
})
