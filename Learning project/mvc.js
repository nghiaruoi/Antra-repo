const Api = (() => {
  const getDataList = () => {
      return fetch("https://jsonplaceholder.typicode.com/todos").then((dataList) => {
         return dataList.json()
      })
  }

  return { getDataList }

})()
const View = (() => {
  // Everything that related to HTML template
  console.log(document)
  const domSelector = {
      input: document.querySelector("#todoListInput"),
      addBtn: document.querySelector("#addButton"),
      container: document.querySelector('#taskContainer')
  }

  console.log(domSelector)

  // https://jsonplaceholder.typicode.com/todos

  // create Template
  const createTemplate = (dataList) => {
      let template = ""
      dataList.forEach(item => {

          template += `<li>${item.title}<button class='deleteBtn' id="item${item.id}">x</button></li>`
      });
      return template;
  }

  // embed template into html / rerender template

  const render = (element, innerHTMLTemplate) => {
      element.innerHTML = innerHTMLTemplate;
  }

  return {
      domSelector,
      createTemplate,
      render
  }
})()

const Model = ((view, api) => {

  const { domSelector, createTemplate, render } = view
  const { getDataList } = api;

  class State {
      // constructor
      constructor() {
          this._dataList = []
      }

      get dataList() {
          return this._dataList
      }

      set dataList(newList) {
          this._dataList = newList
          const template = createTemplate(this._dataList)
          render(domSelector.container, template)
      }
  }

  return { State, getDataList }
})(View, Api)

const Controller = ((view, model) => {

  const { domSelector } = view
  const { State, getDataList } = model
  const state = new State()

  const bootstrap = () => {
      getDataList().then(res => {
          state.dataList = res.slice(0, 5)
      })
  }

  // when there is a user event, it will update the model
  // AddEventListener("view element")=> { update model}
  // HTMLelement.addEventListener('click', ()=>{

  // })
  domSelector.addBtn.addEventListener('click', () => {
      console.log("add button is clicked")
      let inputVal = domSelector.input.value;
      state.dataList = [...state.dataList, { title: inputVal}];
      domSelector.input.value = "";
  })

  domSelector.container.addEventListener('click',(event)=>{

      // console.log(event.target.id)
      // state.dataList.filter(item => !item.id === id.at(-1))

  })




  return {bootstrap}

})(View, Model)

Controller.bootstrap()
