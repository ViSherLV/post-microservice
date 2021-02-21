const { Posts } = require('../Schemas');


const getAllPosts = async () => {
    const posts = await Posts.find({});
    return posts;
};

module.exports = {
    getAllPosts,
}