'use strict';

/**
 * Load environment variables
 */

require('dotenv').config();

/**
 * Sub-tasks
 */

require('./gulp/tasks/browser-sync');
require('./gulp/tasks/clean');
require('./gulp/tasks/copy');
require('./gulp/tasks/js');
require('./gulp/tasks/pug');
require('./gulp/tasks/sass');
require('./gulp/tasks/watch');

/**
 * Main tasks
 */

require('./gulp/tasks/build');
require('./gulp/tasks/default');
