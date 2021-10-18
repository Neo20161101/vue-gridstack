<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header theme="light" class="header">
      <div class="logo">
        logo
      </div>
      <div class="info">
        <div>
大幅度萨芬
        </div>
      </div>
      <div class="Menu">
        <a-menu @click="onMenuClick" mode="horizontal">
          <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
          <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
          <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
        ><a-icon type="setting" />Navigation Three - Submenu</span
        >
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1">
                Option 1
              </a-menu-item>
              <a-menu-item key="setting:2">
                Option 2
              </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group title="Item 2">
              <a-menu-item key="setting:3">
                Option 3
              </a-menu-item>
              <a-menu-item key="setting:4">
                Option 4
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>

        </a-menu>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: 0,
            margin: 0,
            minHeight: '280px',
          }"
        >
          <div class="grid-stack"></div>
        </a-layout-content>
      </a-layout>

      <Menu />
    </a-layout>
  </a-layout>
</template>

<script>
import Menu from "../../Menu";
// import Logo_img from "../../assets/logo.png";
// import Store from "@/AppStore";
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.min.css';
import { GridStack } from 'gridstack';
// THEN to get HTML5 drag&drop
import 'gridstack/dist/h5/gridstack-dd-native';
// 支持移动端触摸
// import 'gridstack/dist/jq/gridstack-dd-jqueryui';
export default {
  data() {
    return {
      loading: false,
      post: null,
      grid:null
    };
  },
  components: { Menu },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了

    this.fetchData();
  },
  mounted() {
    this.init();
  },
  beforeRouteEnter(to, from, next) {
    // const {
    //   state: { RoutesIndex },
    // } = Store;
    // console.log("beforeRouteEnter,",RoutesIndex)
    next();
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate(to, from, next) {

    next();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData",
  },
  methods: {
    init() {
// ...in your script
      const grid = GridStack.init({
        column: 12,
        cellHeight:72,
        float:true,
        margin: 3,
        dragOut:true,
        disableOneColumnMode:true,
        draggable:{handle: '.grid-stack-item-content', scroll: true, appendTo: 'body', containment: null}
      });
      grid.addWidget({w: 1, content: 'item 1'});
      this.grid = grid;
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    onLoginOut(e) {
      // console.log(Store);
      e.preventDefault();
      this.$router.replace("/Login");
    },
    onMenuClick(e) {
      //头部导航按钮事件
      // e.preventDefault();
      console.log(e)
      this.grid.addWidget({w: 1, content: 'item 2'});
    },
    onEdit() {
      //头部标签导航删除
    }
  },
};
</script>
<style lang='less'>
.ant-layout-header.header {
  background-color: #fff;
  color: #fff;
}
.header .logo {
  float: left;
  padding: 0 30px;
}
.header .logo img {
  width: 100%;
}
.header .info {
  float: right;
  text-align: right;
  padding: 0 15px;
  font-size: 1.2rem;
}
.header .info div {
  height: 30px;
  line-height: 38px;
}
.grid-stack {
  background-color: #FAFAD2;
  background-size: 56px 72px;
  //background-image: linear-gradient(
  //    90deg, #dfdfdf 0, #dfdfdf 3px, rgba(232, 232, 232, 0) 3px, rgba(232, 232, 232, 0) 167px, #dfdfdf 170px, #dfdfdf 56px),
  //linear-gradient(
  //    0deg, #dfdfdf 0, #dfdfdf 3px, rgba(232, 232, 232, 0) 3px, rgba(232, 232, 232, 0) 167px, #dfdfdf 170px, #dfdfdf 72px);
  background-image: repeating-linear-gradient(
    to right,#dfdfdf 0,#dfdfdf 2px,rgba(232, 232, 232, 0) 2px,rgba(232, 232, 232, 0) 56px
  ),repeating-linear-gradient(
      to bottom,#dfdfdf 0,#dfdfdf 3px,rgba(232, 232, 232, 0) 1px,rgba(232, 232, 232, 0) 69px
  );
  min-height: 100%;
  min-width: 100%;
  display: table;
}
.grid-stack-item-content { background-color: #18BC9C; }
.stack_maxBox2 {

}
</style>