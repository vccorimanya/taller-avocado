/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

let baseUrl = 'https://platzi-avo.vercel.app'
const app = document.querySelector('#app')

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN",{
    style: "currency",
    currency: "USD",
  }).format(price)
  return newPrice
}
/* con async await */
/*
const getItems = async () => {
  const response = await window.fetch(`${baseUrl}/api/avo`)
  dataJson = await response.json()
  const nodes = []

  dataJson.forEach(item => {

  })

} */

window.fetch(`${baseUrl}/api/avo`)
.then(response => response.json())
.then((dataJson) => {
  const nodes = []
  let avos = dataJson.data
  avos.forEach(item => {
    const container = document.createElement('div')
    container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300'

    const details = document.createElement('div')
    details.className = 'flex flex-col justify-center'

    const image = document.createElement('img')
    image.className = 'w-28 mr-6 rounded-lg'
    image.src = `${baseUrl}${item.image}`

    const title = document.createElement('h2')
    title.textContent = item.name
    title.className = 'text-2xl font-medium text-green-900'

    const price = document.createElement('h6')
    price.textContent = formatPrice(item.price)
    price.className = 'text-green-500'


    details.append(title, price)
    container.append(image,details)

    nodes.push(container)
  });
  app.className = 'mt-10 grid grid-cols-2 gap-2'
  app.append(...nodes)
})