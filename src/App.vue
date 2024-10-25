<script setup lang="ts">
import { getCurrentInstance, ref, computed, reactive } from 'vue'
import { tinySmbTheme } from '@opentiny/vue-theme/theme'

const theme = getCurrentInstance().appContext.config.globalProperties.theme

const changeTheme = () => {
  console.log('theme', theme);
  if (theme.currentTheme?.id === 'tiny-smb-theme') {
    theme.changeTheme('')
  } else {
    theme.changeTheme(tinySmbTheme)
  }
}

const numericValue = ref(1)

const checked = ref(['上海'])

const isDisabled = ref(false)
const checkboxGroup = ref(['上海'])
const cities = ref(['上海', '北京'])
const isIndeterminate = computed({
  get() {
    return checkboxGroup.value.length > 0 && checkboxGroup.value.length !== cities.value.length
  }
})
const checkAll = computed({
  get() {
    return checkboxGroup.value.length === cities.value.length
  },
  set(val) {
    if (val) {
      checkboxGroup.value = [...cities.value]
    } else {
      checkboxGroup.value = []
    }
  }
})

const radioValue = ref('A')
const radioOptions = ref([
  { label: 'A', text: '很好' },
  { label: 'B', text: '一般' }
])
const burronOptions = ref([
  { label: 'A', text: '公交' },
  { label: 'B', text: '地铁' }
])

const switchValue1 = ref(true)
const switchValue2 = ref(false)

const ruleFormRef = ref()
const createData = reactive({
  username: '',
  password: ''
})

let validatePass = (rule, value, callback) => {
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
    callback(new Error('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字'))
  } else {
    callback()
  }
}

const isValidate = ref(true)
const rules = ref({
  username: [
    { required: true, message: '必填', trigger: 'blur' },
    { min: 2, max: 11, message: '长度必须不小于2', trigger: ['change', 'blur'] }
  ],
  password: [
    { required: true, message: '必填', trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' }
  ]
})

function handleSubmit() {
  ruleFormRef.value.validate(() => {
    // empty
  })
}


const selectOptions2 = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳', required: true },
  { value: '选项6', label: '南京' },
  { value: '选项7', label: '成都' }
])

const selectValue2 = ref(['选项1', '选项2'])

const dateValue = ref('2024-10-12')

const boxVisibility = ref(false)

const rate1 = ref(4)

const links = ref([
  {
    key: 'basic-usage',
    link: '#basic-usage',
    title: '基本用法'
  },
  {
    key: 'is-affix',
    link: '#is-affix',
    title: '固定模式'
  },
  {
    key: 'set-container',
    link: '#set-container',
    title: '滚动容器'
  },
  {
    key: 'on-change',
    link: '#change',
    title: 'change 事件'
  }
])


const showLine = ref('hide')
const size = ref('medium')
const indent = ref(18)
const treeData = ref([
  {
    id: '1',
    label: '数据 1',
    children: [
      { id: '1-1', label: '数据 1-1', children: [{ id: '1-1-1', label: '数据 1-1-1' }] },
      { id: '1-2', label: '数据 1-2' }
    ]
  },
  {
    id: '2',
    label: '数据 2',
    children: [
      { id: '2-1', label: '数据 2-1' },
      { id: '2-2', label: '数据 2-2' }
    ]
  },
  {
    id: '3',
    label: '数据 3',
    children: [{ id: '3-1', label: '数据 3-1' }]
  }
])
function nodeClick(data, node, vm) {
  console.log('点击节点事件：', { data, node, vm })
}

const timelineActive = ref(1)
const timelineData = ref([
  { name: '已下单', time: '2019-11-11 00:01:30' },
  { name: '运输中', time: '2019-11-12 14:20:15' },
  { name: '已签收', time: '2019-11-14 20:45:50' }
])


