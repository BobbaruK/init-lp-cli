import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { footerContent } from "../content/footer.js";
import { sleep } from "../utils/sleep.js";

export async function createComponentFooter(
  count: number,
  projectName: string
) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create Footer\n`);
  const rainbowText = chalkAnimation.rainbow("Creating Footer.astro...\n");

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "components",
    "Footer.astro"
  );
  const fileContent = footerContent;

  try {
    // Creează folderul `src/` dacă nu există
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Scrie fișierul
    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`Footer.astro`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.red(`Error creating Footer.astro: ${error.message}`));

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
