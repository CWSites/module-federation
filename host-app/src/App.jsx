import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { ModuleLoader } from "./dynamic-loader/ModuleLoader";
// uncomment the following lines to import components from local "remote-app"
// import DefaultComponent, { NotDefaultComponent } from "remote_app/Components";

const LazyHelloWorld = lazy(() => import("remote_app/HelloWorl"));
const LazyNonDefaultHelloWorld = lazy(() =>
  import("remote_app/HelloWorld").then((module) => ({
    default: module.NonDefaultHelloWorld,
  }))
);
const LazyHelloUniverse = lazy(() => import("demo_remote_app/HelloUniverse"));

const container = document.getElementById("root");
const root = createRoot(container);

const ErrorFallback = () => {
  return <h3 style={{ color: "#f00" }}>Something went wrong</h3>;
};

const App = () => {
  const [dynamicRemoteURL, setDynamicRemoteURL] = useState(null);
  const [remote, setRemote] = useState(null);

  // This will dynamically load a remote module based on URL query params
  const loadRemoteFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const url = params.get("url");
    const scope = params.get("scope");
    const module = params.get("module");

    setDynamicRemoteURL({ url, scope, module });
  };

  const loadRemoteFromProps = () => {
    const url =
      "https://cwsites.github.io/module-federation-remote/remoteEntry.js";
    const scope = "demo_remote_app";
    const module = "./HelloUniverse";

    setRemote({ url, scope, module });
  };

  useEffect(() => {
    loadRemoteFromURL();
    loadRemoteFromProps();
  }, []);

  return (
    <>
      <h1>Host App</h1>
      <Suspense fallback={"loading static Hello World..."}>
        <strong>Lazy Loaded from same repo...</strong>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <LazyHelloWorld />
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <LazyNonDefaultHelloWorld />
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={"loading Lazy Hello Universe..."}>
        <strong>Lazy Loaded from hosted server...</strong>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <LazyHelloUniverse />
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={"loading dynamic Hello World..."}>
        {remote && (
          <>
            <strong>Dynamicly Loaded via props...</strong>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <ModuleLoader
                url={remote.url}
                scope={remote.scope}
                module={remote.module}
              />
            </ErrorBoundary>
          </>
        )}
        {dynamicRemoteURL && (
          <>
            <strong>Dynamicly Loaded via URL Query...</strong>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <ModuleLoader
                url={dynamicRemoteURL.url}
                scope={dynamicRemoteURL.scope}
                module={dynamicRemoteURL.module}
              />
            </ErrorBoundary>
          </>
        )}
      </Suspense>
      <strong>Standard import of default component...</strong>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* uncomment the following lines to import components from local "remote-app" */}
        {/* <DefaultComponent /> */}
      </ErrorBoundary>
      <strong>Standard import of non-default component...</strong>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* uncomment the following lines to import components from local "remote-app" */}
        {/* <NotDefaultComponent /> */}
      </ErrorBoundary>
    </>
  );
};

root.render(<App />);
