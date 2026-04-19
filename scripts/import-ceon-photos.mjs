import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { homedir } from "node:os";

const SRC_DIR = resolve(homedir(), "Downloads", "New ceon electric photos");
const OUT_DIR = resolve(import.meta.dirname, "..", "public", "images", "projects");
const JPEG_QUALITY = 82;

const jobs = [
  { src: "20241007_080857.JPG", out: "multi-meter-service-before.jpg", cropBottomPx: 240 },
  { src: "20241116_120430.JPG", out: "hermitage-10-meter-stack.jpg", cropBottomPx: 240 },
  { src: "20250613_163846.JPG", out: "multi-unit-service-exterior.jpg", cropBottomPx: 240 },
  { src: "Screenshot_20250517_185015_Facebook.JPG", out: "commercial-disconnect-bank.jpg", cropBottomPx: 0 },
  { srcAbs: resolve(homedir(), "Downloads", "ChatGPT Image Apr 18, 2026, 06_59_08 PM.png"), out: "multi-meter-service-after.jpg", cropBottomPx: 170 },
];

await mkdir(OUT_DIR, { recursive: true });

for (const job of jobs) {
  const srcPath = job.srcAbs ?? resolve(SRC_DIR, job.src);
  const outPath = resolve(OUT_DIR, job.out);
  const meta = await sharp(srcPath).rotate().metadata();

  let img = sharp(srcPath).rotate();
  if (job.cropBottomPx > 0) {
    img = img.extract({
      left: 0,
      top: 0,
      width: meta.width,
      height: meta.height - job.cropBottomPx,
    });
  }
  await img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(outPath);

  const outMeta = await sharp(outPath).metadata();
  const label = job.src ?? job.srcAbs;
  console.log(`${label} (${meta.width}x${meta.height}) -> ${job.out} (${outMeta.width}x${outMeta.height})`);
}
