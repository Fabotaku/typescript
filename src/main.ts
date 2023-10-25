import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

//import topics
// import './topics/01-basic-types.ts'
// import './topics/02-object-interface.ts'
// import './topics/03-functions.ts'
// import './topics/04-homework-types.ts'
// import './topics/05-basic-destructuring.ts'
// import './topics/06-function-destructuring.ts'
// import './topics/07-import-export.ts'
import './topics/08-classes.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  hola mundo
`

console.log('hola mundo')

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
