import log4js from 'log4js';

log4js.configure({
    appenders: {
        fileAppender: { type: 'file', filename: './logs/log-1.log' },
        consoleAppender: { type: 'console' }
    },
    categories: {
        default: { appenders: ['fileAppender', 'consoleAppender'], level: 'trace' },
        myLogger: { appenders: ['consoleAppender'], level: 'fatal' }
    }
})

const logger = log4js.getLogger('myLogger');

logger.level = 'trace';

logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");