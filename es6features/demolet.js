function doWork(x) {
    let y = 10;
    if (x) {
        console.log("y = " + y);
    }
    console.log("y = " + y);
}

doWork(true);
doWork(false);