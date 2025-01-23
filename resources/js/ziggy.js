const Ziggy = {
    url: window.location.origin,
    port: null,
    defaults: {},
    routes: {
        "products.index": { uri: "products", methods: ["GET", "HEAD"] },
        "products.create": { uri: "products/create", methods: ["GET", "HEAD"] },
        "products.store": { uri: "products", methods: ["POST"] },
        "products.edit": {
            uri: "products/{id}/edit",
            methods: ["GET", "HEAD"],
        },
        "products.update": { uri: "products/{id}", methods: ["PUT", "PATCH"] },
        "products.destroy": { uri: "products/{id}", methods: ["DELETE"] },
    },
};

if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
