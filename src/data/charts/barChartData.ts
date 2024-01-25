import { TBarChartData } from '../types'

export const barChartData: TBarChartData = {
  labels: [
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
  ],
  datasets: [
    {
      label: 'Last year',
      backgroundColor: '#4318FF',
      data: [6,10,70,30,70,0,10,20,10,50,10,0],
    },
    {
      label: 'Current year',
      backgroundColor: '#6AD2FF',
      data: [20,20,40,76,10,50,60,10,20,30,50,10],
    },
  ],
}
