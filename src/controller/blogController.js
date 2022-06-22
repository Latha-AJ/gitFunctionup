const blogModel = require("../models/blogModel.js")
const authorModel = require("../models/authorModel")

// ====================creating Blogs=======================================================================

const createBlog = async function (req, res) {
  try {
    let data = req.body
    let isValidAuthor = await authorModel.findById(data.authorId)
    if (isValidAuthor) {
      const saveData = await blogModel.create(data)
      res.status(201).send({ msg: saveData })
    }

    else { res.status(400).send({ status: false, msg: "Please enter the valid AuthorId " }) }
  } catch (err) {
    res.status(500).send({ status: false, msg: "err.message" })
  }
}
// ===============================getBlogs============================================================================
const getBolgs = async function (req, res) {
  try {

    let Id = req.query.authorId
    let categoryKey = req.query.category
    let tagKey = req.query.tags
    let subcategoryKey = req.query.subcategory

    const data = await blogModel.find({ isDeleted: false, isPublished: true })
    if (data.length === 0) { res.status(404).send({ status: false, msg: "No data found" }) }
    else {
      const newBlogs = await blogModel.find({ isDeleted: false, isPublished: true, $or: [{ authorId: Id }, { category: categoryKey }, { tags: tagKey }, { subcategory: subcategoryKey }] })

      if (newBlogs.length === 0) { res.send({ msg: "No such blogs" }) }

      else { res.status(200).send({ msg: true, data: newBlogs }) }
    }
  } catch (err) {
    res.status(500).send({ status: false, msg: "err.message" })
  }
}

// =====================================Update Blog======================================================================
const updateBlog = async function (req, res) {
  try {
    // check if blog id present and isDeleted: false
    const checkBlogId = await blogModel.findById(req.params.blogId)
    if ((!checkBlogId) || checkBlogId.isDeleted === true) return res.status(404).send({ status: false, msg: "Enter the valid blogId" })
   
    const titles = req.body.title
    const bodyKey = req.body.body
    const tags = req.body.tags
    const subcategory = req.body.subcategory

    // updating the blog 
    const updateTag = await blogModel.findByIdAndUpdate(req.params.blogId, { $push: { "tags": tags, "subcategory": subcategory } }, { new: true })
    
    const updateRest = await blogModel.findByIdAndUpdate(req.params.blogId, { $set: { title: titles, body: bodyKey, isPublished:true, publishedAt : new Date()
    }},{ new: true })
    res.status(200).send({ status: true, msg: updateTag })
  }
  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }

}

// ==========================================Delete blog===========================================================

const deleteBlog= async function(req,res){
  try {
   const isBlogId = await blogModel.findById(req.params.blogId)
   if((!isBlogId) || isBlogId.isDeleted === true) return res.status(404).send({status:false, msg:"Enter the valid blogId"})
   const changeisDelete = await blogModel.findByIdAndUpdate(req.params.blogId, {$set: {isDeleted: true}}, {new: true}) 
   res.status(200).send({status:true, msg:"deletion successfull"})  

  }  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }
}
// ==========================================delete Blog(via query parameter)=============================================
const deleteBlogByQuerying = async function(req,res){
  try{
    // const isBlogId = await blogModel.findById(req.params.blogId)
    // if(!isBlogId) return res.status(404).send({status:false, msg:"Enter the valid AuthorId"})
    
    let Id = req.query.authorId
    let categoryKey = req.query.category
    let tagKey = req.query.tags
    let subcategoryKey = req.query.subcategory

    const newBlog = await blogModel.findOneAndUpdate({$or:[{authorId:Id}, 
      {category:categoryKey}, { tags: tagKey }, {subcategory: subcategoryKey}]}, {$set:{isDeleted:true}}, {new:true})
if(!newBlog) return res.status(404).send({status:false, msg:"No such data found"})
    


  } catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }
}

module.exports.createBlog = createBlog
module.exports.getBolgs = getBolgs
module.exports.updateBlog = updateBlog
module.exports.deleteBlog = deleteBlog
module.exports.deleteBlogByQuerying=deleteBlogByQuerying