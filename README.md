# Flights And Searches
microservice for flights and flight searches

## Setup
- Clone project on your local device.
- Execute command `npm install` to install all necessary modules.
- Create an `.env` file for adding following environment variables.
    - `PORT`
-Create `config.json` file in `.src/config` and add database configuration like:
```json
{
  "development": {
    "username": "{your username}",
    "password": "{your password}",
    "database": "FlightSearchDev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  }
  

