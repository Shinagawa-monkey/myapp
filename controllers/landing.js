const models = require('../models');

exports.get_landing = ((req, res, next) => {
  res.render('landing', { title: 'Express', user: req.user });
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
      res.render('lead/leads', { title: 'Express', leads: leads });
  })
});

exports.show_lead = ((req, res, next) => {
  return models.Lead.findOne({
    where : {
      id: req.params.lead_id
      }
  }).then(lead => {
    res.render('lead/lead', { lead: lead });
  })
});

exports.show_edit_lead = ((req, res, next) => {
  return models.Lead.findOne({
    where : {
      id: req.params.lead_id
      }
  }).then(lead => {
    res.render('lead/edit_lead', { lead: lead });
  })
});

exports.edit_lead = ((req, res, next) => {
  return models.Lead.update({
    email: req.body.lead_email
  }, {
    where: {
      id: req.params.lead_id
    }
  }).then(result => {
    res.redirect('/lead/' + req.params.lead_id);
  })
});

exports.delete_lead = ((req, res, next) => {
  return models.Lead.destroy({
    where: {
      id: req.params.lead_id
    }
  }).then(result => {
    res.redirect('/leads');
  })
});

exports.delete_lead_json = ((req, res, next) => {
  return models.Lead.destroy({
    where: {
      id: req.params.lead_id
    }
  }).then(result => {
    res.send({ msg: "Success" });
  })
});
