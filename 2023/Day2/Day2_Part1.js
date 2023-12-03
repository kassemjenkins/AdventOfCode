const fs = require("fs");

function cubeCondrum(red, blue, green) {

    const input = fs.readFileSync('./2023/Day2/Day2.txt', 'utf8');

    const lines = input.toString().split("\n");

    let sum = 0;

    lines.forEach(line => {
        const [id, gameLine] = line.split(":");
        const gameId = parseInt(id.slice(5));
        const games = gameLine.trimStart().split(";");
        let possible = true;
        games.forEach(game => {
            let redSum = 0, blueSum = 0, greenSum = 0;
            const cubes = game.trimStart().split(",");
            cubes.forEach(cube => {
                const [num, color] = cube.trim().split(" ");
                switch (color.toLowerCase()) {
                    case "green": 
                        greenSum += parseInt(num);
                        break;
                    case "blue":
                        blueSum += parseInt(num);
                        break;
                    case "red":
                        redSum += parseInt(num);
                        break;
                    default:
                        break;
                }
            });
            if (redSum > red || blueSum > blue || greenSum > green) {
                possible = false;
            }
        });
        if (possible) {
            sum += Number(gameId);
        }
    });
    return sum;
}
let red = 12;
let blue = 14;
let green = 13;

console.log(cubeCondrum(red, blue, green));