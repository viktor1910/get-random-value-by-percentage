const percentShowSomething = 30
const percentShowImportant = 70

const data = ['something 1', 'something 2', 'something 3','something 4','something 5', 'something 6', 'something 7', 'important 1','important 2', 'important 3']

const somethingList = data.filter(d => d.includes('something'))
const importantList = data.filter(d =>d.includes('important'))

const getRangeOption = (optionType, options) => {
  let rangeOption = percentShowSomething/options.length
  if(optionType === 'important'){
    rangeOption = percentShowImportant/options.length
  }

  return rangeOption
}

const getOption = (randomIndex, optionRange, options) => {

    const indexOptions = Math.floor(randomIndex/optionRange)

    return options[indexOptions]
}

const rangeImportant = getRangeOption('important', importantList)
const rangeSomething = getRangeOption('something', somethingList)

  
console.log('range', rangeImportant)

const main = () => {
  const randomIndexOption = Math.floor(Math.random() * 101)

  console.log(randomIndexOption)

  let renderOption = getOption(randomIndexOption, rangeSomething, somethingList)
  
  if(randomIndexOption > percentShowSomething) {
    const randomIndexImportantOption = randomIndexOption - percentShowSomething

    renderOption = getOption(randomIndexImportantOption, rangeImportant, importantList)
  }

  console.log(renderOption)
} 

setInterval(main, 3000)