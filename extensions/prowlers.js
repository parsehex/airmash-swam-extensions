!(function () {
	function init() {
		console.log('game loaded');
		const html = `
      <div id="prowlers"></div>
    `;
		$('body').append(html);

		const style = `
      <style>
        #prowlers {
          pointer-events: none;
          position: fixed;
          top: 10%;
          border-style: solid;
          width: 10vw;
          box-sizing: border-box;
          opacity: .75;
					color: maroon;
        }
      </style>
    `;
		$('head').append(style);
	}
	function update() {
		const players = Object.keys(Players.getIDs()).map((id) => Players.get(id));
		players.splice(0, 1); // remove Server
		const me = Players.getMe();
		if (!me) return;

		let foundProws = 0;
		for (const p of players) {
			if (!p.id) continue;
			if (p.id === me.id) continue;
			if (p.team === me.team) continue;
			if (p.type === 5) foundProws++;
		}

		if (foundProws > 0) show(foundProws);
		else hide();
	}

	function show(count) {
		const el = $('#prowlers');
		el.text(count + ' enemy prowlers');
		el.show();
	}
	function hide() {
		$('#prowlers').hide();
	}

	SWAM.on('gamePrep', update);
	SWAM.on('playerAdded', update);
	SWAM.on('gameLoaded', init);

	SWAM.registerExtension({
		name: 'Prowlers Playing',
		id: 'prowlers-playing',
		description:
			"Simply informs you whether you're playing against any prowlers.",
		author: 'parsehex',
		version: '1.0',
	});
})();
