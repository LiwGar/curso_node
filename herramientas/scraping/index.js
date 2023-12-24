const puppeteer = require('puppeteer');


(async() => {
    //Nuestro Codigo
    console.log('Lanzamos navegador!');
    //const browser = await pupperteer.launch();
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/node.js');

    console.log('Cerramos navegador...');
    // browser.close();
    console.log('Navegador cerrado');
})();