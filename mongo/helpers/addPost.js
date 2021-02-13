const { Posts } = require('../Schemas')

const addPost = async ({
    header, image, text, category, id
}) => {
    try{
        const post = new Posts({header, image, text, category, id });
        const result = await post.save();
        console.log(`rsss`, result)
        return result;
    }catch(e){
        console.log(`error`, e)
    }

};
module.exports = {
    addPost,
}