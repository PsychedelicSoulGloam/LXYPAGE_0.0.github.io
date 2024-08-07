// 书本目录，如果无ols变量则无目录，ols 变量名勿删，全局共享
var ols = [
  {
    "caption": "1 封面",
    "page": "1",
  },
  {
    "caption": "2",
    "page": "2",
  },
  {
    "caption": "3 题目",
    "page": "3",
  },
  {
    "caption": "4 目录",
    "page": "4",
  },
  {
    "caption": "5 心理模型理解预测",
    "page": "5",
  },
  {
    "caption": "6",
    "page": "6",
  },
  {
    "caption": "7 天猫精灵",
    "page": "7",
  },
  {
    "caption": "8",
    "page": "8",
  },
  {
    "caption": "9",
    "page": "9",
  },
  {
    "caption": "10 波普跃迁",
    "page": "10",
  },
  {
    "caption": "11",
    "page": "11",
  },
  {
    "caption": "12",
    "page": "12",
  },
  {
    "caption": "13 流行乐",
    "page": "13",
  },
  {
    "caption": "14",
    "page": "14",
  },
  {
    "caption": "15",
    "page": "15",
  },
  {
    "caption": "16",
    "page": "16",
  },
  {
    "caption": "17 龛龛",
    "page": "17",
  },
  {
    "caption": "18",
    "page": "18",
  },
  {
    "caption": "19",
    "page": "19",
  },
  {
    "caption": "20",
    "page": "20",
  },
  {
    "caption": "21 ABOUT ME",
    "page": "21",
  },
  {
    "caption": "22",
    "page": "22",
  },
];

// 路径配置
var loadImgpath = "./files/thumb/"

bookConfig.largePath = loadImgpath    // 大图路径
bookConfig.normalPath = loadImgpath
bookConfig.thumbPath = loadImgpath
bookConfig.totalPageCount = ols.length    // 页面数量