import { NativeRouter, Routes, Route } from "react-router-native";
import {HomeScreen} from "../screens/home/index";
import LoginScreen from "../screens/Login/Login";

function Home() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route exact path="/home" element={<HomeScreen />} />
      </Routes>
    </NativeRouter>
  );
}

export default Home;
