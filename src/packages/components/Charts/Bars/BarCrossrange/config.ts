import { echartOptionProfixHandle, publicConfig } from '@/packages/public'
import { BarCrossrangeConfig } from './index'
import { CreateComponentType } from '@/packages/index.d'
import cloneDeep from 'lodash/cloneDeep'
import dataJson from './data.json'

export const includes = ['legend', 'xAxis', 'yAxis']

export const option = {
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      show: true,
      type: 'shadow',
    },
  },
  legend: {
    show: true,
  },
  xAxis: {
    show: true,
    type: 'value',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    show: true,
    type: 'category',
  },
  dataset: { ...dataJson },
  series: [
    {
      type: 'bar',
      barWidth: null,
      itemStyle: {
        color: null,
        borderRadius: 0,
      },
    },
    {
      type: 'bar',
      barWidth: null,
      itemStyle: {
        color: null,
        borderRadius: 0,
      },
    },
  ],
}

export default class Config extends publicConfig
  implements CreateComponentType {
  public key = BarCrossrangeConfig.key
  public chartConfig = cloneDeep(BarCrossrangeConfig)
  // 图表配置项
  public option = echartOptionProfixHandle(option, includes)
}
