module.exports = {
    mount: {
        public: {
            url: "/"
        },
        src: {
            url: "/dist"
        }
    },
    plugins: [
        "@snowpack/plugin-svelte"
    ],
    devOptions: {
        open: "firefox",
        hmr: true
    }
}