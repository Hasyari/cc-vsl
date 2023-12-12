const Modules = require('../models/Modules');
const config = require('../config/config.json');

const postBulkDataAlphabet = async (req, res) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const aslAlphabetData = [
    {letter: 'A', description: 'Form the letter "A" by extending your thumb and index finger and keeping the other fingers closed.'},
    {letter: 'B', description: 'Create the letter "B" by forming a fist with your thumb extended and the other fingers closed.'},
    {letter: 'C', description: 'Sign the letter "C" by forming a fist and extending your index finger, pointing it outward.'},
    {letter: 'D', description: 'For the letter "D," create a fist with your thumb and index finger extended, while the other fingers are closed.'},
    {letter: 'E', description: 'Sign "E" by extending all fingers. This sign looks like an open-hand gesture.'},
    {letter: 'F', description: 'Form the letter "F" by holding a closed fist with your thumb extended between your index and middle fingers.'},
    {letter: 'G', description: 'Create the letter "G" by forming a fist with your pinkie finger extended.'},
    {letter: 'H', description: 'For "H," form a fist with your thumb extended and the other fingers closed.'},
    {letter: 'I', description: 'Sign the letter "I" by extending your index finger.'},
    {letter: 'J', description: 'To sign "J," make a hook with your index finger, resembling the printed letter.'},
    {letter: 'K', description: 'Form the letter "K" by extending your index and middle fingers, keeping the other fingers closed.'},
    {letter: 'L', description: 'For "L," extend your thumb and index finger, forming an "L" shape.'},
    {letter: 'M', description: 'Sign "M" by forming a fist and extending your thumb and pinkie finger.'},
    {letter: 'N', description: 'Create "N" by forming a fist with your thumb and index finger extended.'},
    {letter: 'O', description: 'Sign "O" by making a circle with your thumb and index finger.'},
    {letter: 'P', description: 'Form the letter "P" by creating a fist with your thumb and pinkie finger extended.'},
    {letter: 'Q', description: 'For "Q," create a fist with your thumb, index, and pinkie fingers extended, forming a three-finger salute.'},
    {letter: 'R', description: 'Sign "R" by extending your index and middle fingers, crossing them.'},
    {letter: 'S', description: 'Form the letter "S" by crossing your thumb over your pinkie finger while keeping the other fingers closed.'},
    {letter: 'T', description: 'Sign "T" by extending your thumb and index finger, forming a "T" shape.'},
    {letter: 'U', description: 'Create "U" by forming a fist with your pinkie finger extended.'},
    {letter: 'V', description: 'For the letter "V," extend your index and middle fingers, separating them to form a "V" shape.'},
    {letter: 'W', description: 'Sign "W" by extending your thumb, index, and middle fingers, forming a "W" shape.'},
    {letter: 'X', description: 'Form the letter "X" by crossing your index and middle fingers.'},
    {letter: 'Y', description: 'Sign "Y" by extending your thumb, index, and pinkie fingers, resembling the letter "Y." '},
    {letter: 'Z', description: 'Create the letter "Z" by zigzagging your index finger.'},
  ];
  const dataToInsert = [
    ...alphabet.split('').map((letter) => ({
      huruf: letter,
      image_url: `https://storage.googleapis.com/${config.bucket_name}/asl-letter-${letter}.svg`,
      deskripsi: aslAlphabetData.find((item) => item.letter === letter)?.description || 'No description available',
    })),
  ];
  try {
    await Modules.bulkCreate(dataToInsert);
    res.json({message: 'Alphabet data inserted successfully'});
  } catch (error) {
    res.json({message: 'Error inserting alphabet data:'});
  }
};


const getSeparateAlphabet = async (req, res) => {
  try {
    const {page} = req.query;
    const resultPerPage = 4;
    const moduleCount = await Modules.count();
    const currentPage = Number(page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    const modules = await Modules.findAll({
      limit: resultPerPage,
      offset: (currentPage - 1) * resultPerPage,
    });

    if (modules.length === 0) {
      res.status(404).json({
        success: false,
        message: 'No modules found',
      });
    } else {
      res.json({
        success: true,
        message: 'Fetch Success',
        data: {
          modules,
          skip,
          moduleCount,
        },
      });
    }
  } catch (error) {
    console.error('Error fetching modules:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message || 'An unexpected error occurred',
    });
  }
};

const getModulesAll = async (req, res) => {
  try {
    const data = await Modules.findAll();
    const moduleCount = await Modules.count();

    if (moduleCount === 0) {
      res.status(404).json({
        success: false,
        message: 'No modules founded',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Data successfully Displayed',
      data,
    });
  } catch (err) {
    console.error('Error fetching modules:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message || 'An unexpected error occurred',
    });
  }
};


module.exports = {
  getModulesAll,
  getSeparateAlphabet,
  postBulkDataAlphabet,
};
