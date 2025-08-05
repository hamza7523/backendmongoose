const asyncHandler = (func) => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message || 'Internal Server Error' });
    }
}
export { asyncHandler };