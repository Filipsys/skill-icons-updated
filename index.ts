import icons from "./dist/icons.json";

const typedIcons = icons as { [key: string]: string };
const iconNameList = [...new Set(Object.keys(icons).map(i => i.split("-")[0]))];
const shortNames: { [key: string]: string } = {
  js: "javascript",
  ts: "typescript",
  py: "python",
  tailwind: "tailwindcss",
  vue: "vuejs",
  nuxt: "nuxtjs",
  go: "golang",
  cf: "cloudflare",
  wasm: "webassembly",
  postgres: "postgresql",
  k8s: "kubernetes",
  next: "nextjs",
  mongo: "mongodb",
  md: "markdown",
  ps: "photoshop",
  ai: "illustrator",
  pr: "premiere",
  ae: "aftereffects",
  scss: "sass",
  sc: "scala",
  net: "dotnet",
  gatsbyjs: "gatsby",
  gql: "graphql",
  vlang: "v",
  amazonwebservices: "aws",
  bots: "discordbots",
  express: "expressjs",
  googlecloud: "gcp",
  mui: "materialui",
  windi: "windicss",
  unreal: "unrealengine",
  nest: "nestjs",
  ktorio: "ktor",
  pwsh: "powershell",
  au: "audition",
  rollup: "rollupjs",
  rxjs: "reactivex",
  rxjava: "reactivex",
  ghactions: "githubactions",
  sklearn: "scikitlearn",
};

const themedIcons = [
  ...Object.keys(icons)
    .filter(i => i.includes("-light") || i.includes("-dark"))
    .map(i => i.split("-")[0]),
];

const ICONS_PER_LINE = 15;
const ICON_SIZE = 256;
const ONE_ICON = 48;

function generateSvg(props: {
  iconNames: string[];
  perLine?: number;
  gap?: number;
  padding?: number;
  sizing?: number;
  isVertical?: boolean;
  isClickable?: boolean;
}) {
  const iconSvgList = props.iconNames.map(i => typedIcons[i]);
  const perLine = props.isVertical ? 1 : (props.perLine ??= ICONS_PER_LINE);
  const gap = (props.gap ??= 20);
  const padding = (props.padding ??= 0);
  const clickable = (props.isClickable ??= false);
  const sizing = (props.sizing ??= ONE_ICON) === 0 ? ONE_ICON : props.sizing;
  const SCALE = sizing / ICON_SIZE;

  const rows = Math.ceil(props.iconNames.length / perLine);
  const columns = !props.isVertical
    ? Math.min(perLine, props.iconNames.length)
    : 1;
  const horizontalGapLength = (columns - 1) * gap;
  const verticalGapLength = (rows - 1) * gap;
  const rowGap = rows > 1 ? gap : 0;

  const width = columns * ICON_SIZE + horizontalGapLength + padding * 2;
  const height = rows * ICON_SIZE + verticalGapLength + padding * 2;

  return `
    <svg
      width="${width * SCALE}"
      height="${height * SCALE}" viewBox="0 0 ${width} ${height}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    ${iconSvgList
      .map(
        (i, index) =>
          `
        <g transform="translate(${
          !props.isVertical
            ? (index % perLine) * (ICON_SIZE + gap) + padding
            : padding
        }, ${
            props.isVertical
              ? Math.floor(index / perLine) * (ICON_SIZE + gap) + padding
              : Math.floor(index / perLine) * ICON_SIZE +
                padding +
                Math.floor(index / perLine) * rowGap
          })">
          ${clickable ? `<a href="">${i}</a>` : `${i}`}
        </g>
        `
      )
      .join("")}
  </svg>
  `;
}

function parseShortNames(names: string[], theme = "dark"): string[] {
  return names
    .map(name => {
      if (iconNameList.includes(name)) {
        return name + (themedIcons.includes(name) ? `-${theme}` : "");
      } else if (name in shortNames) {
        return (
          shortNames[name] +
          (themedIcons.includes(shortNames[name]) ? `-${theme}` : "")
        );
      }

      return undefined;
    })
    .filter((name): name is string => name !== undefined);
}

export default {
  async fetch(request: Request) {
    const { pathname, searchParams } = new URL(request.url);
    const path = pathname.replace(/^\/|\/$/g, "");

    if (path === "icons") {
      const iconParam = searchParams.get("i") || searchParams.get("icons");
      if (!iconParam)
        return new Response("You didn't specify any icons!", { status: 400 });

      const theme = searchParams.get("t") || searchParams.get("theme");
      if (theme && theme !== "dark" && theme !== "light") {
        return new Response('Theme must be either "light" or "dark"', {
          status: 400,
        });
      }

      const perLine = Number(searchParams.get("perline")) || ICONS_PER_LINE;
      if (isNaN(perLine) || perLine < -1 || perLine > 50) {
        return new Response(
          "Icons per line must be a number between 1 and 50",
          {
            status: 400,
          }
        );
      }

      let iconShortNames: string[] = [];
      if (iconParam === "all") {
        iconShortNames = iconNameList;
      } else {
        iconShortNames = iconParam.split(",");
      }

      const iconNames: string[] = parseShortNames(
        iconShortNames,
        theme || undefined
      );
      if (!iconNames) {
        return new Response("You didn't format the icons param correctly!", {
          status: 400,
        });
      }

      const gapParam = Number(searchParams.get("g") || searchParams.get("gap"));
      if (isNaN(gapParam) || gapParam < -1) {
        return new Response("Invalid gap parameter", {
          status: 400,
        });
      }

      const paddingParam = Number(
        searchParams.get("p") || searchParams.get("padding")
      );
      if (isNaN(paddingParam) || paddingParam < -1) {
        return new Response("Invalid padding parameter", {
          status: 400,
        });
      }

      const sizingParam = Number(
        searchParams.get("s") || searchParams.get("size")
      );
      if (isNaN(sizingParam) || sizingParam < -1) {
        return new Response("Invalid sizing parameter", {
          status: 400,
        });
      }

      const paramsAsString = searchParams.toString();
      const clickableParam =
        paramsAsString.includes("&c") || paramsAsString.includes("&clickable");
      const verticalParam =
        paramsAsString.includes("&v") || paramsAsString.includes("&vertical");

      const svg = generateSvg({
        iconNames: iconNames,
        perLine: perLine,
        gap: gapParam,
        padding: paddingParam,
        sizing: sizingParam,
        isClickable: clickableParam,
        isVertical: verticalParam,
      });

      return new Response(svg, {
        headers: { "Content-Type": "image/svg+xml" },
      });
    } else if (path === "api/icons") {
      return new Response(JSON.stringify(iconNameList), {
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
      });
    } else if (path === "api/svgs") {
      return new Response(JSON.stringify(icons), {
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
      });
    }

    return new Response();
  },
};
