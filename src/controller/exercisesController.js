const getExercises = async (req, res) => {
  res.status(200).json({
    success: false,
    message: 'No controller settings',
  });
};

const postPhotoSign = async (req, res) => {
  res.status(200).json({
    success: false,
    message: 'No controller settings',
  });
};


module.exports = {
  getExercises,
  postPhotoSign,
};
