const index = require("./index"), client = new index.Client();
// aha... changed the test
(async() =>{
    let func = "client.nsfw.real.random() =>";
    try {
        let data = await client.nsfw.real.random();
        console.log(func, data);
    } catch (err) {
        console.log(func, err);
    }
    func = "client.nsfw.real.ass() =>";
    try {
        let data = await client.nsfw.real.ass();
        console.log(func, data);
    } catch (err) {
        console.log(func, err);
    }
    func = "client.nsfw.real.thighs() =>";
    try {
        let data = await client.nsfw.real.titty();
        console.log(func, data);
    } catch (err) {
        console.log(func, err);
    }
    func = "client.nsfw.real.panties() =>";
    try {
        let data = await client.nsfw.real.panties();
        console.log(func, data);
    } catch (err) {
        console.log(func, err);
    }
    func = "client.nsfw.hentai.ass() =>";
    try {
        let data = await client.nsfw.hentai.ass();
        console.log(func, data);
    } catch (err) {
        console.log(func, err);
    }
    func = "client.nsfw.hentai.titty() =>";
    try {
        let data = await client.nsfw.hentai.titty();
        console.log(func, data);
    } catch (err) {
        console.log(func, err);
    }
    func = "client.nsfw.hentai.panties() =>";
    try {
        let data = await client.nsfw.hentai.panties();
        console.log(func, data);
    } catch (err) {
        console.log(func, err);
    }
    func = "client.nsfw.hentai.feet() =>";
    try {
        let data = await client.nsfw.hentai.feet();
        console.log(func, data);
    } catch (err) {
        console.log(func, err);
    }
    func = "client.custom.do(\"https://google.com/\", /<meta.*?>/gm) =>";
    try {
        let data = await client.custom.do("https://google.com/", /<meta.*?>/gm);
        console.log(func, data);
    } catch (err) {
        console.log(func, err);
    }
})();
/** */
