const router = require('express').Router();
const { BlogPost, User } = require('../../models');

// Get all blog posts and include the user information
router.get('/', async (req, res) => {
  try {
    const postData = await BlogPost.findAll({
      include: {
        model: User,
        attributes: ['username']
      }
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: ['username']
      }
    });

    if (!postData) {
      res.status(404).json({ message: 'No blog post found with this ID' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newPostData = await BlogPost.create(req.body);

    res.status(200).json(newPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const postData = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!postData[0]) {
      res.status(404).json({ message: 'No blog post found with this ID' });
      return;
    }

    res.status(200).json({ message: 'Blog post updated successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No blog post found with this ID' });
      return;
    }

    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
