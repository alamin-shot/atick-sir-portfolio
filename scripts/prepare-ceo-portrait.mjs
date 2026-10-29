// Crops the CEO's cut-out photo to head and shoulders and saves a contrast-boosted
// greyscale copy (alpha kept) that the hero samples into particles.
// Run after swapping the photo: node scripts/prepare-ceo-portrait.mjs
import sharp from "sharp";

const SOURCE = "public/images/chairman/ceo-source.png";
const OUTPUT = "public/images/chairman/ceo-particles.png";
const CROP = { left: 185, top: 42, width: 260, height: 212 };

const cropped = sharp(SOURCE).extract(CROP);
const alpha = await cropped.clone().extractChannel("alpha").raw().toBuffer();
const grey = await cropped
  .clone()
  .removeAlpha()
  .greyscale()
  .clahe({ width: 32, height: 32, maxSlope: 3 })
  .normalise()
  .sharpen({ sigma: 0.8 })
  .extractChannel(0)
  .raw()
  .toBuffer();

const pixels = Buffer.alloc(alpha.length * 2);
for (let i = 0; i < alpha.length; i++) {
  pixels[i * 2] = grey[i];
  pixels[i * 2 + 1] = alpha[i];
}

await sharp(pixels, {
  raw: { width: CROP.width, height: CROP.height, channels: 2 },
})
  .png()
  .toFile(OUTPUT);

console.log(`Saved ${OUTPUT}`);
