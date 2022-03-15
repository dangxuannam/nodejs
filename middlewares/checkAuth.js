export const checkAuth = (req, res, next) => {
    const status = true
    if(status) {
        console.log("chào sếp")
        next();
    } else {
        console.log('k co quyen truy cap')
    }
}