const models = require('../models');

exports.get_landing = ((req, res, next) => {
  res.render('landing', { title: 'Express' });
});

exports.submit_lead = ((req, res, next) => {
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/');
  })
});
