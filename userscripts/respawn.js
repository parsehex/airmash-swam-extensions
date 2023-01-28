// ==UserScript==
// @name         AIRMASH: Respawn Hotkey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://airmash.online/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=airmash.online
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	window.addEventListener('keyup', (e) => {
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

		// ship = Players.getMe().type; // works even if /spec ing

		Network.sendCommand('respawn', ship + '');
		e.stopPropagation();
	});
})();
