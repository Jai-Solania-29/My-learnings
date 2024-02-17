const allUsers = [{
    firstName: "Jaideep",
    gender: "male"
}, {
    firstName: "Kanika",
    gender: "female"
}, {
    firstName: "Chirag",
    gender: "male"
}]

for (let i = 0; i< allUsers.length; i++) {
    if (allUsers[i]["gender"] == "female") {
        console.log(allUsers[i]["firstName"])
    }
}
