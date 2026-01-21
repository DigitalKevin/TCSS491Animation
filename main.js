const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./background.png");
ASSET_MANAGER.queueDownload("./IDLE.png");
ASSET_MANAGER.queueDownload("./RUN.png");
ASSET_MANAGER.queueDownload("./ATTACK1.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);

	const background = new Background(gameEngine, ASSET_MANAGER.getAsset("./background.png"));

	const character = new Character(gameEngine);
	gameEngine.addEntity(character);
	gameEngine.addEntity(background);

	document.getElementById("idleBtn").onclick = () => {
		character.setState("IDLE");
	};

	document.getElementById("runBtn").onclick = () => {
		character.setState("RUN");
	};
	
	document.getElementById("attackBtn").onclick = () => {
		character.setState("ATTACK");
	};

	gameEngine.start();
});
