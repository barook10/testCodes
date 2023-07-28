/* 
sleep debt collector app
functions:
1. get sleep hours
2.get actual sleep hours
3. get ideal sleep hours
4. calculate debt collecter
*/

const getSleepHours = day => {
    if(day === 'monday') 
    {
        return 8
    } else if(day === 'tuesday')
    {
        return 7
    } else if(day === 'wednesday')
    {
        return 6
    } else if(day === 'thursday')
    {
        return 6
    } else if(day === 'friday')
    {
        return 7
    } else if(day === 'saturday')
    {
        return 8
    } else if(day === 'sunday')
    {
        return 7
    }
} 


const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
console.log('your actual sleep is: ' + getActualSleepHours())

const getIdealSleepHours = idealHours =>  
idealHours * 7


console.log('your ideal sleep is: ' + getIdealSleepHours(8))

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(8)
    if(idealSleepHours === actualSleepHours) {
        return 'you had perfect sleeping time'
    } else if(idealSleepHours > actualSleepHours) {
        return 'you should get more sleep'
    } else if(idealSleepHours < actualSleepHours) {
        return 'you slept more than your ideal sleep time'
    } else {
        return 'error!!'
    }
}
console.log(calculateSleepDebt())
