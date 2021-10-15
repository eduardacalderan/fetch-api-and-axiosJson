//
/*GET DATA*/
//

axios('pessoas.json').then(response => loadElements(response.data))

//
/*LOAD JSON ELEMENTS*/
//

function loadElements(json) {
  //
  function showElements() {
    const table = document.createElement('table')
    table.classList.add('table')

    const result = document.querySelector('.result')
    result.appendChild(table)

    createTitles(table)
    createElementsTable(table)
  }

  //

  function createTitles(table) {
    const trTitle = document.createElement('tr')

    let th = document.createElement('th')
    th.innerHTML += 'Nome'
    trTitle.appendChild(th)

    th = document.createElement('th')
    th.innerHTML += 'Idade'
    trTitle.appendChild(th)

    th = document.createElement('th')
    th.innerHTML += 'Salário'
    trTitle.appendChild(th)
    table.appendChild(trTitle)
  }

  //

  function createElementsTable(table) {
    for (pessoa of json) {
      const tr = document.createElement('tr')

      let td = document.createElement('td')
      td.innerHTML += pessoa.nome
      tr.appendChild(td)

      td = document.createElement('td')
      td.innerHTML += pessoa.idade
      tr.appendChild(td)

      td = document.createElement('td')
      td.innerHTML += pessoa.salario
      tr.appendChild(td)

      table.appendChild(tr)
    }
  }

  showElements()
}
