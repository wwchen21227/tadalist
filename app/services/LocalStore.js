function LocalStore() {  
    const STORE_ID = 'task:store';
    
    var store = {
        isSupported: function() {
            try {
                return !!localStorage.getItem;
            } catch (exception) {
                return false;
            }
        },
        update: function(tasks) {
        localStorage.setItem(STORE_ID, JSON.stringify(tasks));
        },
        get: function() {
        return JSON.parse(localStorage.getItem(STORE_ID)) || [];
        }
    };
    
    return store;
}

export default LocalStore;  