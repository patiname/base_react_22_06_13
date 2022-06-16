import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { Menus } from "./components/3_props/Menus";
import { Subject } from "./components/3_props/Subject";
import { TodayMenu } from "./components/3_props/TodayMenu";
import { Content } from "./components/4_map/Content";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { Kakao } from "./components/4_map/Kakao";
import { kakaoDb, subJectDb } from "./db";
// import FnComponent from "./components/2_component/FnComponent";
import { todayMenu } from "./db";
import { GlobalStyeld } from "./styles/GlobalStyeld";

const App = () => {
  return (
    <div>
      <GlobalStyeld />
      {/* <TagRule /> */}
      {/* 1일차 */}

      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}
      {/* <ClassComponent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}
      {/* <Subject sub={subJectDb} /> */}

      {/* <TodayMenu menu={todayMenu} /> */}
      {/* 3일차 */}

      {/* <FoodMenu menus={todayMenu} /> */}
      {/* <Kakao kakaoData={kakaoDb} /> */}
      <Content />
      {/* 4일차 */}
    </div>
  );
};

export default App;
