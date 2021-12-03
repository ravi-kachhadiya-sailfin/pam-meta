# Project Name

Pause A Moment

# TDS-AS Common

> Parent project for TDS-AS frontend applications using React

## Purpose

TDS-AS Common is intended to increase the efficiency and quality of frontend application development by leveraging common code, project structure, and best practices. Because TDS-AS applications share similar functionality, architecture, and UX design, TDS-AS Common helps to minimize the additional code that must be developed for each frontend application. As the portfolio of TDS-AS applications grows and TDS-AS Common is enhanced, the time, cost, and quality benefits will increase.

## Method

A new frontend project is forked from the TDS-AS Common project and is regularly updated with changes from TDS-AS Common. The application code is developed within a specific area of the project: src/app. The rest of the project contains the common code and configuration which the application uses. Because the common code is available alongside the application code and can be easily experimented with, improvements can be tested and contributed back to TDS-AS Common for all applications to leverage.

## Previous Approach

Previously, applications were built on a starter project ([TDS-AS Frontend Starter](https://gitlab.med.stanford.edu/irt-as/tools/project-starters/as-frontend-starter#building-and-running-the-as-frontend-starter-application)) and used a component library ([TDS-AS Components](https://gitlab.med.stanford.edu/irt-as/libs/as-components)). TDS-AS Common combines and replaces these two projects. Advantages to this new approach include making it easier to upgrade applications and to develop improvements to the common code.

## Features

- Build toolchain provided by [Create React App](https://github.com/facebook/create-react-app)
- Build and deployment configuration files for GitLab and Google Cloud Platform (GCP)
- Dependency management using npm, and dependency updating using Renovate
- Installation of standard packages used in TDS-AS projects, including Material UI, Formik and Yup, React Router, and Axios
- Components for building common parts of the user interface
- Common services for backend integration and state management (such as authentication and tokens)
- Common theme settings, consistent with branding guidelines
- [Visual Studio Code](https://code.visualstudio.com/) configuration settings and recommended extensions
- Debugging within Visual Studio Code
- Hot reloading of updated code in development mode
- Linting with ESLint and SonarLint, including accessibility linting
- Test infrastructure using React Testing Library (and soon MSW for mocking)
- Code formatting with Prettier
- Runnable within a provided Docker container (via [Visual Studio Code Remote Development](https://code.visualstudio.com/docs/remote/containers))
- Centralized string management using react-i18next
- Handling of API errors with display of either default or customized messages
- Project configured to use absolute imports instead of relative
- Bundle size analysis and Web Vitals performance analysis available
- Typescript enabled but not required
- Common environment variables
- Google Analytics integration (must be configured)

## Future Plans

- New and improved components and services
- Expanded sample application to demonstrate best practices
- Tests
- Issue tracking and roadmap
- Slack channel

## Creating a New Application

Note: For the application to build and deploy, additional setup is required outside this application:

- A subgroup must be created in GitLab if one doesn't already exist for the project
- The backend application must implement a GET users/me endpoint (or one can be mocked on the frontend) with a response body in this format: { displayName: "", permissions: {}, roles: [], uid: "" }
- The build and deployment environments must be provisioned in GitLab and GCP
- The Keycloak client IDs must be provisioned in Red Hat SSO
- Vault must be configured for project secrets used by the backend application
- Also, the project should be added to Renovate for dependency updating

Follow the steps below to fork from TDS-AS Common, configure the application, and then verify and commit it. The project slug used below is the kebab-cased version of the GitLab project name and is included in the project URL. The subgroup slug is the kebab-cased version of the GitLab subgroup name and is also included in the project URL. Usually the project name is set to the subgroup name with " UI" appended, for example subgroup "Faculty Onboarding" and project "Faculty Onboarding UI". In this example the subgroup slug is "faculty-onboarding" and the project slug is "faculty-onboarding-ui".

1. Go to https://gitlab.med.stanford.edu/irt-as/libs/tds-as-common and click the Fork button near the top of the page.

2. Select the project’s subgroup (or namespace) where TDS-AS Common should be forked.

3. Once the forked project opens, go to Settings/General and change and save the Project name (the name should end in " UI").

4. Click Advanced, scroll down to Change path, replace the project slug "tds-as-common" with the correct one for the project, and save the change.

5. Clone the project to your local system and open it in [Visual Studio Code](https://code.visualstudio.com/).

6. Edit and save the following files:

- **package.json**: Change the "name" value to the project slug, and change the "version" value to "0.1.0".
- **src/app/shared/translation.json**: Update the "app.logoTitle" and "app.logoSubtitle" values for the application (the "app.logoSubtitle" value can optionally be set to ""). Also, the "app.supportEmail" value needs to be updated either now or later.
- **public/index.html**: Update the title tag (line 24) and the description meta tag content (line 8) for the application.
- **public/manifest.json**: Update the "short_name" and "name" values for the application.
- **.env**: Find and replace the string "project-slug" with the project slug. Note: to run the application before the Keycloak client IDs are provisioned, temporarily set REACT_APP_KEYCLOAK_CLIENT_ID_BASE=dev-local-react-webapp
- **.env.production**: Find and replace the string "subgroup-slug" with the subgroup slug.
- **`env.sh`**: Find and replace the string "subgroup-slug" with the subgroup slug.
- **.gitlab-ci.yml.rename**: Rename this file to .gitlab-ci.yml

7. Test the application by installing dependencies and running it locally:

   ```sh
   npm ci
   npm start
   ```

   The new application should open in the browser at http://localhost:3000/

8. Verify the testing infrastructure is working and the default test passes:

   ```sh
   npm test
   ```

9. If all configuration is done and steps 7 and 8 ran successfully, commit and push the changes:

   ```sh
   git checkout -b feature/initial_commit
   git add .
   git commit -m "Initial commit"
   git push origin feature/initial_commit
   ```

10. Edit this README file, deleting everything except the sections following this one and adding details about the application at the top of the file. Commit the changes.

---

Keep the sections below in the application `README.md` file

## Application Code vs Common Code

All application-specific code should be added within the src/app folder tree. The file src/app/App.js is the base file for the application. All code outside of src/app is common code used in all applications and is maintained in the parent project [TDS-AS Common](https://gitlab.med.stanford.edu/irt-as/libs/tds-as-common).

The common code is available alongside the application code to make it easier to develop and test improvements to the common code (see [Contributing to TDS-AS Common](#contributing-to-tds-as-common)). In almost all cases, any changes to the common code should be temporary and either contributed to TDS-AS Common or discarded. Keeping the common code in sync with TDS-AS Common is important to avoid merge conflicts when this project is periodically updated with new releases of TDS-AS Common.

## Local Development Environment

All development should be done in [Visual Studio Code](https://code.visualstudio.com/). The frontend application can be run either inside or outside the provided Docker container. When opening the project, VS Code will ask if you want to use the container. For connecting to the backend API, you can either run the backend project locally (in another Docker container) or use a backend deployed in the cloud (see [Running Locally Using a Remote Backend](#running-locally-using-a-remote-backend)).

## Some Coding Rules

- Use [Absolute Imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports) instead of relative imports, for example:

  ```sh
  import { DocumentsTable } from "app/documents/DocumentsTable";
  import { useUsers } from "common";
  ```

- Import Material UI components as Mui\<component name\>, for example:

  ```sh
  import { TextField as MuiTextField } from "@material-ui/core";
  ```

- Don't disable lint rules in the code, and fix all ESLint and SonarLint warnings. Also, fix all warnings displayed in the Console in Chrome DevTools (or other browser).

## Branches and Pushing Commits

The GitLab repository has a single long-lived branch named "main". Feature branches should be created for application code changes, and merge requests created for pushed branches. All branch names should start with "feature/", and features branches should be squashed and deleted when merged with main.

Important: Because this project is forked from [TDS-AS Common](https://gitlab.med.stanford.edu/irt-as/libs/tds-as-common), GitLab always defaults the target branch to tds-as-common/main instead of the remote for this project. When creating a merge request in GitLab, you must first click "Change branches" and then on the next screen change the "Target branch" repository. Otherwise, the merge request will be on the parent repository (tds-as-common) instead of the application repository.

## Building and Running

Initially and whenever you pull an updated package.json, update your local dependencies (stored in the node_modules folder):

```sh
npm ci
```

Launch a development build of the application in your browser (at localhost:3000):

```sh
npm start
```

## Running Tests and Lint

Run the application's tests:

```sh
npm test
```

Lint the code base with ESLint:

```sh
npm run lint
```

Note: This command will not run SonarLint. You can only view SonarLint warnings within VSCode.

## Debugging

The debugger can be launched from within VS Code.

Another extremely useful tool is the Chrome extension [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).

## Running Locally Using a Remote Backend

If you don't need to build and run the backend application locally, the local frontend can connect to a backend deployed in the cloud.

Edit the .env.development file and change REACT_APP_API_BASEURL to a backend API URL (don't commit this change). For example, for the Training Grants backend in the dev environment:

```sh
REACT_APP_API_BASEURL=https://training-grants-api-dev.med.stanford.edu/api/v1
```

## Running a Production Build Locally

The production build created with `npm run build` can be run in any of the cloud environments: dev, uat, stage, prod. The production build's SSO and API URL settings are customized at runtime using the DEPLOY_ENV value set in the public/env.js file. To test a production build locally, follow these steps (in this case using the cloud dev environment for the backend):

1. Edit the .env file and change REACT_APP_CLOUD_PRODUCTION_BUILD to false (don't commit this change):

   ```sh
   REACT_APP_CLOUD_PRODUCTION_BUILD=false
   ```

2. Open the public/env.js file and verify the DEPLOY_ENV constant is set to "dev":

   ```sh
   const DEPLOY_ENV = "dev";
   ```

3. Build the application locally:

   ```sh
   npm run build
   ```

4. Run the production build in the browser:

   ```sh
   npx serve -s build -l 3000
   ```

   Finally, go to localhost:3000 in the browser. If you make changes to the application and want to run an updated production build, run steps 3 and 4 again.

## Updating from TDS-AS Common

To keep the common code in the application up-to-date with the parent (see the [TDS-AS Common changelog](https://gitlab.med.stanford.edu/irt-as/libs/tds-as-common/-/blob/main/CHANGELOG.md)), periodic rebases are necessary. Follow the steps below to rebase this project.

1. Set the upstream repository to tds-as-common (this only needs to be run once):

   ```sh
   git remote add upstream git@gitlab.med.stanford.edu:irt-as/libs/tds-as-common.git
   ```

2. Rebase from TDS-AS Common:

   ```sh
   git pull --rebase upstream main
   ```

   Resolve all merge conflicts, which can be done in VS Code.

3. Commit changes locally with the commit message "as-common \<major\>.\<minor\>.\<patch\>", substituting the current TDS-AS Common version.

4. Push to the main branch of the project:

   ```sh
   git push --force origin main
   ```

## Contributing to TDS-AS Common

Contributions (including bug fixes) that are useful across the portfolio of TDS-AS applications are welcome! Thoroughly test the contribution within an existing application, and then create a merge request in [TDS-AS Common](https://gitlab.med.stanford.edu/irt-as/libs/tds-as-common). Include good notes in your merge request description. All code changes and additions should be within the src/common folder tree. Please contact [Steve Morris](mailto:stevemorris@stanfordhealthcare.org) with any questions.

## Manually Updating Dependencies

Note: Dependency updating is automated by [Renovate](https://renovatebot.com), which creates merge requests to update packages in the project's package.json and package-lock.json files. If you choose to update dependencies manually, use the steps below.

1. In the project's package.json file, update the version number of each package to the latest (Exceptions: keycloak-js and @date-io/date-fns must stay at their current major versions). An easy way to update package versions in package.json is to use the [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) extension in VS Code.

2. After saving the package.json file, regenerate the package-lock.json file and install dependencies:

   ```sh
   rm -rf package-lock.json node_modules/
   npm install
   ```

   If both `npm start` and `npm test` run successfully, commit the package.json and package-lock.json files.

## Analyzing Application Bundle Size

As the application is developed, it's important to pay attention to the bundle size of the production build. You should check that there are no large and unnecessary increases in bundle size due to how the application is importing packages. Typically using named imports is enough to prevent unused code from being included in the bundle, but this may not always be the case for older packages that don't support tree shaking. To verify the bundle size increase is not larger than expected when importing from a package for the first time, it's a good idea to check the bundle size before and after.

Run the following command to see the gzipped bundle sizes:

```sh
npm run build
```

You can use [source-map-explorer](https://github.com/danvk/source-map-explorer#readme) to determine which packages are contributing the most to the bundle size of the application. This tool shows the uncompressed sizes before gzip.

Run the following command to generate the analysis:

```sh
npm run analyze
```

Other useful tools are the [BundlePhobia](https://bundlephobia.com/) website and the Import Cost extension in VS Code (which you already have installed if you accepted the recommended extensions).
