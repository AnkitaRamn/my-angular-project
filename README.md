# LearnAngular19

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Angular Project – Key Files Summary
----------------------------------

This document explains the purpose of the key files and folders used in an Angular application.

1. angular.json
----------------
This file is the main configuration file for the Angular project.
It defines project settings such as build options, output paths,
assets, styles, scripts, and development/production configurations.

2. package.json
----------------
This file contains project metadata and dependency information.
It lists all required npm packages such as Angular core, RxJS,
and other libraries, along with scripts used to run, build,
and test the application.

3. node_modules
----------------
This folder contains all third-party libraries installed using npm.
Angular and its dependencies are loaded from this folder.
It is generated automatically and should not be edited manually.

4. src folder
--------------
The src folder contains the main source code of the Angular application.

5. main.ts
-----------
This is the entry point of the Angular application.
It bootstraps the root module or root component and starts the application.

6. app.module.ts
-----------------
This file defines the root module of the Angular application.
It declares components, imports other modules, provides services,
and specifies the root component to bootstrap.

7. app.component.ts
--------------------
This is the root component of the application.
It controls the main UI layout and acts as the parent component
for all other components.

8. app.component.html
----------------------
This file contains the HTML template for the root component.
It defines the structure of the user interface.

9. app.component.css / scss
----------------------------
This file contains styles related to the root component.
It is used to control the appearance of the UI.

10. assets folder
------------------
This folder stores static files such as images, icons, and JSON files.
These files are copied directly to the build output.

11. environments folder
------------------------
This folder contains environment-specific configuration files
such as API URLs for development and production.

12. tsconfig.json
------------------
This file defines TypeScript compiler options.
It controls how TypeScript code is compiled into JavaScript.

Conclusion
-----------
These key files work together to define the structure, configuration,
and execution of an Angular application. Understanding these files
helps in developing, debugging, and maintaining Angular projects.

1️⃣ Application Component Files
app.component.ts

This is the root (main) component of the Angular application.

It controls the main UI logic.

Every other component is rendered inside this component.

app.component.html

This file contains the HTML template of the root component.

It defines what is displayed on the screen.

Example: header, router outlet, menus.

app.component.css / app.component.scss

This file contains styles for the root component.

Used to control layout, colors, fonts, and responsiveness.

📌 Purpose:
Handles the main user interface and acts as the entry UI for the application.

2️⃣ Application Module Files
app.module.ts

This is the root module of the Angular application.

It connects components, services, and external modules.

It contains:

declarations → Components used in the app

imports → Angular modules (FormsModule, HttpClientModule, etc.)

providers → Services

bootstrap → Root component to load

📌 Purpose:
Defines how the application is structured and which components and modules are used.

3️⃣ Dependency Management Files
package.json

Lists all project dependencies and versions.

Includes Angular core, RxJS, Angular Material, CDK, etc.

Also defines scripts like:

npm start

npm build

📌 Purpose:
Manages external libraries and tools used by the application.

node_modules (folder)

Contains all installed third-party libraries.

Automatically created after running npm install.

📌 Purpose:
Stores all dependency code required by Angular to run.

4️⃣ Application Bootstrap & Entry Files
main.ts

Entry point of the Angular application.

Starts the app by bootstrapping the root module or component.

📌 Purpose:
Initializes and launches the Angular application.

5️⃣ Configuration & Support Files
angular.json

Angular CLI configuration file.

Defines build, serve, test, and asset settings.

tsconfig.json

TypeScript compiler configuration.

Controls how TypeScript is converted to JavaScript.

📌 Summary Table
File Name	Responsibility
app.component.ts	Root application component
app.module.ts	Root application module
main.ts	Application startup
package.json	Dependency management
node_modules	Installed libraries
angular.json	Project configuration
tsconfig.json	TypeScript configuration

✅ Conclusion (Use in Assignment)

The Angular project structure clearly separates components, modules, and dependencies.
The app.component controls the UI, app.module manages application structure, and package.json handles dependencies. Together, these files form the foundation of an Angular application.
