import Request from "../components/Request"

class UserApiService {
	email = ''
	password = ''

	async isEmailValid() {
		let request = new Request;
		request.setUrl('http://jsonstub.com/validate/email/' + this.email);
		response = await request.response();
		return response.status == Request.ACCEPTED;
	}

	authenticate(onDone) {
		let request = new Request;
		request.setUrl('http://jsonstub.com/authenticate');
		request.setMethod("POST");
		request.setParams({
			email: this.email,
			password: this.password
		});
		request.response((response) => {
			onDone(response.status == Request.ACCEPTED);
		});
	}

}

module.exports = UserApiService;