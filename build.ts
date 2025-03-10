import fs from "fs";

const icons: { [key: string]: string } = {};
const lightIconsDir = fs.readdirSync("./icons/light");
const darkIconsDir = fs.readdirSync("./icons/dark");
const singleIconsDir = fs.readdirSync("./icons/single");

for (const icon of [...lightIconsDir, ...darkIconsDir, ...singleIconsDir]) {
  const iconType = icon.toLowerCase().includes("light")
    ? "light"
    : icon.toLowerCase().includes("dark")
    ? "dark"
    : "single";
  icons[icon.replace(".svg", "").toLowerCase()] = String(
    fs.readFileSync(`./icons/${iconType}/${icon}`)
  );
}

if (!fs.existsSync("./dist")) fs.mkdirSync("./dist");
fs.writeFileSync("./dist/icons.json", JSON.stringify(icons));