const tableData = reactive([
  {
    id: '1',
    name: 'GFD科技YX公司',
    city: '福州',
    employees: 800,
    createdDate: '2014-04-30 00:56:00',
    boole: false
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    city: '深圳',
    employees: 300,
    createdDate: '2016-07-08 12:36:22',
    boole: true
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    city: '中山',
    employees: 1300,
    createdDate: '2014-02-14 14:14:14',
    boole: false
  },
  {
    id: '4',
    name: 'TGB科技YX公司',
    city: '龙岩',
    employees: 360,
    createdDate: '2013-01-13 13:13:13',
    boole: true
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    city: '韶关',
    employees: 810,
    createdDate: '2012-12-12 12:12:12',
    boole: true
  },
  {
    id: '6',
    name: 'WSX科技YX公司',
    city: '黄冈',
    employees: 800,
    createdDate: '2011-11-11 11:11:11',
    boole: true
  },
  {
    id: '7',
    name: 'KBG物业YX公司',
    city: '赤壁',
    employees: 400,
    createdDate: '2016-04-30 23:56:00',
    boole: false
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术YX公司',
    boole: true,
    city: '厦门',
    createdDate: '2016-06-03 13:53:25',
    employees: 540
  }
])


const cascaderValue = ref('anzhuangcli')
const cascaderOptions = ref([
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'anzhuang',
        label: '安装',
        children: [
          {
            value: 'xiangmudengji',
            label: '项目登记'
          },
          {
            value: 'huanjingzhunbei',
            label: '环境准备'
          },
          {
            value: 'anzhuangcli',
            label: '安装 CLI'
          },
          {
            value: 'chuangjianxiangmu',
            label: '创建项目'
          }
        ]
      },
      {
        value: 'kaifa',
        label: '开发',
        children: [
          {
            value: 'yinruzujian',
            label: '引入组件'
          },
          {
            value: 'monishuju',
            label: '模拟数据'
          }
        ]
      }
    ]
  },
  {
    value: 'zujian',
    label: '组件',
    children: [
      {
        value: 'basic',
        label: '框架风格',
        children: [
          {
            value: 'layout',
            label: 'Layout 布局'
          },
          {
            value: 'color',
            label: 'Color 色彩'
          },
          {
            value: 'font',
            label: 'Font 字体'
          },
          {
            value: 'icon',
            label: 'Icon 图标'
          }
        ]
      },
      {
        value: 'form',
        label: '表单组件',
        children: [
          {
            value: 'radio',
            label: 'Radio 单选框'
          },
          {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          },
          {
            value: 'input',
            label: 'Input 输入框'
          },
          {
            value: 'number',
            label: 'Numeric 计数器'
          },
          {
            value: 'select',
            label: 'Select 选择器'
          },
          {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          },
          {
            value: 'switch',
            label: 'Switch 开关'
          },
          {
            value: 'slider',
            label: 'Slider 滑块'
          },
          {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          },
          {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          },
          {
            value: 'form',
            label: 'Form 表单'
          }
        ]
      },
      {
        value: 'data',
        label: '数据组件',
        children: [
          {
            value: 'tree',
            label: 'Tree 树形控件'
          },
          {
            value: 'pager',
            label: 'Pager 分页'
          }
        ]
      },
      {
        value: 'notice',
        label: '提示组件',
        children: [
          {
            value: 'alert',
            label: 'Alert 警告'
          },
          {
            value: 'loading',
            label: 'Loading 加载'
          }
        ]
      },
      {
        value: 'navigation',
        label: '导航组件',
        children: [
          {
            value: 'menu',
            label: 'NavMenu 导航菜单'
          },
          {
            value: 'tabs',
            label: 'Tabs 标签页'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          },
          {
            value: 'steps',
            label: 'Steps 步骤条'
          }
        ]
      },
      {
        value: 'others',
        label: '其他组件',
        children: [
          {
            value: 'rate',
            label: 'Rate 评分'
          },
          {
            value: 'tag',
            label: 'Tag 标签'
          },
          {
            value: 'usercontact',
            label: 'UserContact 联系人'
          },
          {
            value: 'slidebar',
            label: 'SlideBar 滚动块'
          }
        ]
      }
    ]
  }
])

const sliderValue = ref([20, 50])
</script>

