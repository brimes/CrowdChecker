import UserApiService from "../services/UserApiService"
import UserStorageService from "../services/UserStorageService"

class UserModel {
	email = ''
	name = ''
	password = ''
	bank = ''
	agency = ''
	account = ''

	async loadUserData() {
		let user = new UserStorageService;
		await user.persist()
		return true
	}

	isNewUser() {
		return true;
	}

	async validateByEmail() {
		let userApi   = new UserApiService;
		userApi.email = this.email;
		return await userApi.isEmailValid();
	}

	authenticate(onDone) {
		let userApi = new UserApiService;
		userApi.email = this.email;
		userApi.passrowd = this.password;
		userApi.authenticate((isAuthenticated) => {
			onDone(isAuthenticated);
		});
		return;
	}

	async save () {
		let user = new UserStorageService;
		user.model = this
		await user.persist()
		return true
	}

}

module.exports = UserModel;