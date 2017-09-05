import Actionsheet from './actionsheet';
import Badge from './badge';
import BadgeGroup from './badge-group';
import Button from './button';
import Card from './card';
import Cell from './cell';
import CellGroup from './cell-group';
import CellSwipe from './cell-swipe';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Col from './col';
import DatetimePicker from './datetime-picker';
import DeepSelect from './deep-select';
import Dialog from './dialog';
import ExpressWay from './express-way';
import Field from './field';
import GoodsAction from './goods-action';
import GoodsActionBigBtn from './goods-action-big-btn';
import GoodsActionMiniBtn from './goods-action-mini-btn';
import Icon from './icon';
import ImagePreview from './image-preview';
import InvalidGoods from './invalid-goods';
import Lazyload from './lazyload';
import Loading from './loading';
import NoticeBar from './notice-bar';
import OrderCoupon from './order-coupon';
import OrderCouponList from './order-coupon-list';
import OrderGoods from './order-goods';
import Panel from './panel';
import PayOrder from './pay-order';
import Picker from './picker';
import Popup from './popup';
import Progress from './progress';
import Quantity from './quantity';
import Radio from './radio';
import RadioGroup from './radio-group';
import Row from './row';
import Search from './search';
import Step from './step';
import Steps from './steps';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import Switch from './switch';
import SwitchCell from './switch-cell';
import Tab from './tab';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';
import Uploader from './uploader';
import Waterfall from './waterfall';

const version = '0.8.9';
const components = [
  Actionsheet,
  Badge,
  BadgeGroup,
  Button,
  Card,
  Cell,
  CellGroup,
  CellSwipe,
  Checkbox,
  CheckboxGroup,
  Col,
  DatetimePicker,
  DeepSelect,
  ExpressWay,
  Field,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Icon,
  InvalidGoods,
  Loading,
  NoticeBar,
  OrderCoupon,
  OrderCouponList,
  OrderGoods,
  Panel,
  PayOrder,
  Picker,
  Popup,
  Progress,
  Quantity,
  Radio,
  RadioGroup,
  Row,
  Search,
  Step,
  Steps,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabs,
  Tag,
  Uploader
];

const install = function(Vue) {
  if (install.installed) return;

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Actionsheet,
  Badge,
  BadgeGroup,
  Button,
  Card,
  Cell,
  CellGroup,
  CellSwipe,
  Checkbox,
  CheckboxGroup,
  Col,
  DatetimePicker,
  DeepSelect,
  Dialog,
  ExpressWay,
  Field,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Icon,
  ImagePreview,
  InvalidGoods,
  Lazyload,
  Loading,
  NoticeBar,
  OrderCoupon,
  OrderCouponList,
  OrderGoods,
  Panel,
  PayOrder,
  Picker,
  Popup,
  Progress,
  Quantity,
  Radio,
  RadioGroup,
  Row,
  Search,
  Step,
  Steps,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabs,
  Tag,
  Toast,
  Uploader,
  Waterfall
};
export default {
  install,
  version
};
