import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "@inertiajs/react";

/**
 * PageHeader Component
 *
 * Reusable page header component that displays a title and an action button.
 * Used across different pages for consistent header styling and functionality.
 *
 * @param {string} title - The title to display in the header
 * @param {string} buttonText - Text to display on the action button
 * @param {string} buttonLink - URL/Route for the button action
 */
export default function PageHeader({ title, buttonText, buttonLink }) {
    return (
        <div className="flex justify-between items-center mb-6">
            {/* Page title */}
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            {/* Action button */}
            <Link href={buttonLink}>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    className="hover:opacity-90"
                >
                    {buttonText}
                </Button>
            </Link>
        </div>
    );
}
