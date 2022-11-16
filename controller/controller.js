const axios = require('axios');

module.exports = {

    async pesquisarDetails (request,response){
        let {username} = request.params
        var login;

        await axios.get('https://api.github.com/users/' + username)
        .then(function(resposta){
            login = resposta.data.login;
            public_repos = resposta.data.public_repos;
            avatar_url = resposta.data.avatar_url;
            nome = resposta.data.name;
            bio = resposta.data.bio;

            return response.status(200).json({login, public_repos, avatar_url, nome, bio});
        }).catch((err) => {
            response.status(200).json({ msg:"Perfil não encontrado" + err + username });
        })
    }
}