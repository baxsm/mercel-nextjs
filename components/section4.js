import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import { Swiper, SwiperSlide } from 'swiper/react';
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner"
import Error from "./_child/error"

import 'swiper/css';

var categoryData = [];

function mergeCategory(data) {
    categoryData = data.reduce((acc, curr) => {
        let item = acc.find(item => item.category === curr.category);
        if (item) {
            item.post.push(curr);
        } else {
            acc.push({
                "category": curr.category,
                "post": [curr]
            });
        }
        return acc;
    }, []);
}

export default function section4() {
    const { data, isLoading, isError } = fetcher('/api/posts')

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>
    if (data) {
        mergeCategory(data)
        return (
            <section className="container mx-auto md:px-20 py-16">
                <h1 className="font-bold text-4xl py-12 text-center">Categories</h1>
                <Swiper
                    slidesPerView={categoryData > 1 ? 2 : 1}
                >
                    {
                        categoryData.map((value, index) => (
                            <SwiperSlide key={index}>
                                {
                                    value.post.map((_data, i) => (
                                        <Categories data={_data} key={i}></Categories>
                                    ))
                                }
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        )
    }

}

function Categories({ data }) {
    const { id, title, subtitle, category, img, published, author } = data;
    
    return (
        <div className="gap-5">
            {id == 1 ? <h1 className="font-bold text-xl py-12">{category || "Unknown"}</h1> : <></>}
            <div className="gap-5 flex py-5">
                <div className="image flex flex-col justify-start">
                    <Link href={`/posts/${id}`}>
                        <a>
                            <img className="rounded" src={img} width={300} height={250} />
                        </a>
                    </Link>
                </div>
                <div className="info flex justify-center flex-col">
                    <div className="cat">
                        <Link href={`/posts/${id}`}>
                            <a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a>
                        </Link>
                        <Link href={`/posts/${id}`}>
                            <a className="text-gray-600 hover:text-gray-800"> - {published || "Unknown"}</a>
                        </Link>
                    </div>
                    <div className="title">
                        <Link href={`/posts/${id}`}>
                            <a className="font-bold text-gray-800 hover:text-gray-600 text-lg">{title || "Title"}</a>
                        </Link>
                    </div>
                    {author ? <Author data={author}></Author> : <></>}
                </div>
            </div>
        </div>
    )
}