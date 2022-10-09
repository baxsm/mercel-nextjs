import UseSWR from "swr"

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint) {
    const { data, error } = UseSWR(`https://mercel-nextjs-paj5tqf3y-baxsm.vercel.app${endpoint}`, response);
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}