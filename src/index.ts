import { useState } from './utils/reactive-hooks/hooks.js';

function MyComponent() {
    const [getName, setName] = useState('Kazbek');

    setName('Nastya');

    return `<h1>${getName()}</h1>`;
}

console.log(MyComponent());

