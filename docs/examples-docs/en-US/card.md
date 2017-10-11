<script>
export default {
  data() {
    return {
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    }
  }
}
</script>

## Card

### Install
``` javascript
import { Card } from 'vant';

Vue.component(Card.name, Card);
```

## Usage

:::demo Basic
```html
<van-card
  title="goods title"
  desc="goods description"
  num="2"
  price="2.00"
  :thumb="imageURL"
/>
```

translating...
