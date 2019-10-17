document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projeto-1-cdesign.firebaseio.com/')

  db.download('/', function(data) {
    context = {'portfolio':data['Portifolio']}
     console.log(context)
    coDesReplace('.nav', context)
    coDesReplace('.index-texto', context)
  })
})
