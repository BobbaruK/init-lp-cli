import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { exec } from "child_process";

export async function createAstroProject(count: number, projectName: string) {
  console.log(
    `\n${chalk.cyan(
      `Step ${count}:`
    )} Create a new Astro project with React and TailwindCSS\n`
  );

  const rainbowText = chalkAnimation.rainbow(
    "Creating a new Astro project...\n"
  );

  return new Promise<void>((resolve, reject) => {
    exec(
      `npm create astro@latest ${projectName} -- --template minimal --add react --add tailwind --install --no-git --skip-houston`,
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
