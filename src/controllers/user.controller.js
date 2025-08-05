import { asyncHandler } from "../utils/asnycHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    //get user details from request body
    //validate the data
    //save the user to database if it doesnt exist already
    //check for images and avatar
    //upload them to cloudinary
    //create user objet= create a user object in db
    //remove password AND REFRESH TOKEN FIELD FROM THE RESPONSE
    //CHECK FOR USER CREATION SUCCESS
    //RETURN RES
    const { fullName, email, username, password } = req.body;
    console.log(req.body);
    res.status(201).json({ message: "User registered (dummy response)" });
});

const getUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "GET works!" });
});

export {
    registerUser,
    getUsers
};