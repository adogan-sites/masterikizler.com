const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = (phase, conf) => {
    return {
        ...withPlugins([[optimizedImages]])(phase, conf)
    };
};
