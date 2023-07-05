<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/logo.jpg" alt="">
    </div>
    <div class="menu">
      <el-dropdown placement="bottom-end">
        <span class="el-dropdown-link">
          <p>样本协同标注平台</p>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>模型自主训练平台</el-dropdown-item>
            <el-dropdown-item>影响智能处理平台</el-dropdown-item>
            <el-dropdown-item>模型部署发布平台</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div class="tabs">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <div class="oo">
          <el-tab-pane label="首页" name="first">
            <HomePage />
          </el-tab-pane>
          <el-tab-pane label="标注任务" name="second">标注任务</el-tab-pane>
          <el-tab-pane label="工作台" name="third">工作台</el-tab-pane>
          <el-tab-pane label="样本库" name="fourth">样本库</el-tab-pane>
          <el-tab-pane label="管理设置" name="fifth">管理设置</el-tab-pane>
        </div>
      </el-tabs>
    </div>


    <div class="icon-box">
      <el-icon>
        <Download />
      </el-icon>
      <el-icon>
        <DocumentRemove />
      </el-icon>
      <el-icon>
        <Operation />
      </el-icon>
    </div>

    <div class="avatar">
      <el-row class="demo-avatar demo-basic">
        <el-col :span="12">
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="30" :src="circleUrl" />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-icon>
        <ArrowDown />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { ref, reactive, toRefs } from 'vue'
import HomePage from '@/views/Home/IndexPage.vue'

const activeName = ref('first')

const handleClick = (tab: any, event: Event) => {
  console.log(tab, event)
}
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const { circleUrl } = toRefs(state)
</script>

<style lang="scss" scoped>
.header {
  height: 62px;
  width: 100%;
  position: fixed;
  display: flex;
  // background-color: pink;
  // z-index: 100;

  .logo {
    margin-top: 10px;

    img {
      width: 147px;
      height: 43px;
      display: block;
      margin-left: 16px;
      margin-right: 9px;
    }
  }

  .menu {
    margin-top: 18px;
    position: relative;
    z-index: 200;

    .el-dropdown {
      .el-dropdown-link {
        font-size: 25px;
        color: #000000;
        display: flex;

        .el-icon--right {
          margin-left: 10px;
          margin-top: 2px;
        }
      }

      .el-dropdown-link:focus {
        outline: none;
      }
    }
  }

  .tabs {
    position: absolute;
    width: 100vw;

    .oo {
      overflow-y: scroll;
    }

    :deep(.el-tabs__header) {
      width: 500px;
      margin: 0 auto;
      height: 52px;

    }

    :deep(.el-tabs__nav-wrap .is-top) {
      margin-top: 5px;

      :deep(.el-tabs__nav-wrap::after) {
        border: 0;
      }
    }

    :deep(.el-tabs__header .is-top) {
      font-size: 21px;
    }

    .el-tab-pane {
      height: 100vh;
      margin-top: 10px;
      background-color: #eff3f5;
    }

    :deep(.el-tabs__content) {
      padding-left: 15px;
    }
  }

  .icon-box {
    display: flex;
    position: absolute;
    right: 100px;
    top: 20px;
    width: 130px;
    justify-content: space-between;

    .el-icon {
      font-size: 23px;
    }
  }

  .avatar {
    position: absolute;
    right: 10px;
    top: 17px;
    display: flex;

    .el-icon {
      margin-top: 8px;
      margin-left: 12px;
    }
  }
}
</style>

