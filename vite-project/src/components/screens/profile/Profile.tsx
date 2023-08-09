import Layout from '../../layout/Layout.tsx'
import styles from './Profile.module.scss'
const Profile = () => {
	const fun = name => {
		console.log(name)
	}
	fun('adsfsd')
	return <Layout>Profile</Layout>
}

export default Profile
