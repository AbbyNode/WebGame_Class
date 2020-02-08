
// IIFE -- Immediately invoked function expression

let game = (function() {
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;

    let currentScene: objects.Scene;
    let currentSceneState: scenes.State;

    // let helloLabel:objects.Label;
    // let byeLabel:objects.Label;
    // let clickButton:createjs.Bitmap;

    // let title:objects.Label;
    // let startButton:objects.Button;
    // let player:objects.Player;

    function start():void {
        // console.log(`%c Game Started`, "color: teal; font-size:20px;");
        canvas = document.getElementsByTagName('canvas')[0];
        stage = new createjs.Stage(canvas);

        config.Game.STAGE = stage;

        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on('tick', update);

        stage.enableMouseOver(20);

        // Switch scene?
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.START;
    }

    function update():void {
        // console.log("ok");
        // helloLabel.rotation += 5;

        stage.update();

        if (currentSceneState != config.Game.SCENE_STATE) {
            initScene();
        }

        // startScene.Update();
    }

    function initScene():void {
        // console.log(`%c Main Started`, "color: teal; font-size:16px;");
        // this.helloWorld();
        // console.log(player.regX);

        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        switch(config.Game.SCENE_STATE) {
            case scenes.State.START:
                currentScene = new scenes.Start();
                break;
            case scenes.State.PLAY:
                currentScene = new scenes.Play();
                break;
            case scenes.State.END:
                // currentScene = new scenes.Play();
                break;
        }

        // startScene = new scenes.Start();

        // Add scene to stage and setup current scene
        stage.addChild(currentScene);
        currentSceneState = config.Game.SCENE_STATE;
    }

    function helloWorld():void {
        // helloLabel = new createjs.Text("Hello World", "40px Consolas", "#000000");
        // // sets pivot point to center of label
        // helloLabel.regX = helloLabel.getBounds().width * 0.5;
        // helloLabel.regY = helloLabel.getMeasuredLineHeight() * 0.5;
        // helloLabel.x = 320;
        // helloLabel.y = 240;

        // helloLabel = new objects.Label("Hello!", "40px", "Consolas", "#000000", 320, 240, true);
        // stage.addChild(helloLabel);

        // byeLabel = new objects.Label("Bye!", "40px", "Consolas", "#000000", 320, 400, true);
        // stage.addChild(byeLabel);

        // clickButton = new createjs.Bitmap("./Assets/images/clickButton.png");
        // clickButton.regX = clickButton.getBounds().width * 0.5;
        // clickButton.regY = clickButton.getBounds().height * 0.5;
        // clickButton.x = 500;
        // clickButton.y = 400;

        // clickButton = new objects.Button("./Assets/images/clickButton.png", 500, 400, true);

        // stage.addChild(clickButton);
        
        // clickButton.on("click", function() {
        //     helloLabel.text = "Clicked!";
        // });
        // clickButton.on("mouseover", function() {
        //     clickButton.alpha = 0.7;
        // });
        // clickButton.on("mouseout", function() {
        //     clickButton.alpha = 1;
        // });
    }

    window.addEventListener("load", start);
})();
