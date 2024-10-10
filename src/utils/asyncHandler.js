const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
        
    }
}


export {asyncHandler}

// const asyncHandler = (fn) => async (req, res, next) => {  // Higher order functions look like this
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }  we will uise above code with promises. both are similar