import * as React from 'react';
import UserForm, { UserItem } from '@/components/UserForm';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { SimpleDialogProps } from '@/app/userList/page';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, setSelectedValue, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (item: UserItem) => {
    if (!!item.userName && !!item.age) {
      setSelectedValue(item);
      onClose();
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add User Item</DialogTitle>
      <UserForm
        submit={handleSubmit}
      />
      {/* <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List> */}
    </Dialog>
  );
}