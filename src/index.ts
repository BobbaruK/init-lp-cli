#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let projectName: string = "";

async function welcome() {
  console.log(
    `\n${chalk.blue("Welcome to")} ${chalk.bgBlue("ARTS")}${chalk.blue("!")}\n`
  );

  console.log(
    `${chalk.bgBlue("A")}stro\n${chalk.bgBlue("R")}eact\n${chalk.bgBlue(
      "T"
    )}ypeScript & ${chalk.bgBlue("T")}ailwindCSS\n${chalk.bgBlue(
      "S"
    )}hadCN UI\n`
  );
}

async function setProjectName(count: number) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Set the project name\n`);

  const answers = await inquirer.prompt<{ project_name: string }>({
    name: "project_name",
    type: "input",
    message: "Project name",
    default() {
      return "./my-astro-project";
    },
  });

  projectName = answers.project_name;
}

(async function main() {
  let count = 0;
  await welcome();
	
  count++;
  await setProjectName(count);
})();
