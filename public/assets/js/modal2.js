
async function main() {
 console.log("ok");
}

document.addEventListener('readystatechange', () => {
 const elem = (window.addEventListener) ? window : document;
 elem.addEventListener('load', main, false);
});