<template>
  <div class="block changeTheme">
    <tiny-button @click="changeTheme">changeTheme</tiny-button>
  </div>
  <div class="block button">
    <tiny-button type="primary">主要按钮</tiny-button>
    <tiny-button>次要按钮</tiny-button>
  </div>
  <div class="block checkbox-group">
    <tiny-checkbox-group v-model="checked">
      <tiny-checkbox-button label="上海"></tiny-checkbox-button>
      <tiny-checkbox-button label="北京"></tiny-checkbox-button>
    </tiny-checkbox-group>
  </div>
  <div class="block numeric">
    <tiny-numeric v-model="numericValue"></tiny-numeric>
  </div>
  <div class="block checkbox">
    <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll" :disabled="isDisabled"> 全选 </tiny-checkbox>
    <div class="mb-16"></div>
    <tiny-checkbox-group v-model="checkboxGroup" :disabled="isDisabled">
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">
        {{ city }}
      </tiny-checkbox>
    </tiny-checkbox-group>
  </div>
  <div class="block radio-group">
    <tiny-radio-group v-model="radioValue" :options="radioOptions"></tiny-radio-group>
    <div class="mt-16">
      <tiny-radio-group v-model="radioValue" type="button" :options="burronOptions"></tiny-radio-group>
    </div>
  </div>
  <div class="block switch">
    <div class="mb-16">
      <tiny-switch v-model="switchValue1" class="mr-16"></tiny-switch>
      <tiny-switch v-model="switchValue2"></tiny-switch>
    </div>
    <div>
      <tiny-switch v-model="switchValue1" disabled class="mr-16"></tiny-switch>
      <tiny-switch v-model="switchValue2" disabled></tiny-switch>
    </div>
  </div>
  <div class="block w-300 form">
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" :validate-on-rule-change="isValidate">
      <tiny-form-item label="用户名" prop="username">
        <tiny-input v-model="createData.username"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密码" prop="password">
        <tiny-input v-model="createData.password" type="password" show-password></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit()"> 登录 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
  <div class="block w-300 select">
    <tiny-select v-model="selectValue2" multiple>
      <tiny-option
        v-for="item in selectOptions2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :required="item.required"
      >
      </tiny-option>
    </tiny-select>
  </div>
  <div class="block w-300 date-picker">
    <tiny-date-picker v-model="dateValue" placeholder="请选择日期"></tiny-date-picker>
  </div>
  <div class="block w-500 alert">
    <tiny-alert description="type 为默认值 info"></tiny-alert>
    <tiny-alert type="error" description="type 为 error"></tiny-alert>
    <tiny-alert type="success" description="type 为 success"></tiny-alert>
    <tiny-alert type="warning">
      <template #description> type 为 warning </template>
    </tiny-alert>
    <tiny-alert type="simple" description="type 为 simple"></tiny-alert>
  </div>
  <div class="block dialog-box">
    <tiny-button @click="boxVisibility = true" title="弹出 Dialog">弹出 Dialog</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
      <span>dialog-box 内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"> 确定 </tiny-button>
        <tiny-button @click="boxVisibility = false"> 取消 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
  <div class="block rate">
    <tiny-rate v-model="rate1" show-text></tiny-rate>
  </div>
  <div class="block anchor">
    <tiny-anchor :links="links" type="dot"></tiny-anchor>
  </div>
  <div class="block tree">
    <tiny-tree
      :data="treeData"
      :size="size"
      :indent="indent"
      :show-line="showLine === 'show'"
      default-expand-all
      @node-click="nodeClick"
    ></tiny-tree>
  </div>
  <div class="block timeline w-800">
    <tiny-time-line :data="timelineData" :active="timelineActive"></tiny-time-line>
  </div>
  <div class="block grid w-1000">
    <tiny-grid :data="tableData" border :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
      <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
      <tiny-grid-column field="city" title="城市"></tiny-grid-column>
      <tiny-grid-column
        field="boole"
        title="布尔值"
        align="center"
        format-text="boole"
      ></tiny-grid-column>
    </tiny-grid>
  </div>
  <div class="block cascader">
    <tiny-cascader v-model="cascaderValue" :options="cascaderOptions" :props="{ emitPath: false }"></tiny-cascader>
  </div>
  <div class="block slider w-500">
    <tiny-slider v-model="sliderValue"></tiny-slider>
  </div>
  <div class="block mb-1000">
    <tiny-pager :total="50"></tiny-pager>
  </div>
</template>

<style scoped>
.block {
  margin: 32px;
}
.mb-16 {
  margin-bottom: 16px;
}
.mt-16 {
  margin-top: 16px;
}
.mr-16 {
  margin-right: 16px;
}
.w-300 {
  width: 300px;
}
.w-500 {
  width: 500px;
}
.w-800 {
  width: 800px;
}
.w-1000 {
  width: 1000px;
}
.mb-1000 {
  margin-bottom: 1000px;
}
</style>
