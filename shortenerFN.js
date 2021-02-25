const linkStart = "https://bit.ly/";


console.log(
    linkStart.concat(
        Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 4),
        "/"
    )
);