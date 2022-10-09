import UseSWR from "swr"

const dev = process.env.NODE_ENV !== 'production';

const BASEURL = dev ? "http://localhost:3000" : "https://mercel-nextjs.vercel.app";

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint) {
    const { data, error } = UseSWR(`${endpoint}`, response);
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}