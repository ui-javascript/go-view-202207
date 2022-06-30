export default {
  // 图表
  fetchMockData: {
    code: 0,
    status: 200,
    msg: '请求成功',
    data: {
      dimensions: ['product', 'dataOne', 'dataTwo'],
      source: [
        {
          product: '@name',
          'dataOne|100-900': 3,
          'dataTwo|100-900': 3
        },
        {
          product: '@name',
          'dataOne|100-900': 3,
          'dataTwo|100-900': 3
        },
        {
          product: '@name',
          'dataOne|100-900': 3,
          'dataTwo|100-900': 3
        },
        {
          product: '@name',
          'dataOne|100-900': 3,
          'dataTwo|100-900': 3
        },
        {
          product: '@name',
          'dataOne|100-900': 3,
          'dataTwo|100-900': 3
        },
        {
          product: '@name',
          'dataOne|100-900': 3,
          'dataTwo|100-900': 3
        }
      ]
    }
  },
  // 排名列表
  fetchRankList: {
    code: 0,
    status: 200,
    msg: '请求成功',
    data: [
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 },
      { name: '@name', 'value|100-900': 5 }
    ]
  },
  // 轮播表格
  fetchScrollBoard: {
    code: 0,
    status: 200,
    msg: '请求成功',
    data: [
      ['行1列1', '行1列2', '1'],
      ['行2列1', '行2列2', '2'],
      ['行3列1', '行3列2', '3'],
      ['行4列1', '行4列2', '4'],
      ['行5列1', '行5列2', '5'],
      ['行6列1', '行6列2', '6'],
      ['行7列1', '行7列2', '行7列3'],
      ['行8列1', '行8列2', '行8列3'],
      ['行9列1', '行9列2', '行9列3'],
      ['行10列1', '行10列2', '行10列3']
    ]
  },
  // 获取数字
  fetchNumberFloat: {
    code: 0,
    status: 200,
    msg: '请求成功',
    data: '@float(0, 0.99, 1, 4)'
  },
  fetchNumberInt: {
    code: 0,
    status: 200,
    msg: '请求成功',
    data: '@integer(0, 100)'
  },
  fetchText: {
    code: 0,
    status: 200,
    msg: '请求成功',
    data: '@paragraph(1, 10)'
  },
  fetchImage: (num: number) => ({
    code: 0,
    status: 200,
    msg: '请求成功',
    data: `https://robohash.org/${num}`
  })
}
