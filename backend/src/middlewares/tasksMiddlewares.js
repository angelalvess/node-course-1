const validateTitleBody = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined || body.title === '') {
    return res.status(400).json({ message: 'The field "title" is required' });
  }

  next();
};

const validateStatusTitleBody = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined || body.status === '') {
    return res.status(400).json({ message: 'The field "status" is required' });
  }

  if (body.title === undefined || body.title === '') {
    return res.status(400).json({ message: 'The field "title" is required' });
  }

  next();
};

module.exports = {
  validateTitleBody,
  validateStatusTitleBody,
};
