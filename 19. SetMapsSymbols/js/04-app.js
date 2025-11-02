let key = {userId:1}
let key2 = {userId:2}
let weakmap = new WeakMap();

weakmap.set(key, 'Alex');
weakmap.has(key);
weakmap.get(key);
weakmap.delete(key);
weakmap.get(key);

weakmap.set(key2, 'Vicky');
weakmap.size;
key2 = undefined;
weakmap.get(key2);

