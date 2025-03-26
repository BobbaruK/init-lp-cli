#!/usr/bin/env node

import chalk from "chalk";

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

(async function main() {
  await welcome();
})();
