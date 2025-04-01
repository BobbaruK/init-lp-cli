import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";
import { sectionTestFileContent } from "../content/section-test.js";

export async function createComponentSection1(
  count: number,
  projectName: string,
  addModal: boolean
) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create Section1\n`);

  const rainbowText = chalkAnimation.rainbow("Creating Section1.astro...\n");

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "components",
    "Section1.astro"
  );
  const fileContent = sectionTestFileContent(addModal);

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`Section1.astro`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        chalk.red(`Error creating Section1.astro: ${error.message}`)
      );

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
