const router = require('express').Router();

const { sendmail, validatelogin } = require('../controller/appController.js')


/** HTTP Reqeust */
router.post('/mail', sendmail);
router.post('/validate', validatelogin);



module.exports = router;