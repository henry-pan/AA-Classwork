// console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");

window.addEventListener ("DOMContentLoaded", function () {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext ("2d");
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });
    mo.draw(ctx);
});

window.MovingObject = MovingObject;