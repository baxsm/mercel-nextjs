import UseSWR from "swr"

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint) {
    const { data, error } = UseSWR(`http://localhost:3000${endpoint}`, response);
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}