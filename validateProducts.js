/**
 * validateProducts.js
 *
 * Usage:
 *    node validateProducts.js
 *
 * Make sure your folder structure is:
 * public/products/
 *   index.json           <-- overall product listing
 *   brands.json          <-- brand listing
 *   brandA/
 *     product1/
 *       index.json
 *     product2/
 *       index.json
 *   brandB/
 *     productX/
 *       index.json
 *   ...
 */

import fs from "fs";
import path from "path";

// -------------------------------------------------------------
// 1) Basic Config
// -------------------------------------------------------------
const baseDir = "./public/products";
const indexFile = path.join(baseDir, "index.json");
const brandsFile = path.join(baseDir, "brands.json");

// readFile helper
function safeReadJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}

// Load index.json (the master product listing) + brands.json
const productIndexData = safeReadJSON(indexFile) || [];
const brandsData = safeReadJSON(brandsFile) || [];
const validBrandSlugs = new Set(brandsData.map((b) => b.slug));

// -------------------------------------------------------------
// 2) We want to do two extra checks
// -------------------------------------------------------------
const extraErrors = [];

// A) For each entry in index.json, check brand is in brands.json, check folder is present
for (const { brand, id } of productIndexData) {
  // A1) If brand from index.json is missing in brands.json
  if (!validBrandSlugs.has(brand)) {
    extraErrors.push(
      `❌ Brand '${brand}' appears in index.json but is not listed in brands.json`
    );
  }

  // A2) If product folder missing or has no index.json
  const productFilePath = path.join(baseDir, brand, id, "index.json");
  if (!fs.existsSync(productFilePath)) {
    extraErrors.push(
      `❌ Product '${brand}/${id}' is missing its own index.json file`
    );
  }
}

// -------------------------------------------------------------
// 3) Existing Validation: Walk + validate each found product file
// -------------------------------------------------------------
function isValidPrice(val) {
  return typeof val === "number" && !isNaN(val);
}

function validateProductFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const product = JSON.parse(content);
    const issues = [];

    // Example checks from your original script
    if (!isValidPrice(product.price)) {
      issues.push(`⚠️ Invalid price: ${product.price}`);
    }
    if (!Array.isArray(product.colour)) {
      issues.push("⚠️ Colour is not an array");
    }
    if (!product.images || !Array.isArray(product.images)) {
      issues.push("⚠️ Missing or invalid images");
    }
    if (!product.brand || typeof product.brand !== "string") {
      issues.push("⚠️ Missing or invalid brand");
    }
    if (!product.id || typeof product.id !== "string") {
      issues.push("⚠️ Missing or invalid id");
    }

    return issues.length ? { filePath, issues } : null;
  } catch (err) {
    return { filePath, issues: [`❌ JSON parsing error: ${err.message}`] };
  }
}

function walkDir(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recurse
      results.push(...walkDir(fullPath));
    } else if (file === "index.json" && fullPath !== indexFile && fullPath !== brandsFile) {
      // Only push index.json that are actual product files,
      // skipping the root-level index.json & brands.json
      results.push(fullPath);
    }
  }
  return results;
}

const productFiles = walkDir(baseDir);
const validationErrors = productFiles
  .map(validateProductFile)
  .filter((res) => res !== null);

// -------------------------------------------------------------
// 4) Display results
// -------------------------------------------------------------
let hasErrors = false;

if (extraErrors.length > 0) {
  hasErrors = true;
  console.log("🚨 Additional Checks:\n");
  extraErrors.forEach((e) => console.log("  -", e));
  console.log("");
}

if (validationErrors.length > 0) {
  hasErrors = true;
  console.log("🚨 Product File Validation:\n");
  for (const { filePath, issues } of validationErrors) {
    console.log(`📄 ${filePath}`);
    for (const issue of issues) {
      console.log(`  - ${issue}`);
    }
    console.log("");
  }
}

if (!hasErrors) {
  console.log("✅ All checks passed!");
}
