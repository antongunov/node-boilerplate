'use strict';

/**
 * Load environment variables
 */

require('dotenv').config();

/**
 * Sub-tasks
 */

require('./gulp/tasks/clean');
require('./gulp/tasks/pug');
require('./gulp/tasks/copy');
require('./gulp/tasks/sass');
require('./gulp/tasks/watch');
require('./gulp/tasks/browser-sync');

/**
 * Main tasks
 */

require('./gulp/tasks/build');
require('./gulp/tasks/default');
