import { statuses } from './examples/statuses.js';
import { printPerformance } from './utils/performance.js';
import { findCollectionIntersection } from './utils/collections.js';

printPerformance('statuses', () => findCollectionIntersection(statuses, 'description'));
