paths = [["B", "C"],["D", "B"],["C", "A"]] //A

let startPoints = paths.map((point)=> point[0])
let endPoints = paths.map((point)=> point[1])

const result = endPoints.filter((endPoint)=> {
    return !startPoints.includes(endPoint)
}).pop()

console.log(result);