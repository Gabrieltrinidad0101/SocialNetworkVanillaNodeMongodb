import auth from "./services/auth.js"
import User from "./user.js"
import "./signOut.js"

const user = await auth()
new User(user._id)
