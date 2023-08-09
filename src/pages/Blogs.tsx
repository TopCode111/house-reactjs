import { useState, useEffect, useRef } from "react";

import microcmsService from '../services/microcmsService';

import BlogItem from "../components/BlogItem";

const Blogs = () => {
    const mathRef = useRef(0)

    const [totalCnt, setTotalCnt] = useState(0);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        microcmsService.getBlogs()
            .then(data => {
                if (data != null) {
                    setTotalCnt(data.totalCount);
                    setBlogs(data.contents);
                }
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return <>
        <div className="flex flex-col gap-4 m-4">
            {
                blogs.map((blog, idx) =>
                    <BlogItem title={blog.title} content={blog.content} />
                )
            }
        </div>
    </>
}

export default Blogs;