$(function () {
    var red = [2, 130, 73];
    var orange = [25, 11, 50];
    var green = [135, 10, 60];
    var blue = [206, 17, 45];
    var purple = [25, 55, 66];

    var myName = "Desiree";
    var letterColors = [red, orange, green, blue, purple];
    var bubbleShape = "square";

    drawName(myName, letterColors);
    bounceName();
    bounceBubbles();
});