class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
  }
} 

const authenticationMiddleware = (req, res, next) => {
    // Check if the user is authenticated
    if (req.headers.authorization !== 'Bearer token') {
      throw new UnauthorizedError('Unauthorized');
    }
  
    // If the user is authenticated, move on to the next middleware or controller
    next();
  };