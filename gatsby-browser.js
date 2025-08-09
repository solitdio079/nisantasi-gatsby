import './src/styles/global.css';
export const onClientEntry = async () => {
    await import("flyonui/dist/index.js");
};