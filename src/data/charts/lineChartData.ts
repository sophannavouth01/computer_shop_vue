import { TLineChartData } from '../types'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getSize = (minSize = 12) => Math.max(minSize, new Date().getMonth())
const size = getSize()

const generateValue = () => Math.floor(Math.random() * 100)
const generateArray = (length: number) => Array.from(Array(length), generateValue)
const data1 = [20,20,40,73,10,50,89,10,20,60,0,80];
const data2 = [76,10,70,30,70,0,10,70,20,50,10,0];

const generateYLabels = () => {
  const flip = !!Math.floor(Math.random() * 2)
  return flip ? ['Debit', 'Credit'] : ['Credit', 'Debit']
}
const yLabels = generateYLabels()

export const lineChartData: TLineChartData = {
  labels: months.slice(0, size),
  datasets: [
    {
      label: yLabels[0],
      backgroundColor: '#4318FF',
      data: ( generateArray(size), data1)
    },
    {
      label: yLabels[1],
      backgroundColor: '#6AD2FF',
      data: ( generateArray(size), data2)
    },
  ],
}
