// endpoint: api/posts

const BASEURL = process.env.baseURL;

export default async function getPost(id) {
    const res = await fetch(`${BASEURL}/api/posts`);
    const posts = await res.json();

    if(id) {
        return posts.find(value => value.id == id)
    }

    return posts
}