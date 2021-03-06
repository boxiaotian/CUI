
const all = [
  {
    title:'介绍',
    desc: '你好，虽然叫做CUI，但是本项目并没有一套自己的UI风格，让你见笑了。',
  },{
    desc: '当然，功能也并非如你所想是原创，拿第一个日期选择的功能来说，实际上是在网上找到的一份demo，当时的需求是做一个酒店预订的功能，但是这个demo在用户反向选择的时候会出现日期重叠这样的bug，所以当时也就是在源码基础之上进行bug修复。说实话能看到这样的demo是非常开心的，节约了我大部分的时间，饮水思源，于是将这个栗子搬了下来，重写了一份，呈现给手机之前的你。 代码如你所见，虽然我一直秉承着"less is more,物质越少，人性越多" 这样的编码哲学，但是多多少少还是有些不优雅，关于优雅也是仁者见仁智者见智了，所以，希望用到这些demo的你，也能提供给我更优美的写法，感激不尽。'
  },{
    title:'借鉴',
    desc: '项目中当然也有借鉴了其他项目的部分，如轮播图，第一个异形轮播就是借鉴了colorUI的，当时我看到这个轮播图十分的惊讶，因为swiper的使用真的是会让人忘记以前轮播图的写法，但是看到这个用c3 transform属性写的轮播图我不由得心生敬佩，以至于手痒… ，于是就有了第二个看起来不咋地的层叠轮播，以及第三个卡片轮播。'
  },{
    desc: '第三个卡片轮播看上去还不错，实际上也是我看到京东商城非常多的地方在用，既然效果好，那就写。'
  },{
    desc: '还有地区选择器，我以前也做过一个一模一样的，但是当时只是可以点击字母，然后选择，而看到colorUI的滑动选择字母不由得想说人外有人。于是继续借鉴，并提供了自己的优化。'
  },{
    title: '以后',
    desc: '仅仅希望本项目物有所用。给有缘的你一点点的思路。'
  },{
    desc:'本人QQ：2046917227'
  }
]

Page({
  data: {
    windowHeight: getApp().globalData.windowHeight,
    all,
  }
})