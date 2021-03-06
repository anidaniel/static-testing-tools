// function add(a, b) {
//     return a + b
// }

// function getFullName(user) {
//     const {
//         name: {first, middle, last},
//     } = user
//     return [first, middle, last].filter(Boolean).join('')
// }

// add(1, 'two')
// getFullName({name: {first: 'Chandler', midd1e: 'Muriel', last: 'Bing'}})

//TS based same JS code down below:
function add(a: number, b: number): number {
  return a + b
}

interface User {
  name: {
    first: string
    middle: string
    last: string
  }
}

function getFullName(user: User): string {
  const {
    name: {first, middle, last},
  } = user
  return [first, middle, last].filter(Boolean).join('')
}

add(1, 2)

getFullName({name: {first: 'Chandler', middle: 'Muriel', last: 'Bing'}})
