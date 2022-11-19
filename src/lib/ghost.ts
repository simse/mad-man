import GhostContentAPI from '@tryghost/content-api';
import type { PostsOrPages } from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: import.meta.env.GHOST_CONTENT_API_URL,
    key: import.meta.env.GHOST_CONTENT_API_KEY,
    version: 'v5.0'
});

const getPosts = async (amount?: number, page = 1): Promise<PostsOrPages> => {
    const posts = await api.posts.browse({
        limit: amount,
        page,
        include: [
            'tags',
            'authors'
        ]
    });

    return posts;
}

const getPost = () => {

}

const getTags = () => {

}

export {
    getPosts,
    getPost,
    getTags
}