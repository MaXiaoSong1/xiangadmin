<template>
  <div class="subject">
    <div class="tou">
      <div>
        <!-- 新增抽屉 -->
        <el-button
          type="primary"
          :before-close="handleClose"
          style="margin-left: 16px"
          @click="drawer = true"
        >
          新增
        </el-button>
        <el-button class="batch" type="danger"> 批量删除 </el-button>
        <el-drawer v-model="drawer" title="I am the title" :with-header="false">
          <span>新增</span>
        </el-drawer>
      </div>
      <!--    刷新-->
      <el-tooltip content="刷新" placement="bottom">
        <el-icon class="box-item" @click="refresh">
          <Refresh />
        </el-icon>
      </el-tooltip>
    </div>
    <br />
    <!-- table -->
    <el-table ref="multipleTableRef" :data="getList" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="规格名称" prop="name" width="120">
      </el-table-column>
      <el-table-column prop="default" label="规格值" width="500" />
      <el-table-column prop="order" label="排序" />
      <el-table-column prop="status" label="状态" />
      <el-table-column property="操作" label="操作">
        <i style="color: #409eff; font-size: 12px">修改</i>
        <i class="delete" style="color: #409eff; font-size: 12px">删除</i>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAdministration } from '../../api/CommodityManagement/skusList'
const getList = ref([])
const drawer = ref(false)

const getProducts = async () => {
  try {
    const res = await getAdministration()

    getList.value = res.list
    console.log(res, '规格管理')
  } catch (e) {
    console.log(e)
  }
}
getProducts()

// shuaxin刷新
const refresh = () => {
  window.location.reload()
}
</script>

<style lang="scss" scoped>
.batch {
}
.delete {
  margin-left: 5px;
}
.el-table {
  margin: auto;
}
.subject {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 20px;
}
.tou {
  margin: auto;

  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon-button,
.box-item {
  color: #606266;
  height: 100%;
  width: 42px;
  font-size: 20px;
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>
