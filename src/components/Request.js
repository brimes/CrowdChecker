
class Request {

	constructor () {
		this.url = ''
		this.params = {}
		this.method = 'GET'
		this.headers = {
			'JsonStub-User-Key': 'e524f2e9-da93-477f-8e45-325be25079d1',
			'JsonStub-Project-Key': 'ca524d3b-d5e3-49b6-8164-917cece85265',
			'Content-Type': 'application/json'			
		}
	}

	static get ACCEPTED() {
	    return '202';
	}

	static get OK() {
	    return '200';
	}

	setUrl (url) {
		this.url = url
	}

	setMethod (method) {
		this.method = method
	}

	setParams (params) {
		this.params = params
	}

	addHeader (name, value) {
		this.headers[name] = value
	}

	async response() {
		let body = null;
		if (this.method != 'GET') {
			body = JSON.stringify(this.params)
		}
		let response = await fetch(this.url, {
		  method: this.method,
		  headers: this.headers,
		  body: body
		});
		return response;
	}

}

module.exports = Request;