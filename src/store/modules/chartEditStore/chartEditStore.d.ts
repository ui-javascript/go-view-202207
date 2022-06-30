import { CreateComponentType, FilterEnum} from '@/packages/index.d'
import { HistoryActionTypeEnum } from '@/store/modules/chartHistoryStore/chartHistoryStore.d'
import { RequestHttpEnum, RequestDataTypeEnum } from '@/enums/httpEnum'
import { PreviewScaleEnum } from '@/enums/styleEnum'
import type {
  ChartColorsNameType,
  GlobalThemeJsonType,
} from '@/settings/chartThemes/index'

// 编辑画布属性
export enum EditCanvasTypeEnum {
  EDIT_LAYOUT_DOM = 'editLayoutDom',
  EDIT_CONTENT_DOM = 'editContentDom',
  OFFSET = 'offset',
  SCALE = 'scale',
  USER_SCALE = 'userScale',
  LOCK_SCALE = 'lockScale',
  IS_CREATE = 'isCreate',
  IS_DRAG = 'isDrag',
}

// 编辑区域
export type EditCanvasType = {
  // 编辑区域 DOM
  [EditCanvasTypeEnum.EDIT_LAYOUT_DOM]: HTMLElement | null
  [EditCanvasTypeEnum.EDIT_CONTENT_DOM]: HTMLElement | null
  // 偏移大小
  [EditCanvasTypeEnum.OFFSET]: number
  // 缩放
  [EditCanvasTypeEnum.SCALE]: number
  // 缩放
  [EditCanvasTypeEnum.USER_SCALE]: number
  // 锁定缩放
  [EditCanvasTypeEnum.LOCK_SCALE]: boolean
  // 初始化创建
  [EditCanvasTypeEnum.IS_CREATE]: boolean
  // 拖拽中
  [EditCanvasTypeEnum.IS_DRAG]: boolean
}

// 滤镜/背景色/宽高主题等
export enum EditCanvasConfigEnum {
  WIDTH = 'width',
  HEIGHT = 'height',
  CHART_THEME_COLOR = 'chartThemeColor',
  CHART_THEME_SETTING = 'chartThemeSetting',
  BACKGROUND = 'background',
  BACKGROUND_IMAGE = 'backgroundImage',
  SELECT_COLOR = 'selectColor',
  PREVIEW_SCALE_TYPE = 'previewScaleType',
}

export interface EditCanvasConfigType {
  // 滤镜-色相
  [FilterEnum.HUE_ROTATE]: number
  // 滤镜-饱和度
  [FilterEnum.SATURATE]: number
  // 滤镜-亮度
  [FilterEnum.BRIGHTNESS]: number
  // 滤镜-对比度
  [FilterEnum.CONTRAST]: number
  // 滤镜-不透明度
  [FilterEnum.OPACITY]: number
  // 变换（暂不使用）
  [FilterEnum.ROTATE_Z]: number
  [FilterEnum.ROTATE_X]: number
  [FilterEnum.ROTATE_Y]: number
  [FilterEnum.SKEW_X]: number
  [FilterEnum.SKEW_Y]: number
  // 大屏宽度
  [EditCanvasConfigEnum.WIDTH]: number
  // 大屏高度
  [EditCanvasConfigEnum.HEIGHT]: number
  // 背景色
  [EditCanvasConfigEnum.BACKGROUND]?: string
  [EditCanvasConfigEnum.BACKGROUND_IMAGE]?: string | null
  // 图表主题颜色
  [EditCanvasConfigEnum.CHART_THEME_COLOR]: ChartColorsNameType
  // 图表全局配置
  [EditCanvasConfigEnum.CHART_THEME_SETTING]: GlobalThemeJsonType
  // 图表主题颜色
  [EditCanvasConfigEnum.SELECT_COLOR]: boolean
  // 预览展示方式
  [EditCanvasConfigEnum.PREVIEW_SCALE_TYPE]: PreviewScaleEnum
}

// 坐标轴信息
export enum EditCanvasTypeEnum {
  START_X = 'startX',
  START_Y = 'startY',
  X = 'x',
  Y = 'y',
}

// 鼠标位置
export type MousePositionType = {
  // 开始 X
  [EditCanvasTypeEnum.START_X]: number
  // 开始 Y
  [EditCanvasTypeEnum.START_Y]: number
  // X
  [EditCanvasTypeEnum.X]: number
  // y
  [EditCanvasTypeEnum.Y]: number
}

// 操作目标
export type TargetChartType = {
  hoverId?: string
  selectId: string[]
}

// 数据记录
export type RecordChartType = {
  charts: CreateComponentType | CreateComponentType[]
  type: HistoryActionTypeEnum.CUT | HistoryActionTypeEnum.COPY
}

// Store 枚举
export enum ChartEditStoreEnum {
  EDIT_RANGE = 'editRange',
  EDIT_CANVAS = 'editCanvas',
  RIGHT_MENU_SHOW = 'rightMenuShow',
  MOUSE_POSITION = 'mousePosition',
  TARGET_CHART = 'targetChart',
  RECORD_CHART = 'recordChart',
  // 以下需要存储
  EDIT_CANVAS_CONFIG = 'editCanvasConfig',
  REQUEST_GLOBAL_CONFIG = 'requestGlobalConfig',
  COMPONENT_LIST = 'componentList',
}

// 全局的图表请求配置
export type RequestGlobalConfigType = {
  // 请求源地址
  requestOriginUrl?: string
  // 轮询时间
  requestInterval: number
}
// 单个图表请求配置
export type RequestConfigType = {
  // 获取数据的方式
  requestDataType: RequestDataTypeEnum
  // 请求方式 get/post/del/put/patch
  requestHttpType: RequestHttpEnum
  // 源后续的 url
  requestUrl?: string
}

// Store 类型
export interface ChartEditStoreType {
  [ChartEditStoreEnum.EDIT_CANVAS]: EditCanvasType
  [ChartEditStoreEnum.EDIT_CANVAS_CONFIG]: EditCanvasConfigType
  [ChartEditStoreEnum.RIGHT_MENU_SHOW]: boolean
  [ChartEditStoreEnum.MOUSE_POSITION]: MousePositionType
  [ChartEditStoreEnum.TARGET_CHART]: TargetChartType
  [ChartEditStoreEnum.RECORD_CHART]?: RecordChartType
  [ChartEditStoreEnum.REQUEST_GLOBAL_CONFIG]: RequestGlobalConfigType
  [ChartEditStoreEnum.COMPONENT_LIST]: CreateComponentType[]
}

export interface ChartEditStorage {
  [ChartEditStoreEnum.EDIT_CANVAS_CONFIG]: EditCanvasConfigType
  [ChartEditStoreEnum.REQUEST_GLOBAL_CONFIG]: RequestGlobalConfigType
  [ChartEditStoreEnum.COMPONENT_LIST]: CreateComponentType[]
}
