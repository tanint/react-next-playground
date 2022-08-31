# Setup

Install Node

```
nvm use
```

Install dependencies:

```
yarn
```

## Local Development

```
yarn dev
```

Runs the project in development. Fast Refresh will update the code only for that
file, and re-render your component.

## Build for production

```
yarn build
```

Creates an optimized production build of application. The output displays
information about each route.

## Start built version

```
yarn start
```

### Docker

```
docker-compose up --build
```

## HTTPS for local development

### Installation procedure:

- `brew install mkcert nss certutil` (installs certificate generation utilities
  locally, certutil is necessary for firefox)
- `mkcert -install` (sets up registries with browsers and the certificate store)
- `mkcert localhost` (creates .pem files for localhost, in the root folder, you
  can put them elsewhere)

### Running HTTPS version of the app:

- `yarn dev` start yarn dev in a CLI instance (starts app at localhost:3000)
- `yarn proxy:https` in another CLI instance (which will trigger local-ssl-proxy
  to proxy at localhost:4001)
- open the site at localhost:4001 and it should show up without any warnings

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).
