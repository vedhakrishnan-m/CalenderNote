import "../App.css";
import { useState } from "react";
import Protected from "./auth";
import authContext from "./context";
import { Main } from "./Main";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { CalenderNote } from "../calender/CalenderNote";
import { CalenderInput } from "../calender/CalenderInput";
import MainDrag from "../Drag Inputs/mainContainer";
import { Provider } from "react-redux";
import dragstore from "../Drag Inputs/store/store";
import FaceBook from "../socialMediaTest/Facebook";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const user = {
    name: "vedhaUser",
    pwd: "12345678",
  };
  const admin = {
    name: "vedhaAdmin",
    pwd: "123456",
  };
  const [mon, setMon] = useState(null);
  const [year, setYear] = useState(null);
  const monArr = "JAN FEB MAR APRIL MAY JUNE JULY AUG SEP OCT NOV DEC".split(
    " "
  );

  const [central, setCentral] = useState({});
  console.log(central);
  const [datevalue, setDatevalue] = useState(Date());
  const [fYear, setFYear] = useState(Date());
  const [check, setCheck] = useState({
    start: null,
    end: null,
  });
  // const Store = configureStore({
  //   reducer: {
  //     data: data.reducer,
  //   },
  // });
  return (
    <div className="apps">
      <authContext.Provider
        value={{
          check: check,
          setCheck: setCheck,
          fYear: fYear,
          setFYear: setFYear,
          datevalue: datevalue,
          setDatevalue: setDatevalue,
          central: central,
          setCentral: setCentral,
          user: user,
          admin: admin,
          mon: mon,
          setMon: setMon,
          year: year,
          setYear: setYear,
          monArr: monArr,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setIsLoggedIn={setIsLoggedIn}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route
            path="main"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Main isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
              </Protected>
            }
          />
          <Route path="fb" element={<FaceBook />} />
          <Route path="CalenderNote" element={<CalenderInput />} />
          <Route path="CalenderNote/:month/:year" element={<CalenderNote />} />

          <Route
            path="Drag"
            element={
              <Provider store={dragstore}>
                <MainDrag />
              </Provider>
            }
          />
        </Routes>
      </authContext.Provider>
    </div>
  );
}
export default App;
