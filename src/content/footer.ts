export const footerContent = `---
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
    <FxoroFooter componentProps={componentProps} />
  ) : (
    <BrandFooter
      componentProps={componentProps}
      footerMetaData={componentProps.brandObj.footerMetaData}
    />
  )
}

<style is:global>
  @reference "../styles/global.css";
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

  #globalFooter {
    > .modal {
      display: none !important;
    }
    .dfSomething {
      /* @apply mt-4; */
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
  }
</style>`;