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
    createPlatform(300,700,50,30);
    createPlatform(550,600,50,30,);
    createPlatform(300,500,50,30);
    createPlatform(550,400,50,30,"yellow");
    createPlatform(850,350,50,30,"yellow");
    createPlatform(1150,300,50,30,"yellow");
    createPlatform(1250,200,50,30,"yellow");
    createPlatform(1300,100,100,25,"yellow");
    createPlatform(0,400,50,30,"red");
    createPlatform(250,300,45,30,"red");
    createPlatform(550,200,75,20,"red");
    createPlatform(700,0,10,180,"red");
    createPlatform(250,200,44.9,10,"red");
    
    // TODO 3 - Create Collectables
    createCollectable("diamond",1300,50,0,0);
    createCollectable("steve",600,150,0,0);
    createCollectable("grace");
    // TODO 4 - Create Cannons
  //createCannon("right",700,0);
  createCannon("right",800,0);
  createCannon("top",600,1000);
  createCannon("right",500,1200);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
