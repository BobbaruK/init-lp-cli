#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import { pastel } from "gradient-string";
import inquirer from "inquirer";
import { addPrettierPlugin } from "./steps/add-prettier-plugin.js";
import { addSass } from "./steps/add-sass.js";
import { addShadCN } from "./steps/add-shadcn.js";
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

let projectName: string = "";
let addModal: boolean = false;
let addBackToTop: boolean = false;

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

async function gatherInformation(count: number) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Gather information\n`);

  const answers = await inquirer.prompt<{
    add_modal: boolean;
    add_btt: boolean;
  }>([
    {
      name: "add_modal",
      type: "confirm",
      message: "Add modal?",
      default: false,
    },
    {
      name: "add_btt",
      type: "confirm",
      message: "Add back to top component?",
      default: true,
    },
  ]);

  addModal = answers.add_modal;
  addBackToTop = answers.add_btt;
}

async function outro(count: number, projectName: string) {
  console.log(
    `\n${chalk.cyan(`Step ${count} (optional):`)} VS Code Prettier extension\n`
  );

  console.log(
    `${chalk.underline(
      chalk.yellowBright(
        `One more thing before you start building, fellow developer.`
      )
    )}\n`
  );

  console.log(
    `If you haven't done this by now, install the ${chalk.blue.underline(
      "\x1b]8;;https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode\x1b\\VS Code Prettier extension\x1b]8;;\x1b\\"
    )} (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and add the following settings to your VS Code configuration:\n`
  );

  console.log(
    `${chalk.bgBlackBright("CTRL + SHIFT + P")} > ${chalk.bgBlackBright(
      "Preferences: User Settings (JSON)"
    )}`
  );

  console.log(`\n{
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}`);

  console.log(`\n${chalk.cyan(`Last step:`)} Happy Coding!\n`);

  console.log(`cd ${projectName} && npm run dev\n`);
  console.log(`${chalk.blackBright("npm run dev")} - development`);
  console.log(`${chalk.blackBright("npm run build")} - build`);
  console.log(
    `${chalk.blackBright("npm run preview")} - preview build before deploy\n`
  );

  const msg = "A R T S";

  figlet(
    msg,
    {
      font: "Bloody",
    },
    (err, data) => {
      console.log(`\n${pastel.multiline(data || "")}\n`);
    }
  );
}

(async function main() {
  let count = 0;

  await welcome();

  count++;
  await setProjectName(count);

  count++;
  await gatherInformation(count);

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
  await createLayout(count, projectName, addModal, addBackToTop);

  count++;
  await createComponentFooter(count, projectName);

  count++;
  await createComponentHeader(count, projectName);

  count++;
  await createComponentSection1(count, projectName, addModal);

  count++;
  await createComponentSectionTest(count, projectName, addModal);

  count++;
  await addPrettierPlugin(count, projectName);

  count++;
  await createPrettierrc(count, projectName);

  count++;
  await addShadCN(count, projectName);

  count++;
  await outro(count, projectName);
})();
