import { useContext } from "react";
import authContext from "../component/context";

const { newdate, fYear } = useContext(authContext);
export default function checkdates(a) {
  if (a == fYear) {
    return new Date(newdate).getTime() < new Date(a).getTime() &&
      new Date(newdate).getMonth() != new Date(a).getMonth()
      ? true
      : false;
  } else {
    return new Date(newdate).getTime() > new Date(a).getTime() &&
      new Date(newdate).getMonth() != new Date(a).getMonth()
      ? true
      : false;
  }
}
