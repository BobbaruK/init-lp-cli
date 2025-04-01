import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { headerContent } from "../content/header.js";
import { sleep } from "../utils/sleep.js";

export async function createComponentHeader(
  count: number,
  projectName: string
) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create Header\n`);

  const rainbowText = chalkAnimation.rainbow("Creating Header.astro...\n");

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "components",
    "Header.astro"
  );
  const fileContent = headerContent;

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`Header.astro`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.red(`Error creating Header.astro: ${error.message}`));

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
