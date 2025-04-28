import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";
import { layoutContent } from "../content/layout.js";

export async function createLayout(
  count: number,
  projectName: string,
  addModal: boolean,
  addBackToTop: boolean
) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create Layout\n`);

  const rainbowText = chalkAnimation.rainbow("Creating Layout.astro...\n");

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "layouts",
    "Layout.astro"
  );
  const fileContent = layoutContent(projectName, addModal, addBackToTop);

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`Layout.astro`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.red(`Error creating Layout.astro: ${error.message}`));

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
