const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passResponse = passwordSchema.safeParse(password);

    if (!usernameResponse.success || !passResponse.success) {
        return null;
    }
    const token = jwt.sign({
        username
    }, jwtPassword);

    return token;
}

const ans = signJwt("ajai@gmail.com", "jegghjfst")
console.log(ans);

function verifyJwt(token) {
    let ans = true;
    try{
        const verifyResponse = jwt.verify(token, jwtPassword);
        return true;
    } catch(e) {
        ans = false;
    }
    return(ans);
}

console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFqYWlAZ21haWwuY29tIiwiaWF0IjoxNzE0NzUxMjk0fQ.eLSKKhC86FTu5sx2tnXaLxrc1zH3xqrqB5GTZFyukaM"))

function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFqYWlAZ21haWwuY29tIiwiaWF0IjoxNzE0NzUwODU2fQ.4YT_m7UU6LM2fQGo9fTOpKIguAGuKiCMGvfESiG_C_k"));