
import { LogLevel } from './LogLevel';

export interface ILogger {
    log(level: LogLevel, message: string): void;
    verbose(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
}
