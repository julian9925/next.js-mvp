'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import SimpleDialog from '@/components/SimpleModal';
import UserList from '@/components/UserList';
import { UserItem } from '@/components/UserForm';


const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  setSelectedValue: (item: UserItem) => void;
  onClose: () => void;
}

export default function UserListPage() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState({ userName: '', age: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <UserList />
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue.userName} {selectedValue.age}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        setSelectedValue={setSelectedValue}
        open={open}
        onClose={handleClose}
      />
    </Container>
  );
}