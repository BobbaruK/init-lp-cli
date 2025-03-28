import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import path from "path";
import fs from "fs";
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
  const fileContent = `@import "tailwindcss";
@import "tw-animate-css";

@utility container {
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 1rem;
  width: 100%;
}

@theme {
  --text-heading1: clamp(
    1.125rem,
    0.6667rem + 2.2917vw,
    2.5rem
  ); /* 18 - 40 ; 320 - 1280 */
  --text-heading1--line-height: clamp(
    1.25rem,
    0.75rem + 2.5vw,
    2.75rem
  ); /* 20 - 44 ; 320 - 1280 */

  --text-heading2: clamp(
    1.125rem,
    0.8333rem + 1.4583vw,
    2rem
  ); /* 18 - 32 ; 320 - 1280 */
  --text-heading2--line-height: clamp(
    1.25rem,
    0.8333rem + 2.0833vw,
    2.5rem
  ); /* 20 - 40 ; 320 - 1280 */
	
  --text-heading3: clamp(
    1rem,
    0.9167rem + 0.4167vw,
    1.25rem
  ); /* 16 - 20 ; 320 - 1280 */
  --text-heading3--line-height: clamp(
    1.25rem,
    1rem + 1.25vw,
    2rem
  ); /* 20 - 32 ; 320 - 1280 */

  --text-para-lead: clamp(
    1rem,
    0.9167rem + 0.4167vw,
    1.25rem
  ); /* 16 - 20 ; 320 - 1280 */
  --text-para-lead--line-height: clamp(
    1.25rem,
    1rem + 1.25vw,
    2rem
  ); /* 20 - 32 ; 320 - 1280 */
}`;

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
