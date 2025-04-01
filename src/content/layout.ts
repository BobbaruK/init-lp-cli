export const layoutContent = (addModal: boolean, addBackToTop: boolean) => `---
import Footer from "@/components/Footer.astro";
import Header from "@/components/Header.astro";${
  addModal
    ? '\nimport Dialog from "../../../../globals/components/custom-dialog/dialog.astro";'
    : ""
}${
  addBackToTop
    ? '\nimport BackToTop from "../../../../globals/components/back-to-top/back-to-top.astro";'
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
  lang={lang}
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
    <style>
      html {
        scroll-behavior: smooth;
      }

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
      }
    </style>
  </head>
  <body>
    <div id="site-wrapper">
      <Header componentProps={componentProps} />
      <main>
        <slot />
      </main>
      <Footer componentProps={componentProps} />
    </div>
    ${addModal ? "<Dialog> Dialog Content Here! </Dialog>" : ""}
    ${addBackToTop ? "<BackToTop />" : ""}
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
