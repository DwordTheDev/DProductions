const Router = require("express").Router();
const fs = require("fs");
const { join } = require("path");


Router.get("/get/:hwid", (req, res, next) => {

    hwids = fs.readFileSync(join(process.cwd(), "hwids.txt"), "utf8").split("\n");

    if (!req.params["hwid"]) return res.sendFile(join(process.cwd(), "index"));

    if (!hwids.includes(req.params["hwid"])) return res.send({ success: false });

    res.send({ success: true });

});


Router.get("/hwids", (req, res, next) => {
    hwid = fs.readFileSync(join(process.cwd(), "hwids.txt"), "utf8");

   

    res.send(hwid);
});


Router.post("/removeHwid/:hwid", (req, res, next) => {

    hwids = fs.readFileSync(join(process.cwd(), "hwids.txt"), "utf8").split("\n");

    if (!hwids.includes(req.params["hwid"])) return res.send({ success: false });

    newArray = hwids.filter(item => item !== req.params["hwid"]);

    fs.writeFileSync(join(process.cwd(), "hwids.txt"), newArray.join("\n"));

    res.send({ success: true });
});


Router.post("/addHwid/:hwid", (req, res, next) => {

    hwids = fs.readFileSync(join(process.cwd(), "hwids.txt"), "utf8").split("\n");

    if (hwids.includes(req.params["hwid"])) return res.send({ success: false });

    fs.appendFileSync(join(process.cwd(), "hwids.txt"), `${req.params["hwid"]}\n`);

    res.send({ success: true });
})

module.exports = Router;