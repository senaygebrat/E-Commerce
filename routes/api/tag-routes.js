const router = require('express').Router();
// const { restart } = require('nodemon');
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint


  // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product }],
  })
  .then((tag) =>
  res.json(tag))
  .catch((err) =>
  res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {id: req.params.id},
    // include: [{model: Product}], does it matter?
  })
  .then((categories) =>
  res.json(categories))
  .catch((err) =>
    res.status(400).json(err));
});

router.post('/', async (req, res) => {
  try{
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    },
    )
    res.status(200).json(newTag)
  }
  catch(err){
    res.status(400).json(err)
  }
})

  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try{
    const updTag = await Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(updTag)
  }
  catch(err){
    res.status(400).json(err)
  }
})

  // delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy(
    {
      where: {id: req.params.id},
    })
    .then((tag) =>
    res.json(tag))
    .catch((err) =>
      res.status(400).json(err));
});

module.exports = router;
