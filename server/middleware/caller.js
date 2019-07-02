module.exports = function() {
  return function tracker(req, res, next) {
    console.log('Initiated HTTP request');
    next();
  };
};
