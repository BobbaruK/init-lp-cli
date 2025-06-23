export const indexPageContent = `---
import Section1 from "@/components/Section1.astro";
import { brandFactory } from "../../../../globals/factory";
import { type TradersAcademicSVGVariation } from "../../../../globals/types/brands/logo";
import type { BrandsNames } from "../../../../globals/types/brands/names";
import type { ComponentProps } from "../../../../globals/types/component-props";
import { Features } from "../../../../globals/types/enums";
import type {
  LandingPageType,
  LicenseType,
  RegistrationType,
} from "../../../../globals/types/lp-params-type";
import type {
  Languages,
  TranslationsType,
} from "../../../../globals/types/translations";
import { checkFeatures } from "../../../../globals/utils/check-features";
import { fxoroFooter as fxoroFooterFn } from "../../../../globals/utils/fxoro-footer";
import Layout from "../layouts/Layout.astro";

export interface CustomOptions {
  logoSquare: boolean;
}

/**
 * Landing page's main variables
 */
type Logo = TradersAcademicSVGVariation;
const brand: BrandsNames = "tradersacademic";
const lpName = "";
const metaDescription: TranslationsType = {
  en: "",
  it: "",
  tr: "",
  ro: "",
  ar: "",
  de: "",
  es: "",
  sv: "",
  pt: "",
  fi: "",
  pl: "",
  hu: "",
  th: "",
  ms: "",
  vi: "",
};
const lang: Languages = "en";
const license: LicenseType = "fsa";
const lpType: LandingPageType = "classic";
const features = checkFeatures([
  // Features.showcase,
  // Features.readyForMail,
  Features.outbrain,
  // Features.atheneum,
  // Features.officialTerms,
  // Features.policyInFooter,
]);
const registrationType: RegistrationType = "classic";
const whatsapp = false;
const fxoroFooter: boolean = false;
const drThankYou: boolean = false;
const customOptions: CustomOptions = {
  logoSquare: false,
};
// ===============================

const componentProps: ComponentProps<Logo, CustomOptions> = {
  lang,
  license,
  lpName,
  brandObj: brandFactory({
    brand,
    license,
    whatsapp,
    features,
  }),
  logo: function () {
    return this.brandObj.images.logoSVG.default;
  },
  lpType,
  registrationType,
  customOptions,
  features,
  fxoroFooter: fxoroFooterFn(brand, fxoroFooter),
};
---

<Layout componentProps={componentProps} metaDescription={metaDescription}>
  <Section1 componentProps={componentProps} />
</Layout>`;
