const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: "Api is working",
    });
    return
})

module.exports = router;