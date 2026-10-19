# Building Jago World

Use Windows x64 and Microsoft Edge WebView2 Runtime. Install Node.js for the browser build and the .NET Framework C# compiler for the Windows host.

From this repository, run **Build.ps1** in PowerShell. The wrapper uses the included WebView2 SDK. Edit the files under **Source**, then rebuild; generated HTML is build output.

Keep licence notices with redistributed code and binaries.

## Refinement checks

With Playwright and Microsoft Edge available, run `node Source/Tests/world-refresher.cjs` after building. It checks preview/cancel, Undo, grouping, surface validation, world findings, seeded directions and project reopening.

`node Source/Tests/geography-refresher.cjs` creates three harbour fixtures and a continental world, validates projects and writes PNG proofs. `node Source/Tests/seed-sweep.cjs` exercises additional layouts and harbours. Output locations are defined in the scripts.

`node Source/Tests/world-integration.cjs` expects Jago-Repeat-Studio and Jago-Material-Studio beside this checkout. It uses their real adapters and checks texture scales/pixels, outgoing original data and middle-mouse navigation.

For Windows checks, copy Source/Native-probes/world-refresher.js into a new isolated folder as probe.js. Launch Jago-World.exe with `--test` followed by that folder. The native harness writes result.json and closes. Keep test profiles separate from your working profile. These checks do not exercise installer maintenance or every Workscape route.
