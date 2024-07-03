
import { Logger } from './Logger';

const logger = Logger.getInstance();

// Enable file logging
logger.enableFileLogging('my_app.log');

logger.verbose("This is a verbose message");
logger.info("This is an info message");
logger.warning("This is a warning message");
logger.error("This is an error message");

// Disable file logging
logger.disableFileLogging();

logger.info("This message will only be logged to the console");
