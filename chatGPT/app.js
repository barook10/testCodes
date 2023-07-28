const tags =['G', 'A', 'T', 's']

for(let i = 0; i < tags.length; i++){
    console.log(`the value of i is: ${i}`)
    for(let j = 1; j < tags.length -1; j++){
        console.log(`the value of j is: ${j}`)
        console.log(`${tags[i]} and ${tags[j]}`)
    }
}