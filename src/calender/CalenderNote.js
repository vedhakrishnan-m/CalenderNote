import CalenderBody from "./calenderBody";
import { CalenderInput } from "./CalenderInput";
import { useParams } from "react-router-dom";
import { NoteEvents } from "./NoteEvents";
import { useState, useContext, useEffect } from "react";
import authContext from "../component/context";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { previousDay, setDate } from "date-fns";

export function CalenderNote() {
  let { month, year } = useParams();
  const { central, fYear, monArr } = useContext(authContext);
  const { setCheck, check, datevalue, setYear, setMon } =
    useContext(authContext);

  const [toDisplay, setToDisplay] = useState(false);
  var a = month;
  var length = 0;
  const [idforward, setIdforward] = useState("");
  const [newdate, setNewdate] = useState(new Date(datevalue));

  const [updateEvt, setUpdateEvt] = useState({
    event: "",
    location: "",
    src: "",
  });

  if (a === "APRIL" || a === "JUNE" || a === "SEP" || a === "NOV") {
    length = 30;
  } else if (a === "FEB") {
    length = year % 4 === 0 ? 29 : 28;
  } else {
    length = 31;
  }

  const empobj = { ...central };

  const createArr =
    empobj[`${month}${year}`] === undefined
      ? new Array(length).fill(true)
      : empobj[`${month}${year}`];

  var day = new Date(`${year}-${monArr.indexOf(month) + 1}-1`).getDay();
  const updateCreateArr = new Array(day).fill("y");

  useEffect(() => {
    setMon(monArr[newdate.getMonth()]);
    setYear(newdate.getFullYear());
  }, [newdate]);
  useEffect(() => {
    setNewdate(new Date(datevalue));
  }, [datevalue]);

  function pageNav(a) {
    if (a == "increase") {
      {
        var updateNxtDate = new Date(newdate);
        updateNxtDate.setMonth(updateNxtDate.getMonth() + 1);
        setNewdate(updateNxtDate);
      }
    } else {
      {
        var updatepreDate = new Date(newdate);
        updatepreDate.setMonth(updatepreDate.getMonth() - 1);
        setNewdate(updatepreDate);
      }
    }
  }
  function Checkdates(a) {
    if (a == fYear) {
      var data = new Date(a);
      data.setDate(1);

      console.log("hello" + data);
      return new Date(newdate).getTime() < new Date(data).getTime()
        ? true
        : false;
    } else {
      return new Date(newdate).getTime() > new Date(a).getTime() ? true : false;
    }
  }
  useEffect(() => {
    setCheck({
      start: Checkdates(datevalue),
      end: Checkdates(fYear),
    });
  }, [datevalue, fYear]);

  return (
    <div>
      <CalenderInput />
      <p className="tittle">
        {Checkdates(datevalue) ? (
          <ArrowBackIosNewIcon onClick={() => pageNav("decrease")} />
        ) : (
          <span></span>
        )}

        {month}
        {year}
        {console.log(newdate, fYear)}
        {Checkdates(fYear) ? (
          <NavigateNextIcon onClick={() => pageNav("increase")} />
        ) : (
          <span></span>
        )}
      </p>
      <CalenderBody
        setUpdateEvt={setUpdateEvt}
        setIdforward={setIdforward}
        createArr={createArr}
        updateCreateArr={updateCreateArr}
        setToDisplay={setToDisplay}
        month={month}
      />
      {toDisplay && (
        <NoteEvents
          setUpdateEvt={setUpdateEvt}
          updateEvt={updateEvt}
          idforward={idforward}
          empobj={empobj}
          createArr={createArr}
          setToDisplay={setToDisplay}
          month={month}
          year={year}
        />
      )}
    </div>
  );
}
