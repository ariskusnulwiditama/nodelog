import winston from "winston";

test("create new logger with console transport", () => {
    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new winston.transports.Console({})
        ]
    });
    logger.log({level: "error", message: "This is an error message"});
    logger.log({level: "warn", message: "This is a warning message"});
    logger.log({level: "info", message: "This is an info message"});
    logger.log({level: "verbose", message: "This is a verbose message"});
    logger.log({level: "debug", message: "This is a debug message"});
    logger.log({level: "silly", message: "This is a silly message"});
});

test("create new logger with shortcut", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });
    logger.error("This is an error message");
    logger.warn("This is a warning message");
    logger.info("This is an info message");
    logger.verbose("This is a verbose message");
    logger.debug("This is a debug message");
    logger.silly("This is a silly message");
});