import { AsyncStorage } from 'react-native'

class UserStorageService {
    model = ''

    async persist() {
        let result = await AsyncStorage.setItem('@userData', JSON.stringify(this.model))
        return result
    }

    async load() {
        let modelString = await AsyncStorage.getItem('@userData') 
        console.log(modelString)
//        let model = JSON.parse(modelData)
//        for (var prop in model) {
//            this.model[prop] = model[prop]          
//        }
//        return true
    }

}

module.exports = UserStorageService;