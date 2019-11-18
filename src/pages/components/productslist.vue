<template>
  <div class="productslist">
     <img src="../../assets/3.png"   width=100% height="135"/>
     <div><Icon type="location"  />
      <span class="locationtext">你的位置</span> 
     <Input v-model="value4" icon="ios-clock-outline" placeholder="目的地" class="locationtext"></Input>
     </div>
     <img src="../../assets/img0_jingxuan.png" alt="精选"  width=20% height=20%/>
     <img src="../../assets/img1_jingwai.png" alt="境外"   width=20% height=20%/>
     <img src="../../assets/img2_jingnei.png" alt="境内"   width=20% height=20%/>
     <img src="../../assets/img3_zhoubian.png" alt="周边"  width=20% height=20%/>
     <img src="../../assets/img4_qinzi.png" alt="亲子"   width=20% height=20%/>

     <Row>
        <Col span="11">
            <Card dis-hover>
                <p slot="title"></p>
                <p>商品名称</p>
                <p>详情</p>
                <p>商品价格</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <p slot="title"></p>
                <p>商品名称</p>
                <p>详情</p>
                <p>商品价格</p>
            </Card>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '示例页面',
      data: [{
        name: 'name2',
        value: 10
      }]
    }
  },
  methods: {
    mothedname () {

    }
  }
}
</script>

<style>
.locationtext{
    width: 50%
}
</style>