// Если есть какие-либо предложения по организации кода, то лучше их записывать сразу в мейн и растаскивать по остальным веткам

var ticker = document.querySelector('.ticker')
   list = document.querySelector('.ticker__list')
   clone = list.cloneNode(true)

ticker.append(clone)