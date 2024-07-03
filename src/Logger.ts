
import * as fs from 'fs';
import { LogLevel } from './LogLevel';
import { ILogger } from './ILogger';

export class Logger implements ILogger {
    private static instance: Logger;
    private logToFileEnabled: boolean = false;
    private logFilePath: string = 'application.log';

    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    private logToConsole(level: LogLevel, message: string): void {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level}]: ${message}`);
    }

    private logToFile(level: LogLevel, message: string): void {
        if (!this.logToFileEnabled) return;

        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level}]: ${message}\n`;

        fs.appendFile(this.logFilePath, logMessage, (err) => {
            if (err) {
                console.error(`Failed to write to log file: ${err.message}`);
            }
        });
    }

    private serializeMessage(message: any): string {
        if (typeof message === 'string') {
            return message;
        }
        return JSON.stringify(message);
    }

    public enableFileLogging(filePath?: string): void {
        this.logToFileEnabled = true;
        if (filePath) {
            this.logFilePath = filePath;
        }
    }

    public disableFileLogging(): void {
        this.logToFileEnabled = false;
    }

    public log(level: LogLevel, message: any): void {
        const serializedMessage = this.serializeMessage(message);
        this.logToConsole(level, serializedMessage);
        this.logToFile(level, serializedMessage);
    }

    public verbose(message: any): void {
        this.log(LogLevel.VERBOSE, message);
    }

    public info(message: any): void {
        this.log(LogLevel.INFO, message);
    }

    public warning(message: any): void {
        this.log(LogLevel.WARNING, message);
    }

    public error(message: any): void {
        this.log(LogLevel.ERROR, message);
    }
}
