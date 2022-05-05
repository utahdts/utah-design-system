export default (key, handler) => (e) => e.code === key && handler();
