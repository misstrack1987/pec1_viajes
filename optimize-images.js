const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = path.join(__dirname, "src", "images-original");
const outputFolder = path.join(__dirname, "src", "images");

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

const files = fs.readdirSync(inputFolder);

files.forEach((file) => {
  const inputPath = path.join(inputFolder, file);

  if (!/\.(jpg|jpeg|png)$/i.test(file)) return;

  const name = path.parse(file).name;

  const sizes = [400, 800, 1200];

  sizes.forEach((size) => {
    sharp(inputPath)
      .resize(size)
      .webp({ quality: 75 })
      .toFile(path.join(outputFolder, `${name}-${size}.webp`))
      .then(() => console.log(`Optimizada: ${name}-${size}.webp`))
      .catch((err) => console.error(`Error con ${file}:`, err));
  });
});
