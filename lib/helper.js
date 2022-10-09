// endpoint: api/posts

export default async function getPost(id) {
    const res = await fetch(`/api/posts`);
    const posts = await res.json();

    if(id) {
        return posts.find(value => value.id == id)
    }

    return posts
}