import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { exec } from "child_process";

export async function addSass(count: number, projectName: string) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Add SASS\n`);

  const rainbowText = chalkAnimation.rainbow("Installing SASS Embedded...\n");

  return new Promise<void>((resolve, reject) => {
    exec(
      `cd ${projectName} && npm install -D sass-embedded`,
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
