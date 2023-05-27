
function shower() {
    // Set the value of Math.Radian
    Math.Radian = Math.PI * 2;
    
    // Initialize all variables we use in the code
    var sparkCount = 100,
        sparkSpeed = 3,
        sparkTop = 0,
        sparkLeft = 10,
        sparkSize = 3,
        sparkSizeDecay = 0.98,
        sparkGravity = 1.02,
    
    angle, distance,
    firstSpark = null,
    lastSpark, spark,

    body = document.body,
    documentElement = document.documentElement,

    leafCount = 7,

    currentColorIndex = 1, currentColor,
    colors = ['rgba(255,255,255,1)','rgba(255,255,170,1)','rgba(0,191,255,1)','rgba(0,255,0,1)','rgba(255,99,71,1)'],
    colorsTransparent = ['rgba(255,255,255,0.02)','rgba(255,255,170,0.02)','rgba(0,191,255,0.02)','rgba(0,255,0,0.02)','rgba(255,99,71,0.02)'],
    colorCount = colors.length,

    // Get the canvas element and its context
    canvas = document.getElementById("hanabi"),
    context, canvasWidth, canvasHeight,

    // Set the canvas width and height to match the document dimensions
    canvasWidth = canvas.width = Math.max(body.clientWidth, body.scrollWidth, documentElement.scrollWidth, documentElement.clientWidth);
    canvasHeight = canvas.height = Math.max(body.clientHeight, body.scrollHeight, documentElement.scrollHeight, documentElement.clientHeight);
    context = canvas.getContext("2d");

    // Set the initial positions
    sparkTop = 120;
    sparkLeft = canvasWidth / 2;

    var span = 100,
        step = -2,
        line = Math.floor(canvasWidth / span),
        maxLength;

    // Determine the maximum length based on the canvas height
    maxLength = canvasHeight > 400 ? 400 : canvasHeight;

    // Select a random color
    currentColorIndex = Math.floor(Math.random() * colorCount);
    currentColor = colors[currentColorIndex];
    currentColorTransparent = colorsTransparent[currentColorIndex];

    // Set up the requestAnimationFrame function
    requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame  ||
        window.mozRequestAnimationFrame     ||
        window.oRequestAnimationFrame       ||
        window.msRequestAnimationFrame      ||
        function(callback, element) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    // Spark object constructor
    function Spark() {
        this.initialize.apply(this, arguments);
    }

    Spark.prototype = {
        initialize: function(x, y) {
            this.x = x;
            this.y = y;
        },

        x: 0, // x-coordinate
        y: 0, // y-coordinate
        vx: 0, // x velocity
        vy: 0, // y velocity
        size: 0,
        next: null
    };

    // Generate sparks
    for (j = 0; j < 4; j++) {
        sparkLeft += Math.random() * 300 - 150;
        sparkTop += Math.random() * 100 - 50;

        for (i = 0; i < sparkCount; i++) {
            angle = Math.Radian / 1.5 * Math.random() - 0.5;

            distance = Math.random() * sparkSpeed + sparkSpeed;
            spark = new Spark(sparkLeft, sparkTop);

            spark.vx = Math.cos(angle) * distance;
            spark.vy = Math.sin(angle) * distance;
            spark.size = sparkSize;

            if (firstSpark === null) {
                firstSpark = lastSpark = spark;
            } else {
                lastSpark.next = spark;
                lastSpark = spark;
            }
        }
    }
    
    // Set up the canvas styles
    context.fillStyle = "rgba(0,0,0,0.1)";
    context.lineWidth = 1;
    context.strokeStyle = "rgba(255,255,255,1)";

    // Animation loop
    function animationLoop() {
        var currentSpark = firstSpark;
        context.fillStyle = "rgba(0,0,0,0.04)";
        context.fillRect(0,0,canvasWidth,canvasHeight);

        do {
            if (currentSpark.size < 0.1) {
                continue;
            }
            context.lineWidth = currentSpark.size;
            context.strokeStyle = currentColor;
            context.beginPath();
            context.moveTo(currentSpark.x, currentSpark.y);

            currentSpark.x += currentSpark.vx;
            currentSpark.y = (currentSpark.y * sparkGravity + currentSpark.vy);

            context.lineTo(currentSpark.x, currentSpark.y);
            context.stroke();

            currentSpark.size *= sparkSizeDecay;
            if (currentSpark.x < 0 || currentSpark.x > canvasWidth || currentSpark.y < 0 || currentSpark.y > maxLength) continue;

        } while(currentSpark = currentSpark.next);

        requestAnimationFrame(animationLoop);
    }

    // Set interval to change colors every second
    setInterval(function() {
        currentColorIndex = Math.floor(Math.random() * colorCount);
        currentColor = colors[currentColorIndex];
    }, 1000);

    // Set interval to increment step every 300 milliseconds
    setInterval(function() {
        if (step < line) step++;
    })

    // Start the animation loop
    animationLoop();
}

shower();