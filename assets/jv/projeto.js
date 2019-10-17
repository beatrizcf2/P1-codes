document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value2 = params['key']
  let value = params['pri']

  let db = coDesConnect('https://projeto-1-cdesign.firebaseio.com/')

  db.download('/', function(data) {

    context = data
    console.log(context)
    coDesReplace('.main-menu', context)


    context = data['Portifolio'][value]['projetos'][value2]
    coDesReplace('.project-title', context)
    coDesReplace('.project-image-cont', context)
    coDesReplace('.config', context)




    console.log(context)


  })
})
