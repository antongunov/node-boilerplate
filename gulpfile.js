'use strict';

/**
 * Sub-tasks
 */

require('./gulp/tasks/clean');
require('./gulp/tasks/pug');
require('./gulp/tasks/static');
require('./gulp/tasks/sass');
require('./gulp/tasks/watch');

/**
 * Main tasks
 */

require('./gulp/tasks/build');
require('./gulp/tasks/default');
