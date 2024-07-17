import Post from "./post.js";
import allPosts from "./posts.js";

class PostController {
  async getAll(req, res) {
    try {
      return await res.json(allPosts);
    } catch (e) {
      await res.status(404).json(e);
    }
  }
  async create(req, res) {
    try {
      const PostToCreate = req.body;
      if (!PostToCreate.title || !PostToCreate.content || PostToCreate.length > 2) {
        return await res.status(404).json("Unsupporting body format");
      }
      const newId = !allPosts[allPosts.length - 1] ? 0 : allPosts[allPosts.length - 1].id + 1;
      const newPost = new Post(newId, PostToCreate.title, PostToCreate.content);
      allPosts.push(newPost);
      return await res.status(201).json("Successful!");
    } catch (e) {
      await res.status(404).json(e);
    }
  }
  async getOne (req,res) {
    try{
       for (let i = 0; i < allPosts.length; i++){
            if(req.params.id == allPosts[i].id) {
                return (await res.status(201).json(allPosts[i]));
            }
       }
       return (await res.status(404).json(`Nothing found with ${req.params.id} id!`));
    }catch (e) {
        await res.status(404).json(e);
      }
  }

}

export default new PostController();
