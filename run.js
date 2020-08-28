const run = {
    sleep: (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
}

exports.run = run;