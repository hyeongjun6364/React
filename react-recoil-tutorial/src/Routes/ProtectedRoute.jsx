// import { Outlet } from "react-router";
// import { Navigate, useLocation } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { isLoginSelector } from "../Recoil/TokenAtom";

import { Navigate, Outlet, useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../recoil/TokenAtom";
// 
const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const currentLocation = useLocation();
  
  return isLogin ? (
    <Outlet />
  ) : (
    //<Navigate('/login')/>으로 하면 안됨 to를 써서 경로 입력하기
    <Navigate
      to={"/login"}
      replace
      state={{ redirecredFrom: currentLocation }}
    />
  );
};

export default ProtectedRoute;