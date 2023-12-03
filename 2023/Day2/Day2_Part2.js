const fs = require("fs");

function cubeCondrum2() {

    const input = fs.readFileSync('./2023/Day2/Day2.txt', 'utf8');

    const lines = input.toString().split("\n");

    let sum = 0;

    lines.forEach(line => {
        const [id, gameLine] = line.split(":");
        gameId = parseInt(id.slice(5));
        const games = gameLine.trimStart().split(";");
        let redMax = 0, blueMax = 0, greenMax = 0;
        games.forEach(game => {
            const cubes = game.trimStart().split(",");
            cubes.forEach(cube => {
                const [num, color] = cube.trim().split(" ");
                switch (color.toLowerCase()) {
                    case "green": 
                        greenMax = Math.max(greenMax, parseInt(num));
                        break;
                    case "blue":
                        blueMax = Math.max(blueMax, parseInt(num));
                        break;
                    case "red":
                        redMax = Math.max(redMax, parseInt(num));
                        break;
                    default:
                        break;
                }
            });
        });
        console.log(redMax + " " + blueMax + " " + greenMax);
        sum += (redMax * blueMax * greenMax);
    });
    return sum;
}

console.log(cubeCondrum2());