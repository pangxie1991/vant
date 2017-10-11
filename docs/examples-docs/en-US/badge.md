<style>
.demo-badge {
  .van-badge-group {
    width: auto;
    margin: 0 15px;
    padding: 20px 0;
    background-color: #fff;

    &::after {
      display: none;
    }
  }

  .van-badge {
    width: 85px;
    margin: 0 auto;
  }
}
</style>

<script>
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
</script>

## Badge

### Install
``` javascript
import { Badge } from 'vant';

Vue.component(Badge.name, Badge);
```

## Usage

:::demo Basic
```html
<van-badge-group :active-key="activeKey">
  <van-badge title="pizza" @click="onClick" info="8"></van-badge>
  <van-badge title="beef" @click="onClick" info="99"></van-badge>
  <van-badge title="drink" @click="onClick"></van-badge>
  <van-badge title="snack" @click="onClick" info="199"></van-badge>
</van-badge-group>
```

translating...
