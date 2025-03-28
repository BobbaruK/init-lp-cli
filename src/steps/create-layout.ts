import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";

export async function createLayout(
  count: number,
  projectName: string,
  addModal: boolean
) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create Layout\n`);

  const rainbowText = chalkAnimation.rainbow("Creating Layout.astro...\n");

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "layouts",
    "Layout.astro"
  );
  const fileContent = `---
import Footer from "@/components/Footer.astro";
import Header from "@/components/Header.astro";${
    addModal
      ? '\nimport Dialog from "../../../../globals/components/custom-dialog/dialog.astro";'
      : ""
  }
import type { ComponentProps } from "../../../../globals/types/component-props";
import "../styles/global.css";

interface Props {
  componentProps: ComponentProps;
}

const { componentProps } = Astro.props;

const lang = componentProps.lang as keyof typeof componentProps.brandObj.typage;
---

<!doctype html>
<html
  lang={lang !== "showcase" ? lang : "en"}
  dir={lang === "ar" ? "rtl" : "ltr"}
  data-brandname={componentProps.brandObj.name}
  data-lptype={componentProps.lpType}
  data-registrationtype={componentProps.registrationType}
  data-recaptchasitekey={componentProps.brandObj.recaptchaKey}
  data-typage={componentProps.brandObj.typage[lang]}
  data-openwa={componentProps.brandObj.whatsapp && "true"}
  data-wanumber={componentProps.brandObj.whatsapp
    ? componentProps.brandObj.whatsappNumber[lang]
    : false}
  data-lpfeatures={componentProps.features?.join(', ')}
>
  <head>
    <meta charset="utf-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href={componentProps.brandObj.images.faviconLink}
    />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{componentProps.lpName} | {componentProps.brandObj.name}</title>
  </head>
  <body>
    <div id="site-wrapper">
      <Header componentProps={componentProps} />
      <main>
        <slot />
      </main>
      <Footer componentProps={componentProps} />
    </div>${addModal ? "\n\t\t<Dialog> Dialog Content Here! </Dialog>\n" : ""}
    <script
      type="module"
      src="https://assets.smartsupporthub.com/js/bundle/astro_lp_v2.js"
      is:inline></script>
  </body>
</html>

<style>
  #site-wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
</style>${
    addModal &&
    `\n\n<script>
  import { initModal } from "../../../../globals/components/custom-dialog/init.ts";
  initModal();
</script>`
  }`;

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`Layout.astro`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.red(`Error creating Layout.astro: ${error.message}`));

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
