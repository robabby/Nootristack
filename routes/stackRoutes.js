const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Stack = mongoose.model('stacks')

module.exports = app => {
  app.post('/api/stacks', requireLogin, async (req, res) => {
    const { name, supplements } = req.body;

    // Create the new stack
    const stack = new Stack({
      name,
      supplements: supplements.split(',').map(
        (name, size, dose, price, merchant) => ({ name, size, dose, price, merchant })
      ),
      _user: req.user.id,
      dateCreated: Date.now()
    });

    // Save the stack
    try {
      await stack.save();
      req.user.stacks += 1;
      const user = await req.user.save();

      res.send(user);
    } catch (e) {
      res.status(422);
    }
  });
};
