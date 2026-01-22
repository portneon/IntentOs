const express = require('express');
const app = express();

app.get('/', (req,res) => {
    console.log('got the request')
    res.status(200).json('Server is running')
})




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});