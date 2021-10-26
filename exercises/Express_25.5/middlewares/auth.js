module.exports =  (req, res, next) => {
  const { name , initials , country, league } = req.body;
  
  if (name.length <= 5) next({ status: 400, message: "invalid data" });

  if (initials.length > 3 || initials.toUpperCase() !== initials) next({ status: 400, message: "invalid data" });

  if (country.length <= 3) next({ status: 400, message: "invalid data" });

  next()
};
