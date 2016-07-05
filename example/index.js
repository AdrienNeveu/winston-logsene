var winston = require('winston')
var logsene = require('../lib/index.js') 
var logger = new winston.Logger()
logger.add (logsene, {token: process.env.LOGSENE_TOKEN, flushOnExit: true, type: 'test_logs'})
logger.info('last message before exit')
