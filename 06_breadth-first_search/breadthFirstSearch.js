const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy', 'thom'];
graph.claire = ['jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const isSeller = (person) => person[person.length -1] === 'm';

const breadthSearch = (name) => {
  let queue = [];
  queue.push(...graph[name]);
  const searched = [];

  while(queue.length) {
    const person = queue.shift();
    if (isSeller(person)) {
      return `${person} is a mango seller!`;
    }
    queue.push(...graph[person]);
    searched.push(person);
  }

  return `not seller!`;
}

//console.log(breadthSearch('you'));