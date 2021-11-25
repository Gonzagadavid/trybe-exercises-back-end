const topSecret = (req, res, next) => {
  try {
    res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
  } catch (err) {
    next(err);
  }
};
module.exports = topSecret;
