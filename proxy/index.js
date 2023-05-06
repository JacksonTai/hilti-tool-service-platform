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
  let dummyData = {
    'Chuck Drill': {
      possibility: 0.8319448232650757,
      suggestion: 'Clean the inner chuck using a brush or compressed air to remove any debris or dust that may have accumulated. Ensure smooth movement of the chuck.',
      detail: 'Inner chuck is faulty',
      is_faulty: 1
    }, 
    'Stator': {
      possibility: 0.7676222920417786,
      suggestion: 'Inspect the stator coil for any loose connections, damaged windings, or signs of overheating. Tighten any loose connections and repair minor damage using appropriate techniques such as soldering. If the coil is extensively damaged or burnt, it is recommended to replace the stator with a new one.',
      detail: 'End plates is faulty',
      is_faulty: 1
    },
    'Chuck Key': {
      possibility: 0.24398110806941986,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    },
    'Cable Handle': {
      possibility: 0.21081124246120453,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    },
    'Motor': {
      possibility: 0.17865760624408722,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    },
    'Top Brush': {
      possibility: 0.1541164368391037,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    },
    'Right Body': {
      possibility: 0.12350292503833771,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    },
    'Rubber Grip': {
      possibility: 0.0778951570391655,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    },
    'Switch': {
      possibility: 0.059224288910627365,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    },
    'Rotor': {
      possibility: 0.011712218634784222,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    },
    'Low Brush': {
      possibility: 0.01135985553264618,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    },
    'Left Body': {
      possibility: 0.003192452946677804,
      suggestion: 'No action required',
      detail: 'No part is faulty',
      is_faulty: 0
    }
  }
  res.send(dummyData);
  // console.log(data);
  // axios.post(process.env.AWS_SAGEMAKER_PREDICT_TOOL_PART_DEFECT_ENDPOINT, data, {
  //   headers: {
  //     'Content-Type': 'text/plain'
  //   }
  // })
  // .then((response) => {
  //   console.log('Response:', response.data);
  //   res.send(response.data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  //   res.status(500).send('Error sending data to API');
  // });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on proxy server - port: ${PORT}`));