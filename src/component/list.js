import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ClearIcon from '@mui/icons-material/Clear';

export default function AddList({count,setCount,setIsupdate,setInfo,setStoreindex,isAdmin}) {

    
     function deleteList(i) {
    var arrCopy=[...count]
    arrCopy.splice(i,1)
    setCount(arrCopy)
      }

      function updatelist(i){
        setInfo(count[i])
        setStoreindex(i)
        setIsupdate(false)
      }
    
 
    

    
  return (
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',m:'5px auto' }}>
      {count.map((value,i) => (
        <ListItem key={value}>
          <ListItemText primary={`${value}`} />
          
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton disabled={isAdmin}  onClick={()=>updatelist(i)} color="primary" sx={{ p: '10px' }} aria-label="directions">
        <UpgradeIcon />
      </IconButton>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton disabled={isAdmin}  onClick={()=>deleteList(i)}  color="primary" sx={{ p: '10px' }} aria-label="directions">
        <ClearIcon />
      </IconButton>

        </ListItem>
))}
    </List>
  );
}
