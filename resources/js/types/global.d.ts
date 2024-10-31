interface ImportMeta {
    glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
}

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}