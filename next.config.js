const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = (phase, conf) => {
    const newConfig = {
        ...withPlugins([[optimizedImages]])(phase, conf)
    };

    newConfig.images.disableStaticImages = true;
    newConfig.swcMinify = true;
    newConfig.output = 'export';

    return newConfig;
};
