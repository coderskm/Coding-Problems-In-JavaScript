function maxHandShakes(n) {
    let totalHandShakes = (n * (n - 1)) / 2;
    console.log("maximum handshakes possible between", n, "people is", totalHandShakes);
}

maxHandShakes(5);