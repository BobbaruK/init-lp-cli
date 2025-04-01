import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";
import { sectionTestFileContent } from "../content/section-test.js";

export async function createComponentSectionTest(
  count: number,
  projectName: string,
  addModal: boolean
) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create Section-Test\n`);

  const rainbowText = chalkAnimation.rainbow(
    "Creating Section-Test.astro...\n"
  );

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "components",
    "Section-Test.astro"
  );
  const fileContent = sectionTestFileContent(addModal);

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`Section-Test.astro`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        chalk.red(`Error creating Section-Test.astro: ${error.message}`)
      );

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
