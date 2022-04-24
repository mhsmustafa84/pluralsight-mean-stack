process.stdin.on('readable', () => {
    const data = process.stdin.read();
    if (data) {
        process.stdout.write(data);
    }
});
