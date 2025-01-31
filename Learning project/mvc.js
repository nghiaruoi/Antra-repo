const View = (() => {


  const domSelector = {
    input: document.querySelector("#todoListInput"),
    addBtn: document.querySelector("#addButton"),
    container: document.querySelector("#taskContainer")
  }
  const arr = [1, 2, 3, 4, 5]
  const createTemplate = (dataList) => {
    let template = ""
    dataList.forEach(item => {
      template += `<li>${item.title}</li>`
    })
    return template

    const render = (element, innerHTMLTemplate) => {
      element.innerHTML = innerHTMLTemplate
    }
  }

})()

const Model = ((view) => {

  const { domSelector, createTemplate, render } = view
  class State {
    constructor() {
      this._dataList = []
    }

    get dataList() {
      return this._dataList
    }

    set dataList(newDataList) {
      this._dataList = newDataList
      const template = createTemplate(this._dataList)
      render(domSelector.container, template)
    }
  }

})(View)

const Controller = ((view, model) => {
  const { domSelector } = view
  const { State } = { model }

  domSelector.addBtn.addEventListener('click', () => {
    let inputVal = domSelector.input.value
    state.dataList = [...state.dataList, {title: inputVal}]
    domSelector.input.value = "";
  })
})(View, Model)

const dataSource = Model.getApi()