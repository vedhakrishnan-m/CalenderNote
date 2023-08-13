import { Stack, Divider, Chip } from "@mui/material";

import { setstoreindex } from "./demo/personSlice";

import { useSelector, useDispatch } from "react-redux";

export default function InputIcons() {
  const dispatch = useDispatch();
  const storeindex = useSelector((state) => state.person.storeindex);
  const dragStart = (e, position) => {
    dispatch(setstoreindex(position));
  };
  const list = useSelector((state) => state.person.list);

  return (
    <Stack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={1}
    >
      {list.map((a, index) => (
        <Chip
          onDragStart={(e) => dragStart(e, index)}
          key={index}
          draggable={true}
          label={a}
          color="success"
        />
      ))}
    </Stack>
  );
}
