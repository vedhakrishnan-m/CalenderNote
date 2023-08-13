import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import AddList from './list'

export function Main({isAdmin,setIsAdmin}) {
  let navigate = useNavigate();
  
  const [count, setCount] = useState(["java", "js", "python"]);
  const [info, setInfo] = useState(null);
  const [isUpdate, setIsupdate] = useState(true);
  const [storeindex, setStoreindex] = useState(0);
  function addList() {

    setCount([...count, info]);

  }

  function upList(s) {

    var copyarr = [...count];
    copyarr.splice(s, 1, info);
    setCount(copyarr);
    setIsupdate(true);


  }




  return (
    <div className="App" >
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

          <Paper
            component="form"
            sx={{ m: '2px auto', p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Add or Update data"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              disabled={isAdmin} />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton onClick={() => isUpdate ? addList() : upList(storeindex)} disabled={isAdmin} color="primary" sx={{ p: '10px' }} aria-label="directions">
              {isUpdate ? <FileDownloadDoneIcon /> : <SyncAltIcon />}
            </IconButton>
          </Paper>


          <AddList isAdmin={isAdmin}  count={count} setCount={setCount} setIsupdate={setIsupdate} setInfo={setInfo} setStoreindex={setStoreindex} />
          <Button variant="contained" onClick={()=>navigate("/", { replace: true })} color="success" sx={{height:50,width:100}}>Back To Home</Button>

        </Box>
      </Container>
    </div>
  );
}
