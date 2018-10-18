<template>
  <el-menu default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    mode="vertical"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b">
    <div v-for="(item, idx) in menuData" :key="idx">
      <el-submenu :index="item.index" v-if="item.children">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="(items, idx) in item.children" :key="idx">
          <router-link :to="items.path" class="sub-link">{{items.name}}</router-link>
          <router-link v-for="(val, i) in items.children" :key="i" :to="val.path">
            <el-menu-item :index="val.index">{{val.name}}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="item.index" v-if="!item.children">
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
    </div>
    </el-menu>
</template>

<script>
import menu from '@/components/js/menu'
export default {
  name: 'left-bar',
  data () {
    return {
      menuData: menu
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }

  }
}
</script>
<style lang="stylus" scoped>
.el-menu-vertical-demo {
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.sub-link {
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  padding-left: 25px;
  &:hover {
    color: #e5e5e5;
  }
}
</style>
