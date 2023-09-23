"use client";
import Footer from "@/components/Layouts/Guest/Footer";
import GuestNavbar from "@/components/Layouts/Guest/GuestNavbar";
import { useFetchImages } from "@/features/files/useFetchImages";
import { useActiveProducts } from "@/features/products/useActiveProducts";
import { useLatestProducts } from "@/features/products/useLatestProducts";
import { rupiahFormat } from "@/lib/helpers";
import { DashboardTableResults } from "@/models/Dashboard";
import { DatatableColumn } from "@/models/Datatable";
import { GlobalResponse } from "@/types/response";
import { Carousel } from "flowbite-react";
import React from "react";

const images = [
    'https://unsplash.com/photos/xWOTojs1eg4',
    'https://unsplash.com/photos/wQLAGv4_OYs',
    'https://unsplash.com/photos/XX0vmOvQ3GA',
];


export default function Home() {
    const [activeProducts, setActiveProducts] = React.useState<DashboardTableResults>([]);
    const [latestProducts, setLatestProducts] = React.useState<DashboardTableResults>([]);
    const [images, setImages] = React.useState<string[]>([]);


    const { mutate : imagesMutate } = useFetchImages({
        onSuccess : (res : GlobalResponse<string[]>) => {
            if (res.code == 200) {
                setImages(res.data)
            }
        }
    });


    const { mutate : productActiveMutate } = useActiveProducts({
        onSuccess : (res : GlobalResponse<DashboardTableResults>) => {
            if (res.code == 200) {
                setActiveProducts(res.data)
            }
        }
    });
    const { mutate : productLatestMutate } = useLatestProducts({
        onSuccess : (res : GlobalResponse<DashboardTableResults>) => {
            if (res.code == 200) {
                setLatestProducts(res.data)
            }
        }
    });

    React.useEffect(() => {
        imagesMutate({});
        productLatestMutate({});
        productActiveMutate({});

    }, [])

    return (
        <>
            <GuestNavbar/>
            <section className="p-10 mt-14">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        {
                            images.map((image, key) => (
                                <img className="w-full" key={key} alt="..." src={image} />
                            ))
                        }
                    </Carousel>
                </div>
            </section>

            {/* tersedia */}
            <section className="p-10">
                <div className="text-2xl mb-3 font-semibold">Product Terbaru</div>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        {
                            latestProducts.map((product, key) => (
                                <div key={key} className="w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-black/10 transition-all duration-100">
                                    <a href="#">
                                        <img className="rounded-md w-full" src={product.file.fileurl} alt="product image" />
                                    </a>
                                    <div className="px-5 py-5">
                                        <a href="#">
                                            <div className="text-sm tracking-tight text-gray-900 dark:text-white">
                                            {product.name}
                                            </div>
                                        </a>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold text-blue-500 dark:text-white"> {rupiahFormat(product.price)} </span>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </Carousel>
                    </div>
                <div className="grid grid-cols-5 gap-6 justify-items-center">
                    
                </div>
            </section>

            {/* tersedia */}
            <section className="p-10">
                <div className="text-2xl mb-3 font-semibold">Product Tersedia</div>
                <div className="grid grid-cols-5 gap-6 justify-items-center">
                    {
                        activeProducts.map((product, key) => (
                            <div key={key} className="relative bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-black/10 transition-all duration-100">
                                <a href="#">
                                    <img className="rounded-md" src={product.file.fileurl} alt="product image" />
                                </a>
                                <div className="px-5 py-5">
                                    <a href="#">
                                        <div className="text-sm tracking-tight text-gray-900 dark:text-white">
                                        {product.name}
                                        </div>
                                    </a>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold text-blue-500 dark:text-white"> {rupiahFormat(product.price)} </span>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

                <div className="flex justify-center items-center py-10">
                    <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Lihat Lebih Banyak</button>
                </div>
            </section>

            <Footer/>
        </>

    )
}
