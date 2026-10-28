// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import codeblocks from "starlight-codeblocks";

// https://astro.build/config
export default defineConfig({
  site: "https://viccios.github.com",
  base: "/padawans",
  integrations: [
    starlight({
      title: "Padawans",
      plugins: [codeblocks()],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Começando",
          items: [{ autogenerate: { directory: "comecando" } }],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
