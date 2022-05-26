// Call with the arguments: applicationid, botToken
// As of node 17, you have to run with --experimental-fetch
const [
    _,
    __,
    applicationId,
    botToken
] = process.argv;
fetch(`https://discord.com/api/v9/applications/${applicationId}/commands`, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bot ${botToken}`
    },
    method: "POST",
    body: JSON.stringify({
        name: "ricepuritytest",
        description: "Take the Rice Purity Test"
    })
}).then(x => x.text()).then(x => console.log(x))