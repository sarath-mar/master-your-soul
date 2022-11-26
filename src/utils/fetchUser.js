const userAccessToken = () => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN") !== undefined ?
        localStorage.getItem("ACCESS_TOKEN") : localStorage.clear()
    return accessToken
}
const userInfoDetails = () => {
    const userInfo = localStorage.getItem("USER_DETAILS") !== undefined ?
        localStorage.getItem("USER_DETAILS") : localStorage.clear()
    return userInfo
}
const userRole = () => {
    const userInfo = localStorage.getItem("USER_ROLE") !== undefined ?
        localStorage.getItem("USER_ROLE") : localStorage.clear()
    return userInfo
}
export { userAccessToken, userInfoDetails, userRole }

//     "ACCESS_TOKEN",
// user.stsTokenManager.refreshToken
// );
// localStorage.setItem(
//   "USER_DETAILS",