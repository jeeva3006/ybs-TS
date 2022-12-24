
export const success = (txt: String) => console.log('\x1b[32m%s\x1b[0m', txt);
export const danger = (txt: String) => console.log('\x1b[31m%s\x1b[0m', txt);
export const info = (txt: String) => console.log('\x1b[36m%s\x1b[0m', txt);
export const warning = (txt: String) => console.log('\x1b[33m%s\x1b[0m', txt);