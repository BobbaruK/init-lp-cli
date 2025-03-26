import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";

export async function editIndex(count: number, projectName: string) {
  console.log(
    `\n${chalk.cyan(
      `Step ${count}:`
    )} Edit ${projectName}/src/pages/index.astro\n`
  );

  const rainbowText = chalkAnimation.rainbow("Updating index.astro...\n");

  const filePath = path.join(
    process.cwd(),
    projectName,
    "src",
    "pages",
    "index.astro"
  );

  const newContent = `---
import SectionTest from "@/components/Section-Test.astro";
import Section1 from "@/components/Section1.astro";
import { brandFactory } from "../../../../globals/factory";
import { type TradingAtheneumSVGVariation } from "../../../../globals/types/brands/logo";
import type { ComponentProps } from "../../../../globals/types/component-props";
// import { Features } from "../../../../globals/types/enums";
import type {
  LandingPageType,
  LicenseType,
  RegistrationType,
} from "../../../../globals/types/lp-params-type";
import { checkFeatures } from "../../../../globals/utils/check-features";
import Layout from "../layouts/Layout.astro";

const license: LicenseType = "fsa";
const lpType: LandingPageType = "classic";
const features = checkFeatures([
  // Features.readyForMail,
  // Features.outbrain,
  // Features.atheneum,
]);
const registrationType: RegistrationType = "classic";

export interface CustomOptions {
  logoSquare: boolean;
}

const componentProps: ComponentProps<
  TradingAtheneumSVGVariation,
  CustomOptions
> = {
  lang: "en",
  license,
  lpName: "",
  brandObj: brandFactory({
    brand: "tradingatheneum",
    license,
    whatsapp: false,
    features,
  }),
  logo: function () {
    return this.brandObj.images.logoSVG.defaultCustom;
  },
  lpType,
  registrationType,
  customOptions: {
    logoSquare: false,
  },
  features,
  // fxoroFooter: true,
};
---

<Layout componentProps={componentProps}>
  <SectionTest componentProps={componentProps} />
  <Section1 componentProps={componentProps} />
</Layout>`;

  try {
    fs.writeFileSync(filePath, newContent, "utf8");

    await sleep(500);
    rainbowText.stop();

    console.log(
      `${chalk.bgGreen("index.astro")} ${chalk.green(
        "has been updated successfully!\n"
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.red(`Error updating index.astro: ${error.message}`));

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
