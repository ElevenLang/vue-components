<template>
  <a href @mouseleave="hiddenInfo" @mouseenter="showInfo" class="name" v-if="data">
    {{name}}
    <transition>
      <!-- <div class="container" v-show="visible"> -->
      <div class="container">
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
  </a>
</template>
<script>
import { getUserInfo } from "@/api/mock";

export default {
  name: 'user',
  props: ["name", "uid"],
  data() {
    return {
      data: "",
      visible: true,
      duration: 3000,
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
      setTimeout(() => {
        this.visible = true;
      }, 400);
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
  color: #333;
  text-decoration: none;
  position: relative;
  top: 300px;
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
  /* border-right: 10px #0099CC solid; */
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
.contacts{
display: flex; justify-content: center
}
.contacts>div{
  border: 1px solid #cccccc;
  padding: 10px;
  margin: 10px;
  line-height: 20px;
}
</style>