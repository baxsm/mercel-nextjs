import UseSWR from "swr"

const BASEURL = "http://localhost:3000";

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint) {
    const { data, error } = UseSWR(`${BASEURL}${endpoint}`, response);
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}