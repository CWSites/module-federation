import React, { lazy, Suspense } from "react";
import { useDynamicScript } from "./useDynamicScript";

export const loadComponent = (scope, module) => {
  return async () => {
    // Initializes the share scope.
    // This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
};

export const ModuleLoader = (props) => {
  const { ready, failed } = useDynamicScript({
    url: props.module && props.url,
  });

  if (!props.module) {
    return <h2>No module specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.url}</h2>;
  }

  const Component = lazy(loadComponent(props.scope, props.module));

  return (
    <Suspense fallback="Loading Module">
      <Component />
    </Suspense>
  );
};
