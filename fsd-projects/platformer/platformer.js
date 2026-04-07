$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(925, 625, 300, 20, "grey")
    createPlatform(150, 625, 300, 20, "grey")
    createPlatform(550, 500, 300, 20, "grey")
    createPlatform(550, 240, 300, 20, "grey")
    createPlatform(925, 375, 300, 20, "grey")
    createPlatform(150, 375, 300, 20, "grey")


    // TODO 3 - Create Collectables
    createCollectable("diamond", 675, 350, 0.3, 0.5)
    createCollectable("diamond", 1050, 250, 0.3, 0.5)
    createCollectable("diamond", 275, 250, 0.3, 0.5)
    
    // TODO 4 - Create Cannons
    createCannon("top", 350, 1300)
    createCannon("right", 400, 1000)
    createCannon("left", 430, 1000)
    createCannon("top", 750, 1300)
    createCannon("top", 1130, 1300)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
