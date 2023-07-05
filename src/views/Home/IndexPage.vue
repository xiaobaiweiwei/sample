<template>
  <div>
    <!-- 背景图 -->
    <div class="img-box">
      <img src="@/assets/images/bgc.jpg" alt="">
    </div>

    <!-- 首页布局 -->
    <div class="common-layout">
      <el-container>
        <el-aside>
          <div class="aside-top">
            <div class="aside-top-header">
              <p>开始使用</p>
              <img src="@/assets/images/icon4.gif" alt="">
            </div>
            <div class="aside-top-content">
              <div class="aside-top-content-item">
                <p>
                  <img src="@/assets/images/icon5.gif" alt="">
                </p>
                <span>创建标注任务</span>
              </div>
              <div class="aside-top-content-item">
                <p>
                  <img src="@/assets/images/icon6.gif" alt="">
                </p>
                <span>继续上次标注</span>
              </div>
              <div class="aside-top-content-item">
                <p>
                  <img src="@/assets/images/icon7.gif" alt="">
                </p>
                <span>浏览检索样本</span>
              </div>
            </div>
          </div>
          <div class="aside-middle">
            <div class="aside-middle-header">
              <div>
                <p>我的任务</p>
                <img src="@/assets/images/icon4.gif" alt="">
              </div>
              <el-button size="small" round>更多</el-button>
            </div>
            <div class="aside-middle-content">
              <el-empty description="没有关联的标注任务" />
            </div>
          </div>
          <div class="aside-bottom">
            <div class="aside-bottom-header">
              <p>文档与帮助</p>
              <img src="@/assets/images/icon4.gif" alt="">
            </div>
            <div class="aside-bottom-content">
              <div class="aside-bottom-content-item">
                <p>
                  <img src="@/assets/images/icon8.gif" alt="">
                </p>
                <span>入门指南</span>
              </div>
              <div class="aside-bottom-content-item">
                <p>
                  <img src="@/assets/images/icon9.gif" alt="">
                </p>
                <span>使用手册</span>
              </div>
              <div class="aside-bottom-content-item">
                <p>
                  <img src="@/assets/images/icon10.gif" alt="">
                </p>
                <span>定价与收费</span>
              </div>
              <div class="aside-bottom-content-item">
                <p>
                  <img src="@/assets/images/icon11.gif" alt="">
                </p>
                <span>联系我们</span>
              </div>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div class="main-top"></div>
          <div class="main-bottom"></div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.img-box {

  img {
    width: 100%;
    height: 171px;
    display: block;
    margin-bottom: 15px;
  }
}

.common-layout {
  display: flex;

  .el-aside {
    width: 460px;
    margin-right: 15px;
    overflow-y: hidden;
    margin-bottom: 60px;

    .aside-top {
      height: 195px;
      background-color: #fbfbfb;
      margin-bottom: 15px;
      border: 1px solid #dce4eb;

      .aside-top-header {
        height: 44px;
        border-bottom: 1px solid #dce4eb;
        font-size: 19px;
        color: #000000;
        line-height: 19px;
        padding-top: 12px;
        padding-left: 17px;
        position: relative;

        img {
          width: 4px;
          height: 14px;
          position: absolute;
          left: 0;
          top: 15px;
        }
      }

      .aside-top-content {
        padding: 15px;
        box-sizing: border-box;

        .aside-top-content-item {
          display: flex;
          align-items: center;
          height: 38px;

          p {
            img {
              display: block;
              width: 20px;
              height: 23px;
              margin-left: 22px;
              margin-right: 18px;
            }
          }

          span {
            font-size: 17px;
            color: #5f6368;
          }

          &:hover {
            background-color: #ffffff;
            box-shadow: 5px 5px 5px 5px #f2f2f2;
          }
        }
      }
    }

    .aside-middle {
      height: 475px;
      background-color: #ffffff;
      margin-bottom: 15px;
      border: 1px solid #dce4eb;

      .aside-middle-header {
        height: 44px;
        border-bottom: 1px solid #dce4eb;
        font-size: 19px;
        color: #000000;
        line-height: 19px;
        padding-top: 12px;
        padding-left: 17px;
        position: relative;
        display: flex;
        justify-content: space-between;

        img {
          width: 4px;
          height: 14px;
          position: absolute;
          left: 0;
          top: 15px;
        }

        .el-button {
          margin-right: 17px;
          background-color: #eaf5ff;
          color: #2d99ff;
        }
      }

      .aside-middle-content {
        .el-empty {
          :deep(.el-empty__description) {
            p {
              font-size: 25px;
            }
          }
        }
      }
    }

    .aside-bottom {
      height: 235px;
      background-color: #fbfbfb;
      margin-bottom: 15px;
      border: 1px solid #dce4eb;

      .aside-bottom-header {
        height: 44px;
        border-bottom: 1px solid #dce4eb;
        font-size: 19px;
        color: #000000;
        line-height: 19px;
        padding-top: 12px;
        padding-left: 17px;
        position: relative;

        img {
          width: 4px;
          height: 14px;
          position: absolute;
          left: 0;
          top: 15px;
        }
      }

      .aside-bottom-content {
        padding: 15px;
        box-sizing: border-box;

        .aside-bottom-content-item {
          display: flex;
          align-items: center;
          height: 40px;

          p {
            img {
              display: block;
              width: 20px;
              height: 23px;
              margin-left: 36px;
              margin-right: 15px;
            }
          }

          span {
            font-size: 17px;
            color: #5f6368;
          }

          &:hover {
            background-color: #ffffff;
            box-shadow: 5px 5px 5px 5px #f2f2f2;
          }
        }
      }
    }
  }

  .el-main {
    flex: 1;
    height: 100vh;
    // background-color: skyblue;
    padding: 0;

    .main-top {
      height: 104px;
      background-color: rgb(95, 131, 173);
      margin-bottom: 15px;
      border: 1px solid #dce4eb;
    }

    .main-bottom {
      height: 722px;
      background-color: rgb(147, 124, 165);
      border: 1px solid #dce4eb;
    }
  }
}
</style>