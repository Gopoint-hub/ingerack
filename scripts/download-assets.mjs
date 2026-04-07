import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const assets = [
  // Logo
  { url: "https://ingerack.cl/wp-content/uploads/2019/10/Asset-3.png", dest: "public/images/logo.png" },
  // Hero
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-garantia.webp", dest: "public/images/ingerack-garantia.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Flag_of_Chile.svg", dest: "public/images/flag-chile.svg" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/icon-check.svg", dest: "public/images/icon-check.svg" },
  // Client logos
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-clientes-1.webp", dest: "public/images/clients/client-1.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-clientes-2.webp", dest: "public/images/clients/client-2.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-clientes-3.webp", dest: "public/images/clients/client-3.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-clientes-4.webp", dest: "public/images/clients/client-4.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-clientes-5.webp", dest: "public/images/clients/client-5.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-clientes-6.webp", dest: "public/images/clients/client-6.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-clientes-7.webp", dest: "public/images/clients/client-7.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-clientes-8.webp", dest: "public/images/clients/client-8.webp" },
  // Products/Services images
  { url: "https://ingerack.cl/wp-content/uploads/2025/06/angulo-ranurado-niveles-1.webp", dest: "public/images/products/angulo-ranurado.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2024/10/Ingerack-rack-selectivo.webp", dest: "public/images/products/rack-selectivo.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2024/10/Ingerack-rack-selectivo-frontal.webp", dest: "public/images/products/rack-selectivo-frontal.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2024/10/almacenes-de-picking-de-Ingerack.webp", dest: "public/images/products/almacenes-picking.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2024/10/racks-drive-in-de-Ingerack.webp", dest: "public/images/products/rack-drive-in.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2024/09/frente-del-sistema-de-almacenaje-rack-drive-in-1.webp", dest: "public/images/products/rack-drive-in-front-1.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2024/09/frente-del-sistema-de-almacenaje-rack-drive-in.webp", dest: "public/images/products/rack-drive-in-front.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2019/10/Racks-Dinamicos-FIFO.jpg", dest: "public/images/products/rack-dinamico-fifo.jpg" },
  // Project gallery
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-1.webp", dest: "public/images/projects/proyecto-1.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-2.webp", dest: "public/images/projects/proyecto-2.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-3.webp", dest: "public/images/projects/proyecto-3.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-4.webp", dest: "public/images/projects/proyecto-4.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-5.webp", dest: "public/images/projects/proyecto-5.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-6.webp", dest: "public/images/projects/proyecto-6.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-7.webp", dest: "public/images/projects/proyecto-7.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-8.webp", dest: "public/images/projects/proyecto-8.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-9.webp", dest: "public/images/projects/proyecto-9.webp" },
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/Ingerack-proyecto-10.webp", dest: "public/images/projects/proyecto-10.webp" },
  // Footer icon
  { url: "https://ingerack.cl/wp-content/uploads/2025/04/ingerack-ico.webp", dest: "public/images/ingerack-ico.webp" },
];

async function download(url, dest) {
  const fullPath = join(root, dest);
  const dir = dirname(fullPath);
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(fullPath, buf);
    console.log(`✓ ${dest} (${(buf.length / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.error(`✗ ${dest}: ${e.message}`);
  }
}

async function main() {
  console.log(`Downloading ${assets.length} assets...`);
  const batches = [];
  for (let i = 0; i < assets.length; i += 4) {
    batches.push(assets.slice(i, i + 4));
  }
  for (const batch of batches) {
    await Promise.all(batch.map(a => download(a.url, a.dest)));
  }
  console.log("Done!");
}

main();
