const registerUser = (req, res) => {
  res.status(201).json({
    message: "User registration endpoint (to be implemented)"
  });
};

const loginUser = (req, res) => {
  res.status(200).json({
    message: "User login endpoint (to be implemented)"
  });
};

module.exports = {
  registerUser,
  loginUser
};
