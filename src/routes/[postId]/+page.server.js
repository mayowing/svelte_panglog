import { getPost } from '$lib/server/db.js';

export const load = async ({ params })  => {
    // console.log(params);
    const post = await getPost(params.postId);
    return { post };
};

