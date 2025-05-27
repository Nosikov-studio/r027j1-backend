const sessions = require('../sessions');

module.exports = async (req, res) => {
    const sessionId = req.headers.cookie?.split("=")[1];
    const userSession = sessions[sessionId];

    if (!userSession) {
        return res.status(401).json({message: "Invalid session"});
    }

    const userId = userSession.userId;
    res.json(
    {message: "hello from test"}

)
}