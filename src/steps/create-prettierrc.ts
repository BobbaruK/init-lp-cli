import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";
import { prettierrcContent } from "../content/prettier.js";

export async function createPrettierrc(count: number, projectName: string) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create .prettierrc.mjs\n`);

  const rainbowText = chalkAnimation.rainbow("Creating .prettierrc.mjs...\n");

  const filePath = path.resolve(process.cwd(), projectName, ".prettierrc.mjs");
  const fileContent = prettierrcContent;

  try {
    // Creează folderul `src/` dacă nu există
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Scrie fișierul
    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`.prettierrc.mjs`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        chalk.red(`Error creating .prettierrc.mjs: ${error.message}`)
      );

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
