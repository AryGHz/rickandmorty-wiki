const express = require('express');
const router = express.Router();

const getResources = require('../controllers/getResources');
const getDetails = require('../controllers/getDetails');
const postUser = require('../controllers/postUser');
const login = require('../controllers/login');
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const getFav = require("../controllers/getFav");
const logout = require("../controllers/logout");
const getMainCharacters = require("../controllers/getMainCharacters")
const forgotPassword = require("../controllers/forgotPassword");
const updateUser = require("../controllers/updateUser");
const updateProfilePicture = require("../controllers/updateProfilePicture");
const resetPassword = require("../controllers/resetPassword");
const deleteUser = require("../controllers/deleteUser");
const contactForm = require("../controllers/contactForm");


const validateToken = require("../middlewares/validateToken")
const upload = require("../middlewares/multer")



// router.get('/location/', getLocation);

router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotpassword', forgotPassword);
router.get('/main', getMainCharacters);
router.post('/register',postUser);
router.post('/contact', contactForm);
router.put('/resetpassword', resetPassword);

router.get('/fav', validateToken, getFav);
router.post('/fav',validateToken, postFav);
router.delete('/fav/:type/:api_id', validateToken, deleteFav);
router.get('/:resources', validateToken, getResources);
router.get('/details/:resources/:id', validateToken, getDetails);
router.put('/updateuser', validateToken, updateUser);
// router.put('/updatepicture',validateToken, upload.single('image'), updateProfilePicture );
router.put('/updatepicture',validateToken,  updateProfilePicture );
router.put('/deleteuser',validateToken, deleteUser);






// console.log(router)

module.exports = router;