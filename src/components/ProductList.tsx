// src/components/ProductList.tsx
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

interface SearchParams {
    name?: string;
    type?: "physical" | "digital";
    min?: number;
    max?: number;
    page?: number;
    sort?: string;
    cat?: string;
}

const validProductKeys = [
    "_id", "name", "slug", "sku", "productType", "price", "priceData.price", "numericId", "lastUpdated"
] as const;

type ProductKey = typeof validProductKeys[number];

const isValidProductKey = (key: string): key is ProductKey => {
    return validProductKeys.includes(key as ProductKey);
}

const ProductList = async ({
    categoryId,
    limit,
    searchParams,
}: {
    categoryId: string;
    limit?: number;
    searchParams?: SearchParams;
}) => {
    const wixClient = await wixClientServer();

    let productQuery = wixClient.products.queryProducts();

    if (searchParams?.name) {
        productQuery = productQuery.startsWith("name", searchParams.name);
    }

    productQuery = productQuery
        .eq("collectionIds", categoryId)
        .hasSome("productType", [searchParams?.type || "physical", "digital"])
        .gt("priceData.price", searchParams?.min ?? 0)
        .lt("priceData.price", searchParams?.max ?? 999999)
        .limit(limit ?? PRODUCT_PER_PAGE)
        .skip(searchParams?.page ? (parseInt(searchParams.page.toString(), 10) * (limit ?? PRODUCT_PER_PAGE)) : 0);

    if (searchParams?.sort) {
        const [sortType, sortBy] = searchParams.sort.split("_");
        if (isValidProductKey(sortBy)) {
            if (sortType === "asc") {
                productQuery.ascending(sortBy);
            } else if (sortType === "desc") {
                productQuery.descending(sortBy);
            }
        }
    }

    let res;
    try {
        res = await productQuery.find();
    } catch (error) {
        console.error("Failed to fetch products", error);
        return (
            <div className="text-center mt-12">
                <h2 className="text-2xl font-bold">Featured Products</h2>
                <p className="text-red-500">Error fetching products. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
                {res.items.map((product: products.Product) => (
                    <Link
                        href={"/" + product.slug}
                        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                        key={product._id}
                    >
                        <div className="relative w-full h-80">
                            <Image
                                src={product.media?.mainMedia?.image?.url || "/product.png"}
                                alt={product.name || "Product image"}
                                fill
                                sizes="25vw"
                                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-1000"
                            />
                            {product.media?.items && (
                                <Image
                                    src={product.media?.items[1]?.image?.url || "/product.png"}
                                    alt={product.name || "Product image"}
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md"
                                />
                            )}
                        </div>
                        <div className='flex justify-between'>
                            <span className="font-medium">{product.name}</span>
                            <span className="font-semibold">${product.priceData?.price}</span>
                        </div>
                        {product.additionalInfoSections && (
                            <div
                                className="text-sm text-gray-500"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                        product.additionalInfoSections.find(
                                            (section: any) => section.title === "shortDesc"
                                        )?.description || ""
                                    ),
                                }}
                            ></div>
                        )}
                        <button className="rounded-2xl ring-1 ring:bg-pink-500 text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
                            Add to Cart
                        </button>
                    </Link>
                ))}
                {(searchParams?.cat || searchParams?.name) && (
                    <Pagination
                        currentPage={res.currentPage || 0}
                        hasPrev={res.hasPrev()}
                        hasNext={res.hasNext()}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductList;
