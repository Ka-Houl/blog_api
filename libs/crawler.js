const pt = require('puppeteer');

module.exports = async function (options) {
	try {
		const bs = await pt.launch({
			//headless: false,
			args: ['--no-sandbox', '--disable-setuid-sandbox'], //沙盒 沙箱
 			handleSIGINT: false,
			ignoreDefaultArgs: ['--disable-extensions'],
			executablePath: '/root/.chromium-browser-snapshots/linux-722234/chrome-linux/chrome'
		}),
			pg = await bs.newPage(),
			url = options.url;

		await pg.goto(url, {
			waitUtil: 'networkidle2',
			timeout: 0
		});

		let result = await pg.evaluate(options.callback);

		if (result && options.field === 'course') {
			await pg.waitForSelector('.page-btn.page-last');
			await pg.click('.page-btn.page-last');
			await pg.waitFor(2000);
			const res = await pg.evaluate(options.callback);
			await pg.waitFor(2000);
			for (var i = 0; i < res.length; i++) {
				await result.push(res[i]);
			}
		}

		await bs.close();

		process.send(result);

		setTimeout(() => {
			process.exit(0);
		}, 1000);
	} catch (err) {
    console.log(err);
	}
}