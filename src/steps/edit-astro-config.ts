import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import path from "path";
import fs from "fs";
import { sleep } from "../utils/sleep.js";

export async function editAstroConfig(count: number, projectName: string) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Edit astro.config.mjs\n`);

  const rainbowText = chalkAnimation.rainbow("Editing astro.config.mjs...\n");

  const configPath = path.join(process.cwd(), projectName, "astro.config.mjs");

  try {
    let configContent = fs.readFileSync(configPath, "utf8");

    const newConfig = configContent.replace(
      `integrations: [react()],`,
      `base: "/lp/LP_NAME/LP_LANG/",\n\ttrailingSlash: "ignore",\n\tintegrations: [react()],`
    );

    fs.writeFileSync(configPath, newConfig, "utf8");

    await sleep(1000);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`astro.config.mjs`)} ${chalk.green(
        `has been updated successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        chalk.red(`Error updating astro.config.mjs: ${error.message}`)
      );

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
