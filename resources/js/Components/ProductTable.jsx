import React from "react";
import { Table, Button, Space, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link, router } from "@inertiajs/react";

/**
 * ProductTable Component
 *
 * Displays a table of products with actions for editing and deleting.
 * Uses Ant Design's Table component for displaying data with sorting
 * and pagination capabilities.
 *
 * @param {Object[]} products - Array of product objects to display
 */
export default function ProductTable({ products }) {
    // Define table columns configuration
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => `$${price}`, // Format price with dollar sign
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Space>
                    {/* Edit button with link to edit page */}
                    <Link href={route("products.edit", record.id)}>
                        <Button type="link" icon={<EditOutlined />}>
                            Edit
                        </Button>
                    </Link>
                    {/* Delete button with confirmation popup */}
                    <Popconfirm
                        title="Delete product"
                        description="Are you sure?"
                        onConfirm={() =>
                            router.delete(route("products.destroy", record.id))
                        }
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            // Add unique key to each row and spread product data
            dataSource={products.map((product) => ({
                ...product,
                key: product.id,
            }))}
            bordered
            pagination={{ pageSize: 5 }}
            className="shadow-sm"
        />
    );
}
