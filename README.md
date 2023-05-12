# hilti-tool-service-platform

## Task
1) Auto select the highest probability defects when the result page is first loaded.
2) Add background color to table row when it's being selected.

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
