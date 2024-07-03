

# Logger for TypeScript Web Application

## Overview

We designed this Logger Module for our typescript based web application,to facilitate logging of important events and aid debugging during development.It offers flexibility in logging levels and includes the possibility for future extension to log to files.

## Features of this logger

- **Logging Levels**: Supports multiple logging levels including verbose, info, warning, and error.
- **Console Logging**: Logs messages to the console's standard output.
- **Future Extension**: Designed with placeholders for easy integration of file logging in the future.


### Installation

1. We setup the environment for our typescript 

for this we use the command :

npm install -g typescript (for gloabally installation of ts)

2. We check the version of typescript package we install in our 1st method

tsc -v

3. Initializes a new Node.js project in the current directory.

npm init -y 

4. for installing npm packages we used

npm install or npm i

5. After that initialize a TypeScript configuration file (tsconfig.json) 

npx tsc --init


6. Once the tsconfig.json file created make some changes in it 

 "target": "es2016", 
  "module": "commonjs",  
  "outDir": "./dist", 
  "esModuleInterop": true,     
  "forceConsistentCasingInFileNames": true, 
   "strict": true,  
    "skipLibCheck": true  

    and add this too:

     "include": ["src/**/*"],
     "exclude": ["node_modules", "dist"]

Next, use the following command to manually generate the dist folder:

npx tsc

This command will create a folder named dist, which will contain the compiled versions of all your TypeScript files.

Alternatively, you can run the following command to generate the dist folder along with a log of the compilation:

npm run dev

### Example

Here's how you can use the Logger in your TypeScript application:
```typescript
import { Logger } from './Logger';

const logger = Logger.getInstance();

// Enable file logging (placeholder implementation)
logger.enableFileLogging('my_app.log');

logger.verbose("This is a verbose message");
logger.info("This is an info message");
logger.warning("This is a warning message");
logger.error("This is an error message");

// Disable file logging
logger.disableFileLogging();

logger.info("This message will only be logged to the console");
```

### Logging Levels

- **Verbose**: Detailed messages for debugging purposes.
- **Info**: General information about the application's state.
- **Warning**: Indications of potential issues that do not prevent the application from functioning.
- **Error**: Critical errors that require attention.

### Configuring File Logging (Future Extension)

To enable file logging, use the `enableFileLogging` method of the Logger instance:

```typescript
logger.enableFileLogging('my_app.log');
```

You can specify the log file path as an argument. File logging can be disabled using `disableFileLogging`.

### Contributing

Contributions are welcome! Fork the repository and submit a pull request with your enhancements.

