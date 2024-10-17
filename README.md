# POC: Harness Feature Flags

## Objective

This proof of concept was developed with respect to issue [CE-2198](https://sgwsagility.atlassian.net/jira/software/c/projects/CE/boards/109?assignee=712020%3A7f7a8642-3791-480d-af82-4076362d40e1&selectedIssue=CE-2198) in order to **explore the usage of Harness's Feature Flags capabilities**. The POC contains flags that manipulate the Rsbuild React application by...

- **Enabling a front end component.**
    - (ENABLE_NEW_REACT_COMPONENT)
- **Enabling a configuration in the build tool.**
    - (ENABLE_NEW_BUILD_TOOL)

## Installation
1. Clone the repository. 
    ```bash 
    git clone https://github.com/MiniMinstrel/rsbuild-harness.git
    ```

2. Install dependencies.
    ```bash
    npm i
    ```

3. Prepare an .env file with the following key/value pairs.

    - **PUBLIC_CLIENT_KEY**: The client SDK key generated when creating an environment on Harness.
    - **PUBLIC_SERVER_KEY**: The server SDK key generated when creating an environment on Harness.
    - **PUBLIC_ENABLE_NEW_BUILD_TOOL**: The sample key used to determine if the example build tool should be toggled.

4. Ensure that your feature flags **ENABLE_NEW_REACT_COMPONENT** and **ENABLE_NEW_BUILD_TOOL** are toggled on in the Harness Web UI, and run setEnv.js.
    ```bash
    node setEnv.js
    ```
    - This command must be ran everytime the flag changes. You may remove line 50 (```client.close();```) if you wish for it to persist in the background.
5. Start the development server.
    ```bash
    npm run dev
    ```
    
The client-side will report what flags are currently live, as well as their values, while the browser console will report if the example build tool is being utilized.
## 
