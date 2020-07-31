const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    
    const data = {
        'name': 'Gonzalo Cárcamo',
        'web': 'gon.com'
    }
    
    res.json(data);
});

module.exports = router;