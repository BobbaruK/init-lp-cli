import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { stylesheetContent } from "../content/stylesheet.js";
import { sleep } from "../utils/sleep.js";

export async function createStylesheet(count: number, projectName: string) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create stylesheet\n`);

  const rainbowText = chalkAnimation.rainbow("Creating global.css...\n");

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "styles",
    "global.css"
  );
  const fileContent = stylesheetContent;

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(1000);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`src/global.css`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        chalk.red(`Error creating stylesheet file: ${error.message}`)
      );

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
