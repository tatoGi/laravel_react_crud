import React from "react";
import { message } from "antd";
import ProductTable from "@/Components/ProductTable";
import PageHeader from "@/Components/PageHeader";

/**
 * Main Products Index Page Component
 *
 * This component serves as the main products listing page.
 * It combines the PageHeader and ProductTable components to create
 * a complete product management interface.
 *
 * @param {Object[]} products - Array of product objects from the backend
 * @param {Object} flash - Flash messages from the server for notifications
 */
export default function Index({ products = [], flash = {} }) {
    // Display success message when flash message is present
    React.useEffect(() => {
        if (flash?.message) {
            message.success(flash.message);
        }
    }, [flash?.message]);

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {/* Page header with title and add button */}
                    <PageHeader
                        title="Products"
                        buttonText="Add Product"
                        buttonLink={route("products.create")}
                    />
                    {/* Products table container */}
                    <div className="bg-white rounded-lg">
                        <ProductTable products={products} />
                    </div>
                </div>
            </div>
        </div>
    );
}
