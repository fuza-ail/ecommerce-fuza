function errorHandle(err, req, res, next) {
  if (err.errors) {
    if (err.errors[0].type == 'unique violation') {
      res.status(400).json({
        message: 'Email already exist'
      })
    } else if (err.errors[0].message == 'Validation notEmpty on email failed') {
      res.status(400).json({
        message: 'Value can not be empty'
      })
    } else if (err.errors[0].message == "Validation min on amount failed") {
      res.status(400).json({
        message: 'Value can not be negative'
      })
    } 
  }else {
    res.status(err.status).json({
      message: err.message
    })
  }
}

  module.exports = errorHandle