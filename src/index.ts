import { createState } from './utils/reactive-proxy/state-creator.js';

const state = createState({
    count: 1,
    name: 'Kazbek',
});

state.count = 4;
