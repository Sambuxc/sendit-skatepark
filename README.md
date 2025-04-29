## Publishing to Github pages

Reference: https://dev.to/leamsigc/nuxt-build-vs-nuxt-generate-what-is-the-difference-759

1. To publish this app, run one of these cli cmd's:
- `nuxt build` for server-side app
- `nuxt generate` for static-site app

2. The generated files will be in the `dist` directory.
- Commit the contents of `dist` directory to the release branch
- This will trigger the github pages actions already setup for this repo

