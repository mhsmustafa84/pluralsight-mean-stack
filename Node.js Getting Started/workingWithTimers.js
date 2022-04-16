const oneFunction = (delay) => {
    console.log('hello world after ' + delay + ' seconds');
};

setTimeout(oneFunction, 4000, 4);
setTimeout(oneFunction, 8000, 8);

setInterval(oneFunction, 2000, 4);
