const { Session } = require('../models');
module.exports = class SessionHelper {
    static async createSession(req) {
        var ip = req.connection.remoteAddress;
        var device_type = req.device.type;
        const session = await Session.create({
            flag_https: true,
            ip_address: ip,
            device_type: device_type
        })
        return session.dataValues;
    }
}