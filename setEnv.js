require('dotenv').config();
const { Client } = require("@harnessio/ff-nodejs-server-sdk");
const fs = require("fs");

const client = new Client(process.env.PUBLIC_SERVER_KEY);

client
  .waitForInitialization()
  .then(() => {
    const target = {
      identifier: "USER1",
      attributes: {},
    };

    client
      .boolVariation("ENABLE_NEW_BUILD_TOOL", target, false)
      .then((flagValue) => {
        const newEnvVar = `PUBLIC_ENABLE_NEW_BUILD_TOOL=${flagValue}\n`;
        
        // Read the existing .env file
        let envContent = '';
        if (fs.existsSync('.env')) {
          envContent = fs.readFileSync('.env', 'utf8');
        }

        // Split the content into lines
        const envLines = envContent.split('\n');

        // Check if the variable already exists
        let variableExists = false;
        for (let i = 0; i < envLines.length; i++) {
          if (envLines[i].startsWith('PUBLIC_ENABLE_NEW_BUILD_TOOL=')) {
            envLines[i] = newEnvVar.trim(); // Update the existing variable
            variableExists = true;
            break;
          }
        }

        // If the variable doesn't exist, append it
        if (!variableExists) {
          envLines.push(newEnvVar.trim());
        }

        // Join the lines back into a single string
        envContent = envLines.join('\n');

        // Write the updated content back to the .env file
        fs.writeFileSync('.env', envContent);
        console.log("Environment variable set:", newEnvVar.trim());
        client.close();
      })
      .catch((error) => {
        console.error("Error fetching feature flag:", error);
      });
  })
  .catch((error) => {
    console.error("Error initializing Harness SDK:", error);
    console.error(
      "Detailed error:",
      error.response ? error.response.data : error.message
    );
  });
