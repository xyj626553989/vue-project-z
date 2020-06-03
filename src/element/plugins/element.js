import Vue from "vue";
import {
  Button,
  Container,
  Footer,
  Header,
  Main,
  Col,
  Row,
  Menu,
  MenuItem,
  Carousel,
  CarouselItem,
  Input,
  Form,
  FormItem,
  Message,
  Steps,
  Step,
  Submenu,
  Aside
} from "element-ui";

const components = {
  Button,
  Container,
  Footer,
  Header,
  Main,
  Col,
  Row,
  Menu,
  MenuItem,
  Carousel,
  CarouselItem,
  Input,
  Form,
  FormItem,
  Steps,
  Step,
  Submenu,
  Aside
};
//Object.entries()把一个对象的键值以数组的形式遍历出来
//按需加载
Object.entries(components).forEach(([, component]) => {
  Vue.use(component);
});

//message挂载到vue实例上
Vue.prototype.$message = Message;
