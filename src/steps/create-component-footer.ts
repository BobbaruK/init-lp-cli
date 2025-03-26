import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";

export async function createComponentFooter(
  count: number,
  projectName: string
) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create Footer\n`);
  const rainbowText = chalkAnimation.rainbow("Creating Footer.astro...\n");

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "components",
    "Footer.astro"
  );
  const fileContent = `---
import BrandFooter from "../../../../globals/components/Footer/brand-footer.astro";
import FxoroFooter from "../../../../globals/components/Footer/fxoro-footer.astro";
import type { ComponentProps } from "../../../../globals/types/component-props";

interface Props {
  componentProps: ComponentProps;
}
const { componentProps } = Astro.props;
---

{
  componentProps.fxoroFooter ? (
    // TODO: handle style for FxoroFooter
    <FxoroFooter componentProps={componentProps} />
  ) : (
    <BrandFooter
      componentProps={componentProps}
      footerMetaData={componentProps.brandObj.footerMetaData}
    />
  )
}

<style is:global>
  .brandFooter {
    padding-block: calc(var(--spacing) * 8);
    background-color: var(--color-stone-700);
    color: var(--color-gray-100);
  }

  .brandFooter .container {
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 8);
  }

  .brandFooter .logoWrapper {
    display: grid;
    place-items: center;
  }

  /* TODO: handle style for FxoroFooter */
  /* #globalFooter {
    > .modal {
      display: none !important;
    }
    .dfSomething {
      // @apply mt-4;
    }
    .theApps {
      @apply py-4;
    }

    #footer {
      > .container > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
      }

      .disclaimer_footer {
        @apply z-30;
      }
    }
  } */
</style>`;

  try {
    // Creează folderul `src/` dacă nu există
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Scrie fișierul
    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`Footer.astro`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.red(`Error creating Footer.astro: ${error.message}`));

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
