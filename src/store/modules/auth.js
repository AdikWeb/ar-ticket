import { removeToken } from '@/utils/token';
import router from '../../router';
export default {
    actions: {

        logout() {
            removeToken();
            localStorage.clear()
            router.push('/login');
        },
    }
}