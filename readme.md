<h1>Showcase your skills on your GitHub or resumé with ease!</h1>
Powered by Cloudflare Workers ⚡

# Table of contents

- [Table of contents](#table-of-contents)
- [TODO:](#todo)
- [The setup process](#the-setup-process)
  - [The syntax](#the-syntax)
  - [Selecting icons](#selecting-icons)
  - [Customising the icons](#customising-the-icons)
    - [Padding](#padding)
    - [Gaps](#gaps)
    - [Sizing](#sizing)
    - [Orientation](#orientation)
    - [Clickable icons](#clickable-icons)
- [Themed Icons](#themed-icons)
- [Icons Per Line](#icons-per-line)
- [Centering Icons](#centering-icons)
- [New icons progress](#new-icons-progress)
- [New versions of icons to update](#new-versions-of-icons-to-update)
- [Icons List](#icons-list)
- [Self-hosting your own Clouflare worker](#self-hosting-your-own-clouflare-worker)

# TODO:

- [ ] Add most, if not all of the icons from the [skill-icons issues tab](https://github.com/tandpfun/skill-icons/issues).
- [x] Add support for customisable gaps, padding, sizing, orientation ~~& rotation~~.
- [x] Possible support for clickable icons. (Correct links are not yet added to the icons)
- [ ] Possible different colour palettes.
- [ ] Possible auto light/dark theme mode.
- [ ] Remove the need for the SVGs to be kept on the worker, possibly host them in the repo.
- [ ] Create a website for custom icon picking.
- [ ] Add all the links to the icons corresponding to the tool/language.

# The setup process

## The syntax

The SVG can be embedded in two main ways, using Markdown or HTML. Both have the same result.

Markdown:

```md
![](https://icon-worker.filipsysak.workers.dev/icons?i=js,html,css)
```

HTML:

```html
<img src="https://icon-worker.filipsysak.workers.dev/icons?i=js,html,css" />
```

Result:<br>
![](https://icon-worker.filipsysak.workers.dev/icons?i=js,html,css)<br>
<img src="https://icon-worker.filipsysak.workers.dev/icons?i=js,html,css" />

## Selecting icons

Icons are separated using commas, after the `?i=` parameter. You can find a full list of icons [here](#icons-list).
Example: `?i=js,html,css`

```md
![](https://icon-worker.filipsysak.workers.dev/icons?i=js,html,css)
```

Result:<br>
![](https://icon-worker.filipsysak.workers.dev/icons?i=js,html,css)

## Customising the icons

There are a couple of options for customisablity currently available, including padding, gaps, sizing, orientation and clickable icons.

All parameters have an alias which will work the same as the longhand name.

### Padding

Padding can be added to the icons by appending `&p=` or `&padding=` to the link and adding the number in pixels.
The default size is set to `0`.

Example: `.../icons?i=rust,go&p=50`

Result:<br>
![](https://icon-worker.filipsysak.workers.dev/icons?i=rust,go&p=50)

### Gaps

Gaps can be added between the icons by appending `&g=` or `&gap=` to the link and adding the number in pixels. The default size is set to `0`.

Example: `.../icons?i=rust,go&g=50`

Result:<br>
![](https://icon-worker.filipsysak.workers.dev/icons?i=rust,go&g=50)

### Sizing

Sizing can be added to the icons by appending `&s=` or `&size=` to the link and adding the number in pixels. The default size is set to `48`.

Example: `.../icons?i=rust,go&s=30`

Result:<br>
![](https://icon-worker.filipsysak.workers.dev/icons?i=rust,go&s=30)

### Orientation

Orientation can be added to the icons by appending a `&v` or `&vertical` to the link. This parameter will make all icons vertical. The default orientation is horizontal.

Example: `.../icons?i=rust,go&v`

Result:<br>
![](https://icon-worker.filipsysak.workers.dev/icons?i=rust,go&v)

### Clickable icons

Icons can be clickable by appending `&c` or `&clickable` to the link. This parameter will enable icons to be clickable.

The link locations are yet to be added as a custom option. Icon links are also yet to be added.

Example: `.../icons?i=rust,go&c`

Result:<br>
![](https://icon-worker.filipsysak.workers.dev/icons?i=rust,go&c)

# Themed Icons

Some icons have a dark and light themed background. You can specify which theme you want as a url parameter.

This is optional. The default theme is dark.

Change the `&theme=light` to either `dark` or `light`. The theme is the background color, so light theme has a white icon background, and dark has a black-ish.

**Light Theme Example:**

```md
[![My Skills](https://skillicons.dev/icons?i=java,kotlin,nodejs,figma&theme=light)](https://skillicons.dev)
```

[![My Skills](https://skillicons.dev/icons?i=java,kotlin,nodejs,figma&theme=light)](https://skillicons.dev)

# Icons Per Line

You can specify how many icons you would like per line! It's an optional argument, and the default is 15.

Change the `&perline=3` to any number between 1 and 50.

```md
[![](https://skillicons.dev/icons?i=aws,gcp,azure,react,vue,flutter&perline=3)](https://skillicons.dev)
```

[![](https://skillicons.dev/icons?i=aws,gcp,azure,react,vue,flutter&perline=3)](https://skillicons.dev)

# Centering Icons

Want to center the icons in your readme? The SVGs are automatically resized, so you can do it the same way you'd normally center an image.

```html
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,kubernetes,docker,c,vim" />
  </a>
</p>
```

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,kubernetes,docker,c,vim" />
  </a>
</p>

# New versions of icons to update

|   Icon ID   | Icon |
| :---------: | :--: |
| `firebase`  |      |
|     `x`     |      |
|   `deno`    |      |
|     `c`     |      |
|    `css`    |      |
| `jetbrains` |      |
|   `ocaml`   |      |
|   `ember`   |      |
|  `angular`  | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=angular&s=35" /> |

# New icons progress

|       Icon ID        | Icon |
| :------------------: | :--: |
|        `hono`        | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=hono&s=35" /> |
|      `vagrant`       | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=vagrant&s=35" /> |
|       `gofiber`        | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=gofiber&s=35" /> |
|       `medium`       | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=medium&s=35" /> |
|      `geogebra`      | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=geogebra&s=35" /> |
|      `wolfram`       | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=wolfram&s=35" /> |
|   `jetpackcompose`   | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=jetpackcompose&s=35" /> |
|       `canva`        | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=canva&s=35" /> |
|      `fivetran`      | <img src="https://icon-worker.filipsysak.workers.dev/icons?i=fivetran&s=35" /> |
|      `oracledb`      |      |
|       `mssql`        |      |
|      `tableau`       |      |
|       `msdos`        |      |
|     `inertiajs`      |      |
|     `servicenow`     |      |
|    `flutterflow`     |      |
|      `netbeans`      |      |
|        `bsky`        |      |
|      `youtube`       |      |
|        `helm`        |      |
|     `playcanvas`     |      |
|        `stan`        |      |
|       `xhtml`        |      |
|       `payara`       |      |
|       `testng`       |      |
|      `fastlane`      |      |
|       `steam`        |      |
|      `mariadb`       |      |
|       `spline`       |      |
|   `dockerjetpack`    |      |
|   `davinciresolve`   |      |
|       `motoko`       |      |
|       `framer`       |      |
|     `devextreme`     |      |
|      `hashnode`      |      |
|    `reactnative`     |      |
|      `vegaspro`      |      |
|        `pwa`         |      |
|       `cpanel`       |      |
|    `intellijidea`    |      |
|     `lightroom`      |      |
|       `stata`        |      |
|       `lottie`       |      |
|       `pytest`       |      |
|      `leetcode`      |      |
|      `navicat`       |      |
|       `argocd`       |      |
|      `coolify`       |      |
|        `gimp`        |      |
|       `unocss`       |      |
|      `socketio`      |      |
|      `posthog`       |      |
|     `passportjs`     |      |
|       `appium`       |      |
|     `snowflake`      |      |
|        `dbt`         |      |
|       `xampp`        |      |
|       `eslint`       |      |
|     `playwright`     |      |
|       `rspack`       |      |
|      `rsbuild`       |      |
|     `storybook`      |      |
|      `mermaid`       |      |
|       `neo4j`        |      |
|        `jwt`         |      |
|     `skeletonui`     |      |
|      `twillio`       |      |
|     `streamlit`      |      |
|      `insomnia`      |      |
|      `flstudio`      |      |
|        `sap`         |      |
|        `abap`        |      |
|      `assembly`      |      |
|  `affinitydesigner`  |      |
|   `affinityphoto`    |      |
| `affinitypublisher`  |      |
|      `inkscape`      |      |
|     `fusion360`      |      |
|      `gromacs`       |      |
|      `robotpy`       |      |
|       `bruno`        |      |
|     `objectivec`     |      |
|      `freebsd`       |      |
|       `zeabur`       |      |
|     `vuesticui`      |      |
|       `quasar`       |      |
|     `vitepress`      |      |
|      `rolldown`      |      |
|  `microwebsockets`   |      |
|        `vike`        |      |
|       `podman`       |      |
|      `esbuild`       |      |
|       `biome`        |      |
|     `puppeteer`      |      |
|      `pkgroll`       |      |
|       `jotai`        |      |
|      `tanstack`      |      |
|      `daisyui`       |      |
|     `burpsuite`      |      |
|        `nano`        |      |
|       `fedora`       |      |
|      `flatpak`       |      |
|      `hyprland`      |      |
|        `sqlc`        |      |
|      `typeorm`       |      |
|      `chatgpt`       |      |
|       `claude`       |      |
|     `perplexity`     |      |
|       `gemini`       |      |
|       `blazor`       |      |
|       `ffmpeg`       |      |
|       `lodash`       |      |
|      `datadog`       |      |
|     `handlebars`     |      |
|     `framerone`      |      |
|        `axos`        |      |
|       `axios`        |      |
|       `vmware`       |      |
|        `gnu`         |      |
|    `googlesheets`    |      |
|       `xcode`        |      |
|    `reactrouter`     |      |
|     `matplotlib`     |      |
|     `babylonjs`      |      |
|      `mongoose`      |      |
|    `apachejmeter`    |      |
|      `shopify`       |      |
|      `geodesdk`      |      |
|        `odin`        |      |
|    `crystallang`     |      |
|      `influxdb`      |      |
|       `pulimi`       |      |
|       `polars`       |      |
|    `cockroachdb`     |      |
|       `kicad`        |      |
|        `gsap`        |      |
|       `pandas`       |      |
|       `numpy`        |      |
|      `ghostty`       |      |
|        `zsh`         |      |
|      `unicode`       |      |
|       `love2d`       |      |
|     `pinescript`     |      |
|    `huggingface`     |      |
|     `timeshift`      |      |
|        `jira`        |      |
|       `render`       |      |
|        `r3f`         |      |
|        `r3r`         |      |
|      `phoenix`       |      |
|     `antdesign`      |      |
|     `karpenter`      |      |
|       `twine`        |      |
|       `ionic`        |      |
|     `turborepo`      |      |
|       `batch`        |      |
|        `fork`        |      |
|      `foundry`       |      |
|     `stackblitz`     |      |
|       `revolt`       |      |
|      `cucumber`      |      |
|     `notepadpp`      |      |
|    `webdriverio`     |      |
|       `defold`       |      |
|       `resend`       |      |
|       `havok`        |      |
|      `audacity`      |      |
|      `doppler`       |      |
|      `firebird`      |      |
|       `ollama`       |      |
|       `trello`       |      |
|       `slack`        |      |
|       `linear`       |      |
|        `mojo`        |      |
|       `gleam`        |      |
|     `protonmail`     |      |
|     `rustrover`      |      |
|      `rubymine`      |      |
|       `goland`       |      |
|      `datagrip`      |      |
|       `gitea`        |      |
|      `semgrep`       |      |
|    `googlecolab`     |      |
|      `chakraui`      |      |
|       `twitch`       |      |
|      `comfyui`       |      |
|      `aseprite`      |      |
|      `drizzle`       |      |
|     `drizzleorm`     |      |
|      `leaflet`       |      |
|       `lunacy`       |      |
|       `pygame`       |      |
|        `cuda`        |      |
|       `icedrs`       |      |
| `oraclesqldeveloper` |      |
|         `vi`         |      |
|      `livewire`      |      |
|    `lightningcss`    |      |
|       `stylus`       |      |
|      `recharts`      |      |
|      `shadcnui`      |      |
|         `d`          |      |
|      `angular`       |      |
|       `pillow`       |      |
|        `arc`         |      |
|        `zen`         |      |
|        `qmk`         |      |
|        `yii`         |      |
|      `dbeaver`       |      |
|    `digitalocean`    |      |
|    `planetscale`     |      |
|       `neondb`       |      |
|       `lumen`        |      |
|       `groovy`       |      |
|        `orca`        |      |
|        `lynx`        |      |
|      `zustand`       |      |
|       `nextui`       |      |
|      `radixui`       |      |
|      `directus`      |      |
|    `visualbasic`     |      |
|        `tidb`        |      |
|       `milvus`       |      |
|       `opengl`       |      |
|        `trpc`        |      |
|       `holyc`        |      |
|      `rubymine`      |      |
|        `zoom`        |      |
|       `pascal`       |      |
|       `turso`        |      |
|       `turst`        |      |
|        `twig`        |      |
|      `opensuse`      |      |
|       `joomla`       |      |
|       `excel`        |      |
|     `pocketbase`     |      |
|      `scratch`       |      |
|      `microtik`      |      |
|        `vyos`        |      |
|       `pihole`       |      |
|       `stripe`       |      |
|       `auth0`        |      |
|     `betterauth`     |      |
|    `supertokens`     |      |
|      `swiftui`       |      |
|      `effector`      |      |
|        `odoo`        |      |
|      `fastify`       |      |
|       `typst`        |      |
|     `springboot`     |      |
|        `warp`        |      |
|        `lvgl`        |      |
|     `adobefonts`     |      |
|    `dreamweaver`     |      |
|   `homeassistant`    |      |
|      `blazejs`       |      |
|     `payloadcms`     |      |
|        `expo`        |      |
|       `grails`       |      |
|       `cobol`        |      |
|     `capacitor`      |      |
|     `googleapi`      |      |
|      `ibmcloud`      |      |
|     `knockoutjs`     |      |
|    `codesandbox`     |      |
|        `kofi`        |      |
|     `wireshark`      |      |
|     `solidstart`     |      |
|       `knexjs`       |      |
|      `mantine`       |      |
|        `gin`         |      |
|       `javafx`       |      |
|       `drawio`       |      |
|     `virtualbox`     |      |
|     `codeblocks`     |      |
|     `reactquery`     |      |
|       `erlang`       |      |
|     `turbopack`      |      |
|  `jupyternotebook`   |      |
|    `applescript`     |      |
|        `lisp`        |      |
|    `vscinsiders`     |      |
|    `sublimetext`     |      |
|     `sveltekit`      |      |
|        `jsr`         |      |
|        `tmux`        |      |
|   `testcontainers`   |      |
|        `zod`         |      |
|   `standardschema`   |      |
|       `pixijs`       |      |
|     `awslambda`      |      |
|        `rxjs`        |      |
|        `quik`        |      |
|      `nextauth`      |      |
|   `googlebigquery`   |      |
|       `julia`        |      |
|   `opentelemetry`    |      |
|        `elm`         |      |
|       `flyio`        |      |
|       `webrtc`       |      |
|       `kaggle`       |      |
|         `vb`         |      |
|        `vba`         |      |
|      `vbscript`      |      |
|       `delphi`       |      |
|       `reatom`       |      |
|      `scylladb`      |      |
|        `ajax`        |      |
|        `mui`         |      |
|      `protobuf`      |      |
|        `grpc`        |      |
|     `clickhouse`     |      |
|      `postcss`       |      |
|    `fontawesome`     |      |
|        `hexo`        |      |
|    `px4autopilot`    |      |
|       `mocha`        |      |
|        `chai`        |      |
|      `xamarin`       |      |
|       `vulkan`       |      |
|      `directX`       |      |
|     `surrealdb`      |      |
|        `venv`        |      |
|       `gentoo`       |      |

# Icons List

Here's a list of all the icons currently supported. Feel free to open an issue to suggest icons to add!

|      Icon ID       |                            Icon                            |
| :----------------: | :--------------------------------------------------------: |
|     `ableton`      |    <img src="./icons/dark/Ableton-Dark.svg" width="48">    |
|   `activitypub`    |  <img src="./icons/dark/ActivityPub-Dark.svg" width="48">  |
|      `actix`       |     <img src="./icons/dark/Actix-Dark.svg" width="48">     |
|      `adonis`      |      <img src="./icons/single/Adonis.svg" width="48">      |
|        `ae`        |   <img src="./icons/single/AfterEffects.svg" width="48">   |
|     `aiscript`     |   <img src="./icons/dark/AiScript-Dark.svg" width="48">    |
|     `alpinejs`     |   <img src="./icons/dark/AlpineJS-Dark.svg" width="48">    |
|     `anaconda`     |   <img src="./icons/dark/Anaconda-Dark.svg" width="48">    |
|  `androidstudio`   | <img src="./icons/dark/AndroidStudio-Dark.svg" width="48"> |
|     `angular`      |    <img src="./icons/dark/Angular-Dark.svg" width="48">    |
|     `ansible`      |     <img src="./icons/single/Ansible.svg" width="48">      |
|      `apollo`      |      <img src="./icons/single/Apollo.svg" width="48">      |
|      `apple`       |     <img src="./icons/dark/Apple-Dark.svg" width="48">     |
|     `appwrite`     |     <img src="./icons/single/Appwrite.svg" width="48">     |
|       `arch`       |     <img src="./icons/dark/Arch-Dark.svg" width="48">      |
|     `arduino`      |      <img src="./icons/single/Arduino.svg" width="48>      |
|      `astro`       |      <img src="./icons/single/Astro.svg" width="48">       |
|       `atom`       |       <img src="./icons/single/Atom.svg" width="48">       |
|        `au`        |     <img src="./icons/single/Audition.svg" width="48">     |
|     `autocad`      |    <img src="./icons/dark/AutoCAD-Dark.svg" width="48">    |
|       `aws`        |      <img src="./icons/dark/AWS-Dark.svg" width="48">      |
|       `azul`       |       <img src="./icons/single/Azul.svg" width="48">       |
|      `azure`       |     <img src="./icons/dark/Azure-Dark.svg" width="48">     |
|      `babel`       |      <img src="./icons/single/Babel.svg" width="48">       |
|       `bash`       |     <img src="./icons/dark/Bash-Dark.svg" width="48">      |
|       `bevy`       |     <img src="./icons/dark/Bevy-Dark.svg" width="48">      |
|    `bitbucket`     |   <img src="./icons/dark/BitBucket-Dark.svg" width="48">   |
|     `blender`      |    <img src="./icons/dark/Blender-Dark.svg" width="48">    |
|    `bootstrap`     |    <img src="./icons/single/Bootstrap.svg" width="48">     |
|       `bsd`        |      <img src="./icons/dark/BSD-Dark.svg" width="48">      |
|       `bun`        |      <img src="./icons/dark/Bun-Dark.svg" width="48">      |
|        `c`         |        <img src="./icons/single/C.svg" width="48">         |
|        `cs`        |        <img src="./icons/single/CS.svg" width="48">        |
|       `cpp`        |       <img src="./icons/single/CPP.svg" width="48">        |
|     `crystal`      |    <img src="./icons/dark/Crystal-Dark.svg" width="48">    |
|    `cassandra`     |   <img src="./icons/dark/Cassandra-Dark.svg" width="48">   |
|      `clion`       |     <img src="./icons/dark/CLion-Dark.svg" width="48">     |
|     `clojure`      |    <img src="./icons/dark/Clojure-Dark.svg" width="48">    |
|    `cloudflare`    |  <img src="./icons/dark/Cloudflare-Dark.svg" width="48">   |
|      `cmake`       |     <img src="./icons/dark/CMake-Dark.svg" width="48">     |
|     `codepen`      |    <img src="./icons/dark/CodePen-Dark.svg" width="48">    |
|   `coffeescript`   | <img src="./icons/dark/CoffeeScript-Dark.svg" width="48">  |
|       `css`        |       <img src="./icons/single/CSS.svg" width="48">        |
|     `cypress`      |    <img src="./icons/dark/Cypress-Dark.svg" width="48">    |
|        `d3`        |      <img src="./icons/dark/D3-Dark.svg" width="48">       |
|       `dart`       |     <img src="./icons/dark/Dart-Dark.svg" width="48">      |
|      `debian`      |    <img src="./icons/dark/Debian-Dark.svg" width="48">     |
|       `deno`       |     <img src="./icons/dark/DENO-Dark.svg" width="48">      |
|      `devto`       |     <img src="./icons/dark/DevTo-Dark.svg" width="48">     |
|     `discord`      |     <img src="./icons/single/Discord.svg" width="48">      |
|       `bots`       |   <img src="./icons/single/DiscordBots.svg" width="48">    |
|    `discordjs`     |   <img src="./icons/dark/DiscordJS-Dark.svg" width="48">   |
|      `django`      |      <img src="./icons/single/Django.svg" width="48">      |
|      `docker`      |      <img src="./icons/single/Docker.svg" width="48">      |
|      `dotnet`      |      <img src="./icons/single/DotNet.svg" width="48">      |
|     `dynamodb`     |   <img src="./icons/dark/DynamoDB-Dark.svg" width="48">    |
|     `eclipse`      |    <img src="./icons/dark/Eclipse-Dark.svg" width="48">    |
|  `elasticsearch`   | <img src="./icons/dark/Elasticsearch-Dark.svg" width="48"> |
|     `electron`     |     <img src="./icons/single/Electron.svg" width="48">     |
|      `elixir`      |    <img src="./icons/dark/Elixir-Dark.svg" width="48">     |
|      `elysia`      |    <img src="./icons/dark/Elysia-Dark.svg" width="48">     |
|      `emacs`       |      <img src="./icons/single/Emacs.svg" width="48">       |
|      `ember`       |      <img src="./icons/single/Ember.svg" width="48">       |
|     `emotion`      |    <img src="./icons/dark/Emotion-Dark.svg" width="48">    |
|     `express`      |   <img src="./icons/dark/ExpressJS-Dark.svg" width="48">   |
|     `fastapi`      |     <img src="./icons/single/FastAPI.svg" width="48">      |
|    `fediverse`     |   <img src="./icons/dark/Fediverse-Dark.svg" width="48">   |
|      `figma`       |     <img src="./icons/dark/Figma-Dark.svg" width="48">     |
|     `firebase`     |   <img src="./icons/dark/Firebase-Dark.svg" width="48">    |
|      `flask`       |     <img src="./icons/dark/Flask-Dark.svg" width="48">     |
|     `flutter`      |    <img src="./icons/dark/Flutter-Dark.svg" width="48">    |
|      `forth`       |      <img src="./icons/single/Forth.svg" width="48">       |
|     `fortran`      |     <img src="./icons/single/Fortran.svg" width="48">      |
| `gamemakerstudio`  |     <img src="./icons/GameMakerStudio.svg" width="48">     |
|      `gatsby`      |      <img src="./icons/single/Gatsby.svg" width="48">      |
|       `gcp`        |      <img src="./icons/dark/GCP-Dark.svg" width="48">      |
|       `git`        |       <img src="./icons/single/Git.svg" width="48">        |
|      `github`      |    <img src="./icons/dark/Github-Dark.svg" width="48">     |
|  `githubactions`   | <img src="./icons/dark/GithubActions-Dark.svg" width="48"> |
|      `gitlab`      |    <img src="./icons/dark/GitLab-Dark.svg" width="48">     |
|      `gmail`       |     <img src="./icons/dark/Gmail-Dark.svg" width="48">     |
|     `gherkin`      |    <img src="./icons/dark/Gherkin-Dark.svg" width="48">    |
|        `go`        |      <img src="./icons/single/GoLang.svg" width="48">      |
|      `gradle`      |    <img src="./icons/dark/Gradle-Dark.svg" width="48">     |
|      `godot`       |     <img src="./icons/dark/Godot-Dark.svg" width="48">     |
|     `grafana`      |    <img src="./icons/dark/Grafana-Dark.svg" width="48">    |
|     `graphql`      |    <img src="./icons/dark/GraphQL-Dark.svg" width="48">    |
|       `gtk`        |      <img src="./icons/dark/GTK-Dark.svg" width="48">      |
|       `gulp`       |       <img src="./icons/single/Gulp.svg" width="48">       |
|     `haskell`      |    <img src="./icons/dark/Haskell-Dark.svg" width="48">    |
|       `haxe`       |     <img src="./icons/dark/Haxe-Dark.svg" width="48">      |
|    `haxeflixel`    |  <img src="./icons/dark/HaxeFlixel-Dark.svg" width="48">   |
|      `heroku`      |      <img src="./icons/single/Heroku.svg" width="48">      |
|    `hibernate`     |   <img src="./icons/dark/Hibernate-Dark.svg" width="48">   |
|       `html`       |       <img src="./icons/single/HTML.svg" width="48">       |
|       `htmx`       |     <img src="./icons/dark/Htmx-Dark.svg" width="48">      |
|       `idea`       |     <img src="./icons/dark/Idea-Dark.svg" width="48">      |
|        `ai`        |   <img src="./icons/single/Illustrator.svg" width="48">    |
|    `instagram`     |    <img src="./icons/single/Instagram.svg" width="48">     |
|       `ipfs`       |     <img src="./icons/dark/IPFS-Dark.svg" width="48">      |
|       `java`       |     <img src="./icons/dark/Java-Dark.svg" width="48">      |
|        `js`        |    <img src="./icons/single/JavaScript.svg" width="48">    |
|     `jenkins`      |    <img src="./icons/dark/Jenkins-Dark.svg" width="48">    |
|       `jest`       |       <img src="./icons/single/Jest.svg" width="48">       |
|      `jquery`      |      <img src="./icons/single/JQuery.svg" width="48">      |
|      `kafka`       |      <img src="./icons/single/Kafka.svg" width="48">       |
|       `kali`       |     <img src="./icons/dark/Kali-Dark.svg" width="48">      |
|      `kotlin`      |    <img src="./icons/dark/Kotlin-Dark.svg" width="48">     |
|       `ktor`       |     <img src="./icons/dark/Ktor-Dark.svg" width="48">      |
|    `kubernetes`    |    <img src="./icons/single/Kubernetes.svg" width="48">    |
|     `laravel`      |    <img src="./icons/dark/Laravel-Dark.svg" width="48">    |
|      `latex`       |     <img src="./icons/dark/LaTeX-Dark.svg" width="48">     |
|       `less`       |     <img src="./icons/dark/Less-Dark.svg" width="48">      |
|     `linkedin`     |     <img src="./icons/single/LinkedIn.svg" width="48">     |
|      `linux`       |     <img src="./icons/dark/Linux-Dark.svg" width="48">     |
|       `lit`        |      <img src="./icons/dark/Lit-Dark.svg" width="48">      |
|       `lua`        |      <img src="./icons/dark/Lua-Dark.svg" width="48">      |
|        `md`        |   <img src="./icons/dark/Markdown-Dark.svg" width="48">    |
|     `mastodon`     |   <img src="./icons/dark/Mastodon-Dark.svg" width="48">    |
|    `materialui`    |  <img src="./icons/dark/MaterialUI-Dark.svg" width="48">   |
|      `matlab`      |    <img src="./icons/dark/Matlab-Dark.svg" width="48">     |
|      `maven`       |     <img src="./icons/dark/Maven-Dark.svg" width="48">     |
|       `mint`       |     <img src="./icons/dark/Mint-Dark.svg" width="48">      |
|     `misskey`      |    <img src="./icons/dark/Misskey-Dark.svg" width="48">    |
|     `mongodb`      |     <img src="./icons/single/MongoDB.svg" width="48">      |
|      `mysql`       |     <img src="./icons/dark/MySQL-Dark.svg" width="48">     |
|      `neovim`      |    <img src="./icons/dark/NeoVim-Dark.svg" width="48">     |
|      `nestjs`      |    <img src="./icons/dark/NestJS-Dark.svg" width="48">     |
|     `netlify`      |    <img src="./icons/dark/Netlify-Dark.svg" width="48">    |
|      `nextjs`      |    <img src="./icons/dark/NextJS-Dark.svg" width="48">     |
|      `nginx`       |      <img src="./icons/single/Nginx.svg" width="48">       |
|       `nim`        |      <img src="./icons/dark/Nim-Dark.svg" width="48">      |
|       `nix`        |      <img src="./icons/dark/Nix-Dark.svg" width="48">      |
|      `nodejs`      |    <img src="./icons/dark/NodeJS-Dark.svg" width="48">     |
|      `notion`      |    <img src="./icons/dark/Notion-Dark.svg" width="48">     |
|       `npm`        |      <img src="./icons/dark/Npm-Dark.svg" width="48">      |
|      `nuxtjs`      |    <img src="./icons/dark/NuxtJS-Dark.svg" width="48">     |
|     `obsidian`     |   <img src="./icons/dark/Obsidian-Dark.svg" width="48">    |
|      `ocaml`       |      <img src="./icons/single/OCaml.svg" width="48">       |
|      `octave`      |    <img src="./icons/dark/Octave-Dark.svg" width="48">     |
|         ``         |       <img src="./icons/dark/-Dark.svg" width="48">        |
|    `openshift`     |        <img src="./icons/OpenShift.svg" width="48">        |
|    `openstack`     |   <img src="./icons/dark/OpenStack-Dark.svg" width="48">   |
|       `p5js`       |       <img src="./icons/single/p5js.svg" width="48">       |
|       `perl`       |       <img src="./icons/single/Perl.svg" width="48">       |
|        `ps`        |    <img src="./icons/single/Photoshop.svg" width="48">     |
|       `php`        |      <img src="./icons/dark/PHP-Dark.svg" width="48">      |
|     `phpstorm`     |   <img src="./icons/dark/PhpStorm-Dark.svg" width="48">    |
|      `pinia`       |     <img src="./icons/dark/Pinia-Dark.svg" width="48">     |
|       `pkl`        |      <img src="./icons/dark/Pkl-Dark.svg" width="48">      |
|      `plan9`       |     <img src="./icons/dark/Plan9-Dark.svg" width="48">     |
|   `planetscale`    |  <img src="./icons/dark/PlanetScale-Dark.svg" width="48">  |
|       `pnpm`       |     <img src="./icons/dark/Pnpm-Dark.svg" width="48">      |
|     `postgres`     |  <img src="./icons/dark/PostgreSQL-Dark.svg" width="48">   |
|     `postman`      |     <img src="./icons/single/Postman.svg" width="48">      |
|    `powershell`    |  <img src="./icons/dark/Powershell-Dark.svg" width="48">   |
|        `pr`        |     <img src="./icons/single/Premiere.svg" width="48">     |
|      `prisma`      |      <img src="./icons/single/Prisma.svg" width="48">      |
|    `processing`    |  <img src="./icons/dark/Processing-Dark.svg" width="48">   |
|    `prometheus`    |    <img src="./icons/single/Prometheus.svg" width="48">    |
|       `pug`        |      <img src="./icons/dark/Pug-Dark.svg" width="48">      |
|     `pycharm`      |    <img src="./icons/dark/PyCharm-Dark.svg" width="48">    |
|        `py`        |    <img src="./icons/dark/Python-Dark.svg" width="48">     |
|     `pytorch`      |    <img src="./icons/dark/PyTorch-Dark.svg" width="48">    |
|        `qt`        |      <img src="./icons/dark/QT-Dark.svg" width="48">       |
|        `r`         |       <img src="./icons/dark/R-Dark.svg" width="48">       |
|     `rabbitmq`     |   <img src="./icons/dark/RabbitMQ-Dark.svg" width="48">    |
|      `rails`       |      <img src="./icons/single/Rails.svg" width="48">       |
|   `raspberrypi`    |  <img src="./icons/dark/RaspberryPi-Dark.svg" width="48">  |
|      `react`       |     <img src="./icons/dark/React-Dark.svg" width="48">     |
|    `reactivex`     |   <img src="./icons/dark/ReactiveX-Dark.svg" width="48">   |
|      `redhat`      |    <img src="./icons/dark/RedHat-Dark.svg" width="48">     |
|      `redis`       |     <img src="./icons/dark/Redis-Dark.svg" width="48">     |
|      `redux`       |      <img src="./icons/single/Redux.svg" width="48">       |
|      `regex`       |     <img src="./icons/dark/Regex-Dark.svg" width="48">     |
|      `remix`       |     <img src="./icons/dark/Remix-Dark.svg" width="48">     |
|      `replit`      |    <img src="./icons/dark/Replit-Dark.svg" width="48">     |
|      `rider`       |     <img src="./icons/dark/Rider-Dark.svg" width="48">     |
|   `robloxstudio`   |   <img src="./icons/single/RobloxStudio.svg" width="48">   |
|      `rocket`      |      <img src="./icons/single/Rocket.svg" width="48">      |
|     `rollupjs`     |   <img src="./icons/dark/RollupJS-Dark.svg" width="48">    |
|       `ros`        |      <img src="./icons/dark/ROS-Dark.svg" width="48">      |
|       `ruby`       |       <img src="./icons/single/Ruby.svg" width="48">       |
|       `rust`       |       <img src="./icons/single/Rust.svg" width="48">       |
|       `sass`       |       <img src="./icons/single/Sass.svg" width="48">       |
|      `spring`      |    <img src="./icons/dark/Spring-Dark.svg" width="48">     |
|      `sqlite`      |      <img src="./icons/single/SQLite.svg" width="48">      |
|  `stackoverflow`   | <img src="./icons/dark/StackOverflow-Dark.svg" width="48"> |
| `styledcomponents` | <img src="./icons/single/StyledComponents.svg" width="48"> |
|     `sublime`      |    <img src="./icons/dark/Sublime-Dark.svg" width="48">    |
|     `supabase`     |   <img src="./icons/dark/Supabase-Dark.svg" width="48">    |
|      `scala`       |     <img src="./icons/dark/Scala-Dark.svg" width="48">     |
|     `sklearn`      |  <img src="./icons/dark/ScikitLearn-Dark.svg" width="48">  |
|     `selenium`     |     <img src="./icons/single/Selenium.svg" width="48">     |
|      `sentry`      |      <img src="./icons/single/Sentry.svg" width="48">      |
|    `sequelize`     |   <img src="./icons/dark/Sequelize-Dark.svg" width="48">   |
|     `sketchup`     |   <img src="./icons/dark/Sketchup-Dark.svg" width="48">    |
|     `solidity`     |     <img src="./icons/single/Solidity.svg" width="48">     |
|     `solidjs`      |    <img src="./icons/dark/SolidJS-Dark.svg" width="48">    |
|      `svelte`      |      <img src="./icons/single/Svelte.svg" width="48">      |
|       `svg`        |      <img src="./icons/dark/SVG-Dark.svg" width="48">      |
|      `swift`       |      <img src="./icons/single/Swift.svg" width="48">       |
|     `symfony`      |    <img src="./icons/dark/Symfony-Dark.svg" width="48">    |
|     `tailwind`     |  <img src="./icons/dark/TailwindCSS-Dark.svg" width="48">  |
|      `tauri`       |     <img src="./icons/dark/Tauri-Dark.svg" width="48">     |
|    `tensorflow`    |  <img src="./icons/dark/TensorFlow-Dark.svg" width="48">   |
|    `terraform`     |   <img src="./icons/dark/Terraform-Dark.svg" width="48">   |
|     `threejs`      |    <img src="./icons/dark/ThreeJS-Dark.svg" width="48">    |
|     `twitter`      |     <img src="./icons/single/Twitter.svg" width="48">      |
|        `ts`        |    <img src="./icons/single/TypeScript.svg" width="48">    |
|      `ubuntu`      |    <img src="./icons/dark/Ubuntu-Dark.svg" width="48">     |
|      `unity`       |     <img src="./icons/dark/Unity-Dark.svg" width="48">     |
|      `unreal`      |   <img src="./icons/single/UnrealEngine.svg" width="48">   |
|        `v`         |       <img src="./icons/dark/V-Dark.svg" width="48">       |
|       `vala`       |       <img src="./icons/single/Vala.svg" width="48">       |
|      `vercel`      |    <img src="./icons/dark/Vercel-Dark.svg" width="48">     |
|       `vim`        |      <img src="./icons/dark/VIM-Dark.svg" width="48">      |
|   `visualstudio`   | <img src="./icons/dark/VisualStudio-Dark.svg" width="48">  |
|       `vite`       |     <img src="./icons/dark/Vite-Dark.svg" width="48">      |
|      `vitest`      |    <img src="./icons/dark/Vitest-Dark.svg" width="48">     |
|      `vscode`      |    <img src="./icons/dark/VSCode-Dark.svg" width="48">     |
|     `vscodium`     |   <img src="./icons/dark/VSCodium-Dark.svg" width="48">    |
|       `vue`        |     <img src="./icons/dark/VueJS-Dark.svg" width="48">     |
|     `vuetify`      |    <img src="./icons/dark/Vuetify-Dark.svg" width="48">    |
|       `wasm`       |   <img src="./icons/single/WebAssembly.svg" width="48">    |
|     `webflow`      |     <img src="./icons/single/Webflow.svg" width="48">      |
|     `webpack`      |    <img src="./icons/dark/Webpack-Dark.svg" width="48">    |
|     `webstorm`     |   <img src="./icons/dark/WebStorm-Dark.svg" width="48">    |
|     `windicss`     |   <img src="./icons/dark/WindiCSS-Dark.svg" width="48">    |
|     `windows`      |    <img src="./icons/dark/Windows-Dark.svg" width="48">    |
|    `wordpress`     |    <img src="./icons/single/Wordpress.svg" width="48">     |
|     `workers`      |    <img src="./icons/dark/Workers-Dark.svg" width="48">    |
|        `xd`        |        <img src="./icons/single/XD.svg" width="48">        |
|       `yarn`       |     <img src="./icons/dark/Yarn-Dark.svg" width="48">      |
|       `yew`        |      <img src="./icons/dark/Yew-Dark.svg" width="48">      |
|       `zig`        |      <img src="./icons/dark/Zig-Dark.svg" width="48">      |

# Self-hosting your own Clouflare worker

TODO readme :]
