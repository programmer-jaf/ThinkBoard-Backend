import ConnectDatabase from './database/database.js';
import app from './app.js';
import config from './config/config.js';
const startServer = async () => {
  try {
    ConnectDatabase().then(() => {
      app.listen(config.PORT, () => {
        console.log(`Server running on port ${config.PORT}`);
      });
    })
  } catch (error) {
    console.log("Error while starting the server", error);
  }
}
// start the server
startServer();