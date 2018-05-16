const maze = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

let personTop = 180;
let personLeft = 0;
let y = 9;
let x = 0;
let personPosition = maze[y][x];
//console.log(maze[y - 1][x + 1]);
const board = document.getElementById("board");
for (let row of maze) {
    //console.log(row);
    for (let cells of row) {
        let cell = document.createElement("div");
        cell.dataset.cellnumb = cells
        cell.classList.add("boardcells");
        board.appendChild(cell);
        //let cellposition = maze
        //console.log(cells);
        switch (cells) {
            case "W":
                cell.classList.add("walls");
                break;
        }
    }
}


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch (keyName) {
        case ("ArrowUp"):
            if (maze[y - 1][x] === " ") {
                y -= 1;
                personTop = personTop - 20;
                document.getElementById("person").style.top = personTop + "px";
                // console.log(maze[y][x]);
                // console.log("position x:" + x + " " + "postion y:" + y);
            }
            break;
        case ("ArrowDown"):
            if (maze[y + 1][x] === " ") {
                y += 1;
                personTop = personTop + 20;
                document.getElementById("person").style.top = personTop + "px";
                // console.log(maze[y][x]);
                // console.log("position x:" + x + " " + "postion y:" + y);
            }
            break;
        case ("ArrowRight"):
            // console.log("ArrowRight");
            if (maze[y][x + 1] === "F") {
                x += 1;
                personLeft = personLeft + 20;
                document.getElementById("person").style.left = personLeft + "px";
                let win = document.getElementById("win")
                win.innerHTML = "You made it!";
            // console.log(maze[y][x]);
                // console.log("position x:" + x + " " + "postion y:" + y);
            }
            
            if (maze[y][x + 1] === " ") {
                x += 1;
                personLeft = personLeft + 20;
                document.getElementById("person").style.left = personLeft + "px";
                // console.log(maze[y][x]);
                // console.log("position x:" + x + " " + "postion y:" + y);
            }
            break;

        case ("ArrowLeft"):
            if (maze[y][x - 1] === " ") {
                //maze[y][x-1];
                personLeft = personLeft - 20;
                x -= 1;
                document.getElementById("person").style.left = personLeft + "px";
                // console.log(maze[y][x]);
                // console.log("postion x:" + x + " " + "postion y:" + y);
            }
            break;
    };
});
