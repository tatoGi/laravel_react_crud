import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ConfigProvider } from "antd";

// Import styles in the correct order
import "antd/dist/reset.css";
import "../css/app.css";

/**
 * Custom route function for handling Laravel routes in JavaScript
 *
 * This function converts Laravel route names to URLs and handles
 * route parameters. It supports both object parameters and simple IDs.
 *
 * @param {string} name - Route name from Laravel routes
 * @param {Object|string} params - Route parameters or ID
 * @param {boolean} absolute - Whether to return absolute URL
 * @returns {string} Generated URL for the route
 */
window.route = (name, params = {}, absolute = false) => {
    const ziggy = window.Ziggy || {};
    const url = ziggy.url || "";
    const routes = ziggy.routes || {};

    if (!routes[name]) {
        console.error(`Route "${name}" not found`);
        return "#";
    }

    let uri = routes[name].uri;

    // Handle both object and simple ID parameter
    if (typeof params === "object") {
        Object.keys(params).forEach((key) => {
            uri = uri.replace(`{${key}}`, params[key]);
        });
    } else {
        // If params is not an object, assume it's an ID
        uri = uri.replace("{id}", params);
    }

    // Replace any remaining route parameters with empty string
    uri = uri.replace(/\{[^}]+\}/g, "");

    return absolute ? `${url}/${uri}` : `/${uri}`;
};

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(
            <ConfigProvider>
                <App {...props} />
            </ConfigProvider>
        );
    },
});
