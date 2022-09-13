export default (code, handler) => (e) => e.code === code && handler();
