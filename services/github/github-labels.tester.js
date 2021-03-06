'use strict'

const t = (module.exports = require('../tester').createServiceTester())

t.create('labels')
  .get('/badges/shields/bug.json')
  .expectBadge({
    message: 'bug',
    color: '#e11d21',
  })

t.create('labels (repo or label not found)')
  .get('/badges/shields/somenonexistentlabelthatwouldneverexist.json')
  .expectBadge({
    message: 'repo or label not found',
  })
