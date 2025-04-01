export const indexPageContent = `---
import Section1 from "@/components/Section1.astro";
import { brandFactory } from "../../../../globals/factory";
import { type TradingAtheneumSVGVariation } from "../../../../globals/types/brands/logo";
import type { ComponentProps } from "../../../../globals/types/component-props";
import { Features } from "../../../../globals/types/enums";
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
  Features.showcase,
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
  <Section1 componentProps={componentProps} />
</Layout>`;
