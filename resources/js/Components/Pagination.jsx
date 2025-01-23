import { Link } from "@inertiajs/react";

export default function Pagination({ links = [] }) {
    if (!links || links.length <= 3) return null;

    return (
        <div className="flex flex-wrap -mb-1">
            {links.map((link, key) => (
                <Link
                    key={key}
                    href={link.url || "#"}
                    className={`mr-1 mb-1 px-4 py-2 text-sm border rounded-md ${
                        link.active
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                    } ${!link.url && "text-gray-400 pointer-events-none"}`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}
