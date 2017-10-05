
const STORE_ID = 'task:store';

class LocalStore {  
    isSupported() {
        try {
            return !!localStorage.getItem;
        } catch (exception) {
            return false;
        }
    }

    update(tasks) {
        localStorage.setItem(STORE_ID, JSON.stringify(tasks));
    }

    get() {
        return JSON.parse(localStorage.getItem(STORE_ID)) || [];
    }
    
}

export default LocalStore;  