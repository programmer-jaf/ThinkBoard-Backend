export const signUpController = async (req,res) => {
  try {
    return res.status(201).json({
      message: "User Signed Up Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    })
  }
}

export const signInController = async (req,res) => {
  try {
    return res.status(200).json({
      message: "User Signed In Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    })
  }
}

export const signOutController = async (req,res) => {
  try {
    return res.status(200).json({
      message: "User Signed Out Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    })
  }
}
