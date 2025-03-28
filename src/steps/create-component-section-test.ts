import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";

export async function createComponentSectionTest(
  count: number,
  projectName: string,
  addModal: boolean
) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create Section-Test\n`);

  const rainbowText = chalkAnimation.rainbow(
    "Creating Section-Test.astro...\n"
  );

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "components",
    "Section-Test.astro"
  );
  const fileContent = `---
import { Button } from "@/components/ui/button";
import Form from "../../../../globals/components/form";
import type { ComponentProps } from "../../../../globals/types/component-props";

interface Props {
  componentProps: ComponentProps;
}
const { componentProps } = Astro.props;
---

<section id="section1" class="section1 py-6">
  <div class="container space-y-6">
    <h1 class="text-heading1 font-black">Heading 1</h1>
    <h2 class="text-heading2 font-black">Heading 2</h2>
    <h3 class="text-heading3 font-black">Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p class="text-para-lead">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, ipsa!
    </p>
    <div class="my-4 flex flex-wrap gap-4">
      <Button variant={"default"}>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"link"}>Link</Button>
      <Button variant={"outline"}>Outline</Button>
    </div>
    <p>{componentProps.brandObj.name}</p>${
      addModal
        ? `\n\t\t<Button className="js-modal-trigger">Open Modal</Button>\n`
        : ""
    }
    <Form componentProps={componentProps} button={"testing"} id="section-form" />
  </div>
</section>`;

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`Section-Test.astro`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        chalk.red(`Error creating Section-Test.astro: ${error.message}`)
      );

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
