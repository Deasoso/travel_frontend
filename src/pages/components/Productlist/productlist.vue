<template>
<div class="productlist">
    <div class="zoumadeng">
        <za-carousel class="slideview" direction="left" :swipeable="false" loop auto-play>
        <za-carousel-item :key="index" v-for="(i, index) in ITEMS">
            <div class="carousel-item-pic">
            <img :src="i.url" :alt="i.img" :draggable="false">
            </div>
        </za-carousel-item>
        </za-carousel>
    </div>
    <div class="search">
      <div class="search-bar">
        <Input placeholder="填写目的地/关键词" /> 
      </div>
        <div class="search-left">  
            <za-button block ghost @click="handleClick" float:left>行程天数</za-button>
        </div> 
        <div class="search-middle">  
            <za-button block ghost @click="handleClick" float:left>出发日期</za-button>
        </div>
        <div class="search-right">  
            <za-button theme="primary" block @click="handleClick" float:left>搜索</za-button>
        </div>   
   </div>
   <br>
   <div class="sort">
       <img src="https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/trm5VMeFp9lG2w2sPl0By28OoJRMmpEkgELnicXaUL53NnG0WlDW5Ij2eQS7EgJfU4dwC0HFT2jIECojQVPj4RQ/640?wx_fmt=jpeg" alt="精选"  width=19% />
       <img src="https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/trm5VMeFp9lG2w2sPl0By28OoJRMmpEkgELnicXaUL53NnG0WlDW5Ij2eQS7EgJfU4dwC0HFT2jIECojQVPj4RQ/640?wx_fmt=jpeg" alt="境外"  width=19% />
       <img src="https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/trm5VMeFp9lG2w2sPl0By28OoJRMmpEkgELnicXaUL53NnG0WlDW5Ij2eQS7EgJfU4dwC0HFT2jIECojQVPj4RQ/640?wx_fmt=jpeg" alt="境内"  width=19% />
       <img src="https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/trm5VMeFp9lG2w2sPl0By28OoJRMmpEkgELnicXaUL53NnG0WlDW5Ij2eQS7EgJfU4dwC0HFT2jIECojQVPj4RQ/640?wx_fmt=jpeg" alt="周边"  width=19% />
       <img src="https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/trm5VMeFp9lG2w2sPl0By28OoJRMmpEkgELnicXaUL53NnG0WlDW5Ij2eQS7EgJfU4dwC0HFT2jIECojQVPj4RQ/640?wx_fmt=jpeg" alt="亲子"  width=19% />
   </div>
   <div class="card">
        <Row>
            <Col span="11">
              <Card>
                 <List item-layout="vertical">
                    <ListItem v-for="item in data1" :key="item.title">
                        <ListItemMeta :avatar="item.avatar" :extra="item.img" :title="item.title" :description="item.description" />
                        {{ item.content }}
                        <template slot="action">
                            <li>
                                <Icon type="ios-star-outline" /> 123
                            </li>
                            <li>
                                <Icon type="ios-thumbs-up-outline" /> 234
                            </li>
                            <li>
                                <Icon type="ios-chatbubbles-outline" /> 345
                            </li>
                        </template>
                        <template slot="extra">
                            <img :src="item.img" >
                        </template>
                    </ListItem>
                </List>
              </Card>
            </Col>
            <Col span="11" offset="2">
              <Card dis-hover>
                  <List item-layout="vertical">
                    <ListItem v-for="item in data2" :key="item.title">
                        <ListItemMeta :avatar="item.avatar" :extra="item.img" :title="item.title" :description="item.description" />
                        {{ item.content }}
                        <template slot="action">
                            <li>
                                <Icon type="ios-star-outline" /> 123
                            </li>
                            <li>
                                <Icon type="ios-thumbs-up-outline" /> 234
                            </li>
                            <li>
                                <Icon type="ios-chatbubbles-outline" /> 345
                            </li>
                        </template>
                        <template slot="extra">
                            <img :src="item.img" >
                        </template>
                    </ListItem>
                </List>
              </Card> 
            </Col>
        </Row>
    </div>


</div>
</template>

<script>
module.exports = {
  data() {
    return {
      title: 'productlist',
      value: [20, 50],
      ITEMS,
      i: {},
      data1: [
                    {
                        title: '张家界·跟团游',
                        description: '玻璃栈道',
                        img: 'https://dimg04.c-ctrip.com/images/300412000000see7600D2_C_200_150.jpg',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '旅游项目名称'
                    },
                    {
                        title: '云南·跟团游',
                        description: '国家森林公园',
                        img: 'https://dimg04.c-ctrip.com/images/300i0s000000hinzaBCD3_C_200_150.jpg',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '旅游项目名称'
                    },
                    {
                        title: '广州·跟团游',
                        description: '超值特惠',
                        img: 'https://dimg04.c-ctrip.com/images/300o170000011df24F423_C_200_150.jpg',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '旅游项目名称'
                    },
                    {
                        title: '泰国·落地签',
                        description: '成团保障',
                        img: 'https://dimg04.c-ctrip.com/images/300v0e0000007652tEEB2_C_200_150.jpg',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '旅游项目名称'
                    }
                ],
      data2: [
                    {
                        title: '张家界·跟团游',
                        description: '玻璃栈道',
                        img: 'https://dimg04.c-ctrip.com/images/300412000000see7600D2_C_200_150.jpg',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '旅游项目名称'
                    },
                    {
                        title: '云南·跟团游',
                        description: '国家森林公园',
                        img: 'https://dimg04.c-ctrip.com/images/300i0s000000hinzaBCD3_C_200_150.jpg',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '旅游项目名称'
                    },
                    {
                        title: '广州·跟团游',
                        description: '超值特惠',
                        img: 'https://dimg04.c-ctrip.com/images/300o170000011df24F423_C_200_150.jpg',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '旅游项目名称'
                    },
                    {
                        title: '泰国·落地签',
                        description: '成团保障',
                        img: 'https://dimg04.c-ctrip.com/images/300v0e0000007652tEEB2_C_200_150.jpg',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '旅游项目名称'
                    }
                ]
    }
  },
   methods: {
    handleChangeStart(index){
      console.log(index);
    },
    handleChangeEnd(index){
      console.log(index);
    },
    onJumpTo(){
      this.$refs.carousel.onJumpTo(0)
    },
    onSlideTo(){
      this.$refs.carousel.onSlideTo(2)
    }
  },
}
const ITEMS = [
  {
    url: 'https://dimg04.c-ctrip.com/images/300i1900000167acy96EC.jpg',
    img: '1',
  },
  {
    url: 'https://dimg04.c-ctrip.com/images/30041a00000193hf046C0.jpg',
    img: '2',
  },
  {
    url: 'https://pages.c-ctrip.com/hotel/201909/qghcz/pces.jpg',
    img: '3',
  },
];
 
</script>

<style>
.demo-page{
  margin-left: 20px;
}
.zoumadeng{
  width:100%;
  /* height: 250px; */
  margin-left: 1%;
  margin-right: 1%;
}
.slideview{
  height: 380px;
}
.search-bar{
  height:50px;
}
.search{
  margin: 20px 3% 30px 5%;
}
.search-left{float:left;
  width: 500px；
}
.search-middle{float:left;
  width: 200px；
}
.search-right{float: right;
  width: 200px；
}
.sort{
  margin-left: 2%; 
}
.card{
  margin-right: 1%;
  margin-left: 1%;
}

</style>