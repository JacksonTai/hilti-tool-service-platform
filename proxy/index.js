const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

// Middleware
// ##########################################
// parse incoming requests with raw payloads
app.use(bodyParser.raw({ type: 'text/plain' }));

// allow CORS access
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Proxy's API endpoint
// ##########################################
app.post('/awsproxy/predicttoolpartdefect', (req, res) => {
  const data = req.body.toString();
  console.log(data);
  axios.post(process.env.AWS_SAGEMAKER_PREDICT_TOOL_PART_DEFECT_ENDPOINT, data, {
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  .then((response) => {
    console.log('Response:', response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
    res.status(500).send('Error sending data to API');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));