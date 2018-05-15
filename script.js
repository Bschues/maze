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

const board = document.getElementById("board");
for (let row of maze) {
    //console.log(row);
    for (let cells of row) {
        let cell = document.createElement("div");
        cell.dataset.cellnumb = cells
        cell.classList.add("boardcells");
        board.appendChild(cell);
        let cellposition = maze
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
    if (keyName == "ArrowDown") {
        // console.log("ArrowDown");
        personTop = personTop + 20;
        y = y - 1;
        document.getElementById("person").style.top = personTop + "px";
        console.log("position x:" + x + " " + "postion y:" + y);
    };
    if (keyName == "ArrowUp") {
        // console.log("ArrowUp");
        personTop = personTop - 20;
        y = y + 1;
        document.getElementById("person").style.top = personTop + "px";
        console.log("position x:" + x + " " + "postion y:" + y);
    };
    if (keyName == "ArrowRight") {
        // console.log("ArrowRight");
        personLeft = personLeft + 20;
        x = x + 1;
        document.getElementById("person").style.left = personLeft + "px";
        console.log("position x:" + x + " " + "postion y:" + y);
    };
    if (keyName == "ArrowLeft") {
        // console.log("ArrowLeft");
        personLeft = personLeft - 20;
        x = x - 1;
        document.getElementById("person").style.left = personLeft + "px";
        console.log("postion x:" + x + " " + "postion y:" + y);
    };
});