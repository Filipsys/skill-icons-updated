import fs from "fs";

const icons = {};
const iconsDir = fs.readdirSync("./icons");

for (const icon of iconsDir) {
  const name = icon.replace(".svg", "").toLowerCase();
  icons[name] = String(fs.readFileSync(`./icons/${icon}`));
}

if (!fs.existsSync("./dist")) fs.mkdirSync("./dist");
fs.writeFileSync("./dist/icons.json", JSON.stringify(icons));
