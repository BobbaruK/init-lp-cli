import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { exec } from "child_process";

export async function addShadCN(count: number, projectName: string) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Add ShadCN UI\n`);

  const rainbowText = chalkAnimation.rainbow("Installing ShadCN UI...\n");

  return new Promise<void>((resolve, reject) => {
    exec(
      `cd ${projectName} && npx shadcn@latest init -b slate -s button input label`,
      (error, stdout, stderr) => {
        rainbowText.stop();

        if (error) {
          console.error(chalk.red(`Error: ${error.message}`));
          reject(error);
          return;
        }

        if (stderr) {
          console.error(chalk.yellow(`stderr: ${stderr}`));
          resolve();
          return;
        }

        console.log(stdout);
        resolve();
      }
    );
  });
}
