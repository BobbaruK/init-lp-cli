import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";
import { indexPageContent } from "../content/index-page.js";

export async function editIndex(count: number, projectName: string) {
  console.log(
    `\n${chalk.cyan(
      `Step ${count}:`
    )} Edit ${projectName}/src/pages/index.astro\n`
  );

  const rainbowText = chalkAnimation.rainbow("Updating index.astro...\n");

  const filePath = path.join(
    process.cwd(),
    projectName,
    "src",
    "pages",
    "index.astro"
  );

  try {
    fs.writeFileSync(filePath, indexPageContent, "utf8");

    await sleep(500);
    rainbowText.stop();

    console.log(
      `${chalk.bgGreen("index.astro")} ${chalk.green(
        "has been updated successfully!\n"
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.red(`Error updating index.astro: ${error.message}`));

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
