<template>
<div>
  <div>
      <br>
      <Breadcrumb>
        <BreadcrumbItem to="/">
            <Icon type="ios-home"></Icon> 主页
        </BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">
            <Icon type="logo-buffer"></Icon>关于我们
        </BreadcrumbItem>
         <BreadcrumbItem to="/">
           <Icon type="md-contact" ></Icon>账户信息
        </BreadcrumbItem>
        <BreadcrumbItem to="/">
            <Icon type="ios-create"></Icon>联系我们
        </BreadcrumbItem>
    </Breadcrumb>
    </div  >  
    <div class="ti-font">我的订单</div>
    <hr />
	<Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem  name="1">
            <Icon type="ios-paper" />
            全部
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-analytics" />
            正在处理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="md-bookmarks" />
                历史查询
            </template>
            <MenuGroup title="浏览记录">
                <MenuItem name="3-1">新增项目</MenuItem>
                <MenuItem name="3-2">特别关注</MenuItem>
            </MenuGroup>
            <MenuGroup title="交易流水">
                <MenuItem name="3-3">支出记录</MenuItem>
                <MenuItem name="3-4">收益记录</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-globe" />
            线上社区
        </MenuItem>
        <MenuItem name="5">
            <Icon type="ios-construct" />
            售后服务
        </MenuItem>
    </Menu>
    <Table border :columns="columns4" :data="data10"></Table>
    <div style="text-align:center">
    <Page :total="100" prev-text="Previous" next-text="Next" />
    </div>
</div>
</template>
<script>
    export default {
        data () { 
          return {
            columns4: [
                    {
                        title: '交易日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '交易用户',
                        key: 'name'
                    },
                    {
                        title: '订单编号',
                        key: 'order',
                    },
                    {
                        title: '交易时间',
                        key: 'time'
                    }
                ],
                data10: [
                    {
                        name: 'John Brown',
                        order: 18,
                        time: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        order: 24,
                        time: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        order: 30,
                        time: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        order: 26,
                        time: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Adler Snow',
                        order: 26,
                        time: 'Ottawa No. 2 Leafy Park',
                        date: '2016-10-05'  
                    },
                    {
                        name: 'Jim Green',
                        order: 24,
                        time: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Jim Green',
                        order: 24,
                        time: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Jim Green',
                        order: 24,
                        time: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    }
                ] 
          }
        }
    }
</script>

<style>
.ti-font{
        text-align:center;
        font-size: 35px;
        color: #464c5b;
}
</style>