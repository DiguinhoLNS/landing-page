import ENV from '@env/index'
import info from '@utils/info'
import storage from '@utils/storage'
import { UserData } from '../interfaces/UserData'
import { setAuthLoading, setAuthLogin } from '../reducers/authReducer'

export default function getUser(dispatch: Function){
    try {
        const localUser = storage.getObject<UserData>('user')
        const localFlagSystem = storage.getItem<string>('flagSystem')
        
        if(!!localUser && !!localUser.login){
            if((!!localFlagSystem && localFlagSystem === ENV.FLAG_SYSTEM) || process.env.NODE_ENV === 'production'){
                dispatch(setAuthLogin(localUser))
            }else throw new Error('Flag Systen not found')
        }else throw new Error('User not found')
    } catch (error) {
        info.error('getUser',error)
    } finally {
        dispatch(setAuthLoading(false))
    }
}