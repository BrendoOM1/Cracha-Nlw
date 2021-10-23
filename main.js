const linksSocialMedia = {
  github: 'BrendoOM1',
  youtube: 'RocketSeat',
  facebook: 'brendo.o.monteiro',
  instagram: 'brendoom1',
  twitter: 'brendo_sirens'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}

// i = i + 1
// i++ (Soma e guarda )

// Ser humano ler (12345678910) / Maquina = Computador começa pelo (0123456789)

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      // userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

// Arrow Funcions
// function nomedafuncao(argumentos, argumento2) {
//
//}

// Criar uma function anonima
// argumento => {}

// nomedafuncai()
