export const antiBind = (fn, ...args) => e => fn(e, ...args);

export default { antiBind };
