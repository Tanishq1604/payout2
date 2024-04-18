const jwt = require("jsonwebtoken");

const authMiddleware = (req,res, next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer'))
    {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(403).json({});
    }
};

const meMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ error: 'Missing or invalid Authorization header' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.isAuthenticated = true;
        next();
    } catch (error) {
        console.error('Error verifying JWT token:', error.message);
        req.isAuthenticated = false;
        return res.status(403).json({ error: 'Failed to authenticate token' });
    }
};

module.exports ={
    authMiddleware,
    meMiddleware
}


//Testing git works for pushing