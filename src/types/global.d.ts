declare module '*.jpg';
declare module '*.jpeg';

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
