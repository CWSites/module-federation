# module-federation

This repo will serve as an example for how to configure a host application and a remote application using Webpack 5's [Module Federation](https://module-federation.github.io/).

# Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Configuration](#configuration)
  - [Troubleshooting](#troubleshooting)
- [Host Application](#host-application)
  - [Configuring Remote Applications](#configuring-remote-applications)
    - [Running Remotely](#running-remotely)
    - [Running Locally](#running-locally)
  - [Loading Remote Components](#loading-remote-components)
    - [Using `React.lazy`](#using-reactlazy)
    - [Standard React import](#standard-react-import)
    - [Dynamically Loading Remote Components](#dynamically-loading-remote-components)
    - [Error Handling](#error-handling)
- [Remote Application](#remote-application)
  - [Remote Components](#remote-components)
- [Resources](#resources)

## Getting Started

- Clone the repo
- Run `npm install`
- Run `npm run init` to install the dependencies for the host & remote applications
- Run `npm run start` which will build the `dist` directory of each application and run both the host and the remote app on port `8080` and `8081` respectively

### Requirements

In order to utilize module federation, both the host and remote applications must be running the following, in addition it is strongly recommended although not required that both applications are using React.

- Node.js > 19.5.x
- Webpack > 5.x.x

### Configuration

The configuration for both the host and remote applications can be found in the `webpack.config.js` file of the respective directory.

Ports can be modified by updating the `serve` script in the `package.json` file.

**Note:** The `index.jsx` file in the `src` directory of the host/remote application is only used to load the `App` component. This is done a little differently from the standard `index.jsx` because of the way Module Federation works. [More info](https://webpack.js.org/concepts/module-federation/#uncaught-error-shared-module-is-not-available-for-eager-consumption)

### Troubleshooting

The `package.json` which is in the root directory uses a package called `concurrently` to run both the host and remote applications. If you're having issues with the `npm run start` command, you can run the host and remote applications separately.

If needed, you can run `npm run clean` to remove the `dist` directory from both the host and remote applications.

# Host Application

This is a top-level application which will host the remote application(s).

Runs on port `8080`

## Configuring Remote Applications

You'll need to specify which remote applications you want to load in the `webpack.config.js` file. Depending on whether you're running the remote application locally or on a remote server, you'll need to update the `remotes` object in the `webpack.config.js` file.

```js
  plugins: [
    new ModuleFederationPlugin({
      name: "host_app",
      filename: "remoteEntry.js",
      remotes: {
        remote_app:
          "remote_app@https://uniqueapp.com/remoteEntry.js",
      },
      exposes: {},
      shared: {
        react: {
          requiredVersion: false,
          singleton: true,
        },
      },
    }),
  ],
```

### Running Remotely

```js
remote_app: "remote_app@https://uniqueapp.com/remoteEntry.js";
```

### Running Locally

```js
remote_app: "remote_app@http://localhost:8081/remoteEntry.js";
```

## Loading Remote Components

There are multiple ways to import components from the remote application.

### Using `React.lazy`

```jsx
  // import HelloWorld as a default component
  const HelloWorld = React.lazy(() => import("remote_app/HelloWorld"));
  // import NonDefaultHelloWorld as a non-default component
  const NonDefaultHelloWorld = React.lazy(() => import("remote_app/HelloWorld").then(module => ({ default: module.NonDefaultHelloWorld })));

  ...
  <>
    <Suspense fallback={"loading..."}>
      <HelloWorld />
    </Suspense>
  </>
```

### Standard React import

```jsx
  import DefaultComponent, { NotDefaultComponent } from "remote_app/Components";

  ...
  <>
    <DefaultComponent />
    <NotDefaultComponent />
  </>
```

### Dynamically Loading Remote Components

This is the most flexible way to load remote components. It allows you to specify the URL, scope, and module of the remote application.

[Sample URL when running host app locally](http://localhost:8080/?url=https://cwsites.github.io/module-federation-remote/remoteEntry.js&scope=demo_remote_app&module=./HelloUniverse)

You can either do this by passing in the URL, scope, and module as query parameters in the URL or by setting them in the host.

[Additional details](https://dev.to/omher/lets-dynamic-remote-modules-with-webpack-module-federation-2b9m)

```jsx
import { Suspense, useEffect, useState } from "react";
import { ModuleLoader } from "./dynamic-loader/ModuleLoader";

const App = () => {
  const [remote, setRemote] = useState(null);

  useEffect(() => {
    const url =
      "https://cwsites.github.io/module-federation-remote/remoteEntry.js";
    const scope = "demo_remote_app";
    const module = "./HelloUniverse";

    setRemote({ url, scope, module });
  }, []);

  return (
    <Suspense fallback={"loading dynamic Hello World..."}>
      {remote && (
        <ModuleLoader
          url={remote.url}
          scope={remote.scope}
          module={remote.module}
        />
      )}
    </Suspense>
  );
};
```

### Error Handling

To prevent the entire application from crashing when a remote module fails to load, proper error handling is required. This can be done by wrapping the remote component in a `ErrorBoundary` component and providing a fallback component.

```jsx
  import { ErrorBoundary } from 'react-error-boundary'

  ...

  const ErrorFallback = () => {
    return <h3>Something went wrong</h3>;
  };

  const App = () => {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelloWorld />
      </ErrorBoundary>
    );
  };
```

# Remote Application

This is the application which will be loaded by the host application.

Runs on port `8081`

You'll need to give your remote application a unique name in the `webpack.config.js` file. This name will be used to reference the remote application in the host application. You can export more than one component from any file, however only one default component can be exported per file.

```js
  plugins: [
    new ModuleFederationPlugin({
      name: "remote_app",
      filename: "RemoteEntry.js",
      exposes: {
        "./HelloWorld": "./src/components/HelloWorld",
        "./Components": "./src/components/Components",
      },
    }),
  ],
```

## Remote Components

```jsx
import React from "react";

const DefaultComponent = () => {
  return <h2>I am the default component</h2>;
};

export const NotDefaultComponent = () => {
  return <h3>I am not a default component</h3>;
};

export default DefaultComponent;
```

# Resources

- [Typescript Config](https://github.com/cloudbeds/webpack-module-federation-types-plugin)
- [Working with CRA](https://github.com/bfaulk96/craco-mf)
