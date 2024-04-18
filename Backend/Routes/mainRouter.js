const express = require("express");
const router = express.Router();
const userRoute = require('./userRoute');
const accountRouter = require('./accountRouter');
const { meMiddleware } = require("../middleware");


router.get("/me",meMiddleware,(req,res)=>{
    if (req.isAuthenticated) {
        return res.status(200).json({ authentication: true });
    } else {
        return res.status(403).json({ authentication: false });
    }

});
router.use("/user", userRoute);  // all requtes that come to /api/v1/user now will redirected to userRoute where we have written logic to what to do
router.use("/account", accountRouter);
module.exports = router;
