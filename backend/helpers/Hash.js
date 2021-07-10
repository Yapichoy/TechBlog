module.exports = class HashHelper {
    static hashCode(val) {
        var hash = 0;
        for (var i = 0; i < val.length; i++) {
            var character = val.charCodeAt(i);
            hash = ((hash<<5)-hash)+character;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
}