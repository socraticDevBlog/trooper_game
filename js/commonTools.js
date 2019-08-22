    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript (2019-08-19)
    //
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function drawCircle(context, x, y, radius, innerColor) {
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, true);
        context.fillStyle = innerColor;
        context.fill();
    }

    function drawRectangle(context, x, y, width, height, fillColor) {
        context.beginPath();
        context.lineWidth = "6";
        context.fillStyle = fillColor;
        context.rect(x, y, width, height); 
        context.fill();
    }

    // return number of items in a dictionary
    //
    function dictLength(dict) {
        return Object.keys(dict).length;
    }

    // printing text for this game
    //
    function textToCanvas(context, text, xPos, yPos, color, font) {
        context.font= font;
        context.fillStyle = color;
        context.fillText(text, xPos, yPos);
    }
