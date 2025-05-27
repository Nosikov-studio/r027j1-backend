const sessions = require('../sessions');

module.exports = async (req, res) => {
    const sessionId = req.headers.cookie?.split("=")[1];
    const userSession = sessions[sessionId];

    if (!userSession) {
        return res.status(401).send('Invalid session');
    }

    const userId = userSession.userId;
    res.send(
    //     {
    //     // id: 1,
    //     // userId,        
    // }
'просто текст'

)
}