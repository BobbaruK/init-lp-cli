import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";

export async function editTSConfig(count: number, projectName: string) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Editing tsconfig.json\n`);

  const rainbowText = chalkAnimation.rainbow("Editing tsconfig.json...\n");

  const configPath = path.join(process.cwd(), projectName, "tsconfig.json");

  try {
    let configContent = fs.readFileSync(configPath, "utf8");

    // Adaugă/modifică configurația dorită
    const newConfig = configContent.replace(
      `"jsxImportSource": "react"`,
      `"baseUrl": ".",\n\t\t"paths": {\n\t\t\t"@/*": ["./src/*"]\n\t\t}`
    );

    fs.writeFileSync(configPath, newConfig, "utf8");

    await sleep(1000);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`tsconfig.json`)} ${chalk.green(
        `has been updated successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        chalk.red(`Error updating tsconfig.json: ${error.message}`)
      );

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
