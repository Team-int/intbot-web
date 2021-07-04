export default {
    invite: {
        production: "https://discord.com/api/oauth2/authorize?client_id=751339721782722570&permissions=0&scope=bot",
        test: ""
    },
    support: "https://discord.gg/nKaM6RrN92",
    invite_with_redirect: {
        production: "https://discord.com/api/oauth2/authorize?client_id=798709769929621506&permissions=0&redirect_uri=https%3A%2F%2Fintbot.teamint.xyz%2Fcallback&scope=bot",
        development: "https://discord.com/api/oauth2/authorize?client_id=798709769929621506&permissions=0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=bot",
        test: ""
    }
}