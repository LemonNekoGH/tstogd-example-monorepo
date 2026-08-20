# tstogd external package monorepo

This minimal Yarn workspace demonstrates a Godot application importing a
TypeScript source package from the same monorepo.

The sample installs tstogd from the fork's
`demo/external-package-sources` branch, which contains the prebuilt package for
this temporary Git dependency. Run:

```sh
mise trust
mise install
yarn install
yarn verify
```

`@tstogd-example/game` imports `@tstogd-example/shared` normally. There is no
list of package source files in `tstogd.json`: tstogd follows the runtime import
graph through the package's `exports` entry.

The conversion writes the application script to `packages/game/scripts/` and
the reachable package scripts to:

```text
packages/game/.tstogd_modules/@tstogd-example/shared/1.0.0/src/
```

`packages/game/scripts/Main.gd` preloads the staged `index.gd`, which in turn
preloads `answer.gd`. The original TypeScript files remain in the workspace
package and are never copied into the Godot project.
