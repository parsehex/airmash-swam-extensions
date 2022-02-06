!(function () {
	SWAM.on('keyup', (e) => {
		const { keyCode, shiftKey } = e;
		// console.log(e);
		if (game?.gameType === null) return;
		if (!shiftKey) return;

		let ship = '';
		if (keyCode === 49) ship = '1';
		else if (keyCode === 50) ship = '2';
		else if (keyCode === 51) ship = '3';
		else if (keyCode === 52) ship = '4';
		else if (keyCode === 53) ship = '5';
		else return;

		// const ship = Players.getMe().type; // works even if /spec ing

		Network.sendCommand('respawn', ship + '');
	});

	SWAM.registerExtension({
		name: 'Hotkeys',
		id: 'hotkeys',
		description: 'Add hotkeys.',
		author: 'parsehex',
		version: '1.0',
	});
})();
