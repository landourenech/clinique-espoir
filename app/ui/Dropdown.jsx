"use client";

import Link from "next/link";

export default function Dropdown({ items, onClick, basePath }) {
  return (
    <ul className="absolute top-full left-0 bg-white shadow-lg w-48">
      {items.map((item) => (
        <li
          key={item.slug}
          className="px-4 py-2 hover:bg-red-600 hover:text-white cursor-pointer"
          onClick={onClick}
        >
          <Link href={`${basePath}/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
