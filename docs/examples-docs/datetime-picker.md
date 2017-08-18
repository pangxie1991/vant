<script>
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      currentDate1: null,
      currentDate2: null,
      currentDate3: null
    };
  },

  methods: {
    handlePickerChange(picker, values) {
      console.log(values);
    },
    handlePickerCancel() {
      console.log('picker cancel');
    },
    handlePickerConfirm() {
      console.log('picker confirm');
    }
  }
};
</script>

## DatetimePicker 时间选择

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-datetime-picker
  v-model="currentDate1"
  type="datetime"
  format="yyyy.mm.dd hh时 mm分"
  :min-hour="minHour"
  :max-hour="maxHour"
  :min-date="minDate"
  @change="handlePickerChange">  
</van-datetime-picker>

<script>
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      currentDate: null
    };
  },

  methods: {
    handlePickerChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    }
  }
};
</script>
```
:::

#### 选择日期

:::demo 选择日期
```html
<van-datetime-picker
  v-model="currentDate2"
  type="date"
  format="yyyy.mm.dd hh时 mm分"
  :min-hour="minHour"
  :max-hour="maxHour"
  :min-date="minDate"
  @change="handlePickerChange">  
</van-datetime-picker>
```
:::

#### 选择时间

:::demo 选择时间
```html
<van-datetime-picker
  v-model="currentDate3"
  type="time"
  format="yyyy.mm.dd hh时 mm分"
  :min-hour="minHour"
  :max-hour="maxHour"
  :min-date="minDate"
  @change="handlePickerChange">
</van-datetime-picker>
```
:::


### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| visibileColumnCount | 每一列可见备选元素的个数 | Number  | 5 |   |
| itemHeight | 选中元素区高度 | Number  | 44 |   |
| columns | 对象数组，配置每一列显示的数据 | Array  |  |   |
| showToolbar | 是否在组件顶部显示一个toolbar | Boolean  | true |   |

### columns

`API`中的`columns`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`：

| key       | 说明      |
|-----------|-----------|
| values | 列中对应的备选值 |
| defaultIndex | 初始选中值的索引，默认为0 |
| className | 为对应列添加特殊的`class` |

### Event

| 事件名称       | 说明      | 回调参数 |
|-----------|-----------|-----------|
| change | 当值变化时触发的事件 | picker 实例 |
| confirm | 点击完成按钮时触发的事件 | 当前 value |
| cancel | 点击取消按钮时触发的事件 | - |

### change事件

在`change`事件中，可以获取到`picker`实例，对`picker`进行相应的更新等操作：

| 函数       | 说明      |
|-----------|-----------|
| getColumnValue(index) | 获取对应列中选中的值 |
| setColumnValue(index, value) | 设置对应列中选中的值 |
| getColumnValues(index) | 获取对应列中所有的备选值 |
| setColumnValues(index, values) | 设置对应列中所有的备选值 |
| getValues() | 获取所有列中被选中的值，返回一个数组 |
| setValues(values) | `values`为一个数组，设置所有列中被选中的值 |
