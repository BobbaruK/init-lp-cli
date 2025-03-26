import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { exec } from "child_process";

export async function addPrettierPlugin(count: number, projectName: string) {
  console.log(
    `\n${chalk.cyan(
      `Step ${count}:`
    )} Add Prettier Plugin for Astro and TailwindCSS\n`
  );

  const rainbowText = chalkAnimation.rainbow(
    "Installing Prettier Plugin for Astro and TailwindCSS...\n"
  );

  return new Promise<void>((resolve, reject) => {
    exec(
      `cd ${projectName} && npm i --save-dev prettier prettier-plugin-astro prettier-plugin-tailwindcss`,
      (error, stdout, stderr) => {
        rainbowText.stop();

        if (error) {
          console.error(chalk.red(`Error: ${error.message}`));
          reject(error);
          return;
        }

        if (stderr) {
          console.error(chalk.yellow(`stderr: ${stderr}`));
          return;
        }

        console.log(stdout);
        resolve();
      }
    );
  });
}
