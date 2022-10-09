import UseSWR from "swr"

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint) {
    const { data, error } = UseSWR(`${endpoint}`, response);
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}