/* globals gauge*/
"use strict";
const { openBrowser, write, closeBrowser, click, goto, press, text, focus, into, textBox, toLeftOf, $ } = require('taiko');
const assert = require("assert");

/**
* Open webdriver before test fullscreen
*/
beforeSuite(async () => {
    await openBrowser({ headless: false, args: ['--start-fullscreen'] })

});

/**
* Close webdriver after finish test
*/
afterSuite(async () => {
    await closeBrowser();
});
/**
 * Go to uri
 * @param  {} url
 */
step("Goto <url>", async (url) => {
    await goto(url);
    
});
/**
 * Check if page contains text
 * @param  {} t
 */
step("Page contains <t>", async (t) => {
    assert.ok(await (text(t).exists()));
     
})


/**
 * Click element 
 * @param  {} el
 * @param  {} by
 */
step("Click to <el> with <by>", async (el, by) => {
    console.log("element: " + el + " selector :" + by)
    switch (by) {
        case "id":
        case "cssSelector":
            await click($('#' + el));
             
            break;
        case "css":
            await click($('.' + el));
             
            break;
        case "link":
            await click(el);
            
            break;
        default:
            console.log("Not a valid selector");
            break;
    }
})
/**
 * type text to element
 * @param  {} text
 * @param  {} element
 */
step("Write <text> to <element> with id", async (text, element) => {
    await write(text, into(textBox({ id: element })));

})






