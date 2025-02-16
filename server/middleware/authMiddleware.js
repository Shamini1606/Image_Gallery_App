const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    
    if (!token) return res.status(403).send('A token is required for authentication');

    // Fix Bearer token extraction
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length); // Remove 'Bearer ' from the string
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send('Invalid Token');
        req.user = decoded;
        next();
    });
};
