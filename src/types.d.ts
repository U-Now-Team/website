declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '@theme/*' {
  const component: React.ComponentType<any>;
  export default component;
}
