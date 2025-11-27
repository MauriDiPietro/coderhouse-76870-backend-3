import winston, { transports } from 'winston';

const logConfig = {
    transports: [ 
        new transports.Console(),
        new transports.File({ level: 'warn', filename: '2.log' })
     ]
}

const logger = winston.createLogger(logConfig);

logger.level = 'silly';

logger.silly("Entering cheese testing");
logger.debug("Got cheese.");
logger.verbose("Cheese is Comté.");
logger.info("Cheese is quite smelly.");
logger.warn("Cheese is too ripe!");
logger.error("Cheese was breeding ground for listeria.");