import { useForm, SubmitHandler } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '@/style/UserList.css';
import Button from "@mui/material/Button";

export type UserItem = {
  userName: string,
  age: string,
};

export interface UserFormProps {
  submit: (data: UserItem) => void;
}

export default function UserForm(props: UserFormProps) {
	const { submit } = props;
  const { register, handleSubmit, formState: { errors } } = useForm<UserItem>();
  const onSubmit: SubmitHandler<UserItem> = data => submit(data);

	const ageErrorText = errors.age ? 'Age must be between 18 and 100' : '';
	const userNameErrorText = errors.userName ? 'User Name is required' : '';

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25rem' },
			}}
			autoComplete="off"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className='user-list'>
				{/* register your input into the hook by invoking the "register" function */}
				<TextField
					error={ errors.userName ? true : false }
					label="User Name" variant="outlined"
					style={{ margin: '1rem 0', width: '100%' }}
					helperText={ userNameErrorText }
					{...register("userName", { required: true })}
				/>
				{/* {errors.userName && <span>This field is required</span>} */}
				
				<TextField
					type="number"
					error={ errors.age ? true : false }
					label="User Age" variant="outlined"
					style={{ margin: '1rem 0', width: '100%' }}
					helperText={ ageErrorText }
					{...register("age", { required: true, min: 18, max: 100 })}
				/>
				{/* include validation with required or other standard HTML validation rules */}
				{/* errors will return when field validation fails  */}
				
				<Button variant="contained" type="submit">Submit</Button>
			</div>

		</Box>
  );
}