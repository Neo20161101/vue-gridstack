<template>
  <a-layout-sider
    theme="light"
  >
    <div class="menu">
      dsadsa
    </div>
  </a-layout-sider>
</template>
<script>
import Store from "@/AppStore";
export default {
  components: {

  },
  data() {
    return {
      collapsed: false,
      selectedData: this.selectedKeyData,
    };
  },
  props: ["treedata", "selectedKeyData"],
  // props: {
  //   treedata: {
  //     default: function () {
  //       return [];
  //     },
  //   },
  //   selectedKeyData: {
  //     default: function () {
  //       return [];
  //     },
  //   },
  // },
  methods: {
    handleMenuClick(e) {
      const {
        item: { title },
        key,
      } = e;
      const {
        state: { panes, RoutesIndex },
        setPosition,
        setPanes,
      } = Store;
      const panesData = [...panes];
      // todos.content[0] = title;
      // sessionStorage.setItem("Breadcrumb",JSON.stringify(todos));
      sessionStorage.setItem("pathname", key);
      Store.state.pathname = key;
      setPosition({ Index: 1, Size: 10 }, {});
      let toggle = true;
      let panesDataKey = [];
      panesData.some((item) => {
        if (item.title == title) {
          Store.state.activeTabsKey = item.key;
          panesDataKey = [panesData[0], item];
          toggle = false;
          return true;
        }
      });

      if (toggle) {
        const panesLen = panes.length.toString();
        const obj = {
          key: panesLen,
          title: title,
          path: key,
          routesIndex: RoutesIndex,
        };
        Store.state.activeTabsKey = panesLen;
        panesData.push(obj);
        panesDataKey = [panesData[0], obj];
      }
      sessionStorage.setItem("openKeys", key.split("/")[1]); //记住导航折叠展开
      sessionStorage.setItem("panesDataKey", JSON.stringify(panesDataKey)); //记住当前标签导航
      setPanes(panesData); //保存当前标签导航
      this.selectedData = [key];
      this.$router.replace(key);
    },
  },
};
</script>
<style lang="less">
.menu{
  height:100%;
  border:1px solid red;
}
</style>