#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import { addPrettierPlugin } from "./steps/add-prettier-plugin.js";
import { addSass } from "./steps/add-sass.js";
import { createAstroProject } from "./steps/create-astro-project.js";
import { createComponentFooter } from "./steps/create-component-footer.js";
import { createComponentHeader } from "./steps/create-component-header.js";
import { createComponentSection1 } from "./steps/create-component-section-1.js";
import { createComponentSectionTest } from "./steps/create-component-section-test.js";
import { createLayout } from "./steps/create-layout.js";
import { createPrettierrc } from "./steps/create-prettierrc.js";
import { createStylesheet } from "./steps/create-stylesheet-file.js";
import { editAstroConfig } from "./steps/edit-astro-config.js";
import { editIndex } from "./steps/edit-index.js";
import { editTSConfig } from "./steps/edit-ts-config.js";
import { addShadCN } from "./steps/add-shadcn.js";

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

  count++;
  await createAstroProject(count, projectName);

  count++;
  await editAstroConfig(count, projectName);

  count++;
  await editTSConfig(count, projectName);

  count++;
  await createStylesheet(count, projectName);

  count++;
  await addSass(count, projectName);

  count++;
  await editIndex(count, projectName);

  count++;
  await createLayout(count, projectName);

  count++;
  await createComponentFooter(count, projectName);

  count++;
  await createComponentHeader(count, projectName);

  count++;
  await createComponentSection1(count, projectName);

  count++;
  await createComponentSectionTest(count, projectName);

  count++;
  await addPrettierPlugin(count, projectName);

  count++;
  await createPrettierrc(count, projectName);

  count++;
  await addShadCN(count, projectName);
})();
