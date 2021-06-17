import { format, transports } from 'winston';
import expressWinston from 'express-winston';

const expressLogger = expressWinston.logger({
  colorize: true,
  format: format.combine(format.colorize(), format.json()),
  transports: [new transports.Console()],
});

const expressErrorLogger = expressWinston.errorLogger({
  format: format.combine(format.colorize(), format.json()),
  transports: [new transports.Console()],
});

export { expressLogger, expressErrorLogger };
