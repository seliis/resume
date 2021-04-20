import main from "./main.svelte";

const app = new main({
    target: document.body
});

export default app;

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        app.$destroy();
    });
}