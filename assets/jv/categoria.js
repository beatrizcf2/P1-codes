document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let link = document.querySelector(".link")

  console.log(link)

  link.href = "projeto.html?pri="+ value + "&key={{@key}}"

  let db = coDesConnect('https://projeto-1-cdesign.firebaseio.com/')

  db.download('/', function(data) {

    context = data
    coDesReplace('.main-menu', context)

    context = data['Portifolio'][value]
    
    coDesReplace('.category-text', context)

    coDesReplace('.projects-menu', context)

  })
})
