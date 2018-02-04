import Framework7 from 'framework7'

const f7 = new Framework7({
  root: 'body',
  name: 'f7-react',
  id: 'f7-react',
  theme: 'auto',
  panel: {
    swipe: 'left',
    leftBreakpoint: 768,
    rightBreakpoint: 1024
  },
  methods: {
    alert: msg => f7.dialog.alert(msg)
  },
  touch: {
    tapHold: true,
    tapHoldDelay: 2000,
    fastClicks: true, // default: true 清楚300ms延迟
    tapHoldPreventClicks: true,
    fastClicksDistanceThreshold: 10, // 当触摸移动超过这个范围，触发事件将会失效
    activeState: true, //  点击其他元素添加active-state的class
    fastClicksDelayBetweenClicks: 200 // 在多次点击之间允许的最小延迟
  },
  on: {
    touchmove: () => {
    },
    pageInit: function (page) {
      console.log('初始化页面：%o', page)
    },
    popupOpen: function (popup) {
      console.log('页面弹窗：%o', popup)
    }
  }
})

export {
  f7
}
