const express = require('express') 
const router = express.Router() 
router.use(express.json())


router.post('/', (req, res) => {
 const associate = req.body.find(i => i.name === 'abc)

   associate.info.email= 'verma_sachin1@network.lilly.com'
   res.send(associate)

})

module.exports = router;
