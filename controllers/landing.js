const models = require('../models');

exports.get_landing = ((req, res, next) => {
  res.render('landing', { title: 'Express' });
});

exports.submit_lead = ((req, res, next) => {
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/leads');
  })
});

exports.show_leads = ((req, res, next) => {
  return models.Lead.findAll().then(leads => {
      res.render('landing', { title: 'Express', leads: leads });
  })
});

exports.show_lead = ((req, res, next) => {
  return models.Lead.findOne({
    where : {
      id: req.params.lead_id
      }
  }).then(lead => {
    res.render('lead', { lead: lead });
  })
});
