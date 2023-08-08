import Layout from '../../layout/Layout.tsx'
import { useForm } from 'react-hook-form'
import styles from './Auth.module.scss'
import Button from '../../ui/button/Button.tsx'
import Field from '../../ui/field/Field.tsx'

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})
	console.log(errors)
	const onSubmit = data => {}
	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png'></Layout>
			<div className={styles.wrapperInnerPage}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						name='email'
						error={errors?.email?.message}
						type='text'
						register={register}
						options={{
							required: 'Email is required'
						}}
						placeholder='Enter email'
					/>
					<Field
						name='password'
						error={errors?.password?.message}
						type='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button>Sign in</Button>
						<Button>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
