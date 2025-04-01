export const headerContent = `---
import { type CustomOptions } from "@/pages/index.astro";
import MainLogo from "../../../../globals/components/logos/MainLogo.astro";
import { type ComponentProps } from "../../../../globals/types/component-props";

interface Props {
  componentProps: ComponentProps<any, CustomOptions>;
}
const { componentProps } = Astro.props;
---

<header id="header">
  <div class="container">
    <MainLogo
      size={componentProps.brandObj.nameToLower}
      logo={componentProps.logo()}
      square={componentProps.customOptions?.logoSquare}
    />
  </div>
</header>`;
