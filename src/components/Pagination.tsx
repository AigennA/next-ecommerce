"use client";

import { usePathname, useRouter } from "next/navigation";

const Pagination = ({
    currentPage,
    hasPrev,
    hasNext,
}: {
    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", pageNumber.toString());
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="mt-12 flex justify-between w-full">
            <button
                className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
                disabled={!hasPrev}
                onClick={() => createPageUrl(currentPage - 1)}
            >
                Previous
            </button>
            <button
                className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
                disabled={!hasNext}
                onClick={() => createPageUrl(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;