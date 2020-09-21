<template>
  <div class="name" v-if="data" @mouseleave="hiddenInfo" @mouseenter="showInfo">
    <!-- 增加vue-router，实现跳转到指定路由功能 -->
     <!-- todo -->
    <a href="#">{{name}}</a>
    <transition name="fade">
      <div class="container" v-show="visible">
        <div class="title">
          <img :src="data.img" alt />
          <div class="infos">
            <div>{{data.name}}(设置备注)</div>
            <div class="intro">简介：{{data.intro}}</div>
          </div>
        </div>
        <div class="info">
          <div class="nums">
            <span>关注 {{data.follow_nums}}</span>
            <span>粉丝 {{data.fans_nums}}</span>
            <span>微博 {{data.weibo_nums}}</span>
          </div>

          <div>
            <span>{{data.address}}</span>
            <span>就职于 {{data.company}}</span>
          </div>

          <div class="contacts">
            <div>
              <span class="icon iconfont iconcheckmark"></span>已关注
            </div>
            <div class="icon iconfont iconjiantou-up-down-copy"></div>
            <div>私信</div>
            <div>
              <div class="icon iconfont iconmenu"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { getUserInfo } from "@/api/mock";

export default {
  name: "user",
  props: ["name", "uid"],
  data() {
    return {
      data: "",
      visible: false,
    };
  },
  mounted() {},
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      const r = await getUserInfo(this.uid);
      this.data = r.data.data;
      console.log(r.data.data, 123);
    },
    showInfo() {
      this.visible = true;
    },
    hiddenInfo() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
@import "../assets/font/iconfont.css";

.name {
  position: relative;
  top: 300px;
  height: 30px;
}
.name a {
  color: #333;
  text-decoration: none;
}
.container {
  position: absolute;
  left: 50%;
  bottom: 150%;
  transform: translateX(-50%);
  color: #333;
  background: #fff;
  border: 1px solid #d6cdcd;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(2, 0, 0, 0.3);
  text-align: center;
  z-index: 1000;
  /* padding: 10px; */
}
.container::before {
  position: absolute;
  content: "";
  bottom: -20px;
  transform: rotate(270deg);
  border-top: 10px transparent dashed;
  border-left: 10px transparent dashed;
  border-bottom: 10px transparent dashed;
  border-right: 10px #fff solid;
}
.container .title {
  position: relative;
}
.infos {
  position: absolute;
  bottom: 10px;
  color: #fff;
  width: 100%;
}
.intro {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}

.info .nums {
}
.info .nums span {
  padding: 0 5px;
}
.info .nums span:nth-child(1),
.info .nums span:nth-child(2) {
  border-right: 1px solid #ccc;
}
.contacts {
  display: flex;
  justify-content: center;
}
.contacts > div {
  border: 1px solid #cccccc;
  padding: 10px;
  margin: 10px;
  line-height: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>