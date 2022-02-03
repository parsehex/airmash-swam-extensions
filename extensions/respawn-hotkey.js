!(function () {
	SWAM.on('keyup', (e) => {
		const { keyCode, shiftKey } = e;
		console.log(e);
		if (game?.gameType === null) return;
		if (keyCode !== 82) return;
		if (!shiftKey) return;

		const ship = Players.getMe().type; // works even if /spec ing

		Network.sendCommand('respawn', ship + '');
	});

	SWAM.registerExtension({
		name: 'Respawn Hotkey',
		id: 'respawn-hotkey',
		description: 'Quickly respawn with a hotkey (Shift-R).',
		author: 'parsehex',
		version: '1.0',
	});
})();
