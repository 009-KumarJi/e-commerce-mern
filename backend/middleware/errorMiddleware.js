const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // Pass error to error handler
};

const errorHandler = (err, req, res, next) => {
  // Set status code to 500 if status code is 200
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Check for MONGOOSE bad ObjectId
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    err.message = 'Resource not found';
    statusCode = 400;
  }

  res.status(statusCode).json({
    message,
    // Only show stack trace in development mode
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};


export {notFound, errorHandler};