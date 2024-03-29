# hilti-tool-service-platform

An in-house web application "Hilti Tool Service Platform (TSP)" built for Hilti ITC 2023, featuring an API endpoint to connect machine learning model in predicting potential defects in tools returned to service center.

## **1. Installation Guide**
Follow these steps to install and run the application:
### Prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (version 14.x or higher)
- NPM

### Steps
1. Clone the repository into local machine using the following git command:
    ```
    git clone https://github.com/JacksonTai/hilti-tool-service-platform.git
    ```

2. Change directory to `hilti-tool-service-platform\proxy` and install the dependencies (npm packages):
    ```
    cd `hilti-tool-service-platform\proxy
    npm install
    ```
    
3. Create a `.env` file in `proxy` folder and add the environment variables for API key:
    ```
    AWS_SAGEMAKER_PREDICT_TOOL_PART_DEFECT_ENDPOINT = {your api key}
    ```
    
4. Start the proxy server using the following commands:
    ```
    nodemon index
    ```

5. Start the web server on your localhost
