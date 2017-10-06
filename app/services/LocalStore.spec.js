describe("Local Store", function () {
    var LocalStore;
  
    beforeEach(module("tadalist"));
  
    beforeEach(inject(function (_LocalStore_) {
        LocalStore = _LocalStore_;
    }));
  
    it("empty by default", function () {
        expect(LocalStore.get().length).toBe(0);
    }); 
    
    it("Update", function () {
        var task = {id:1, title: 'Hello World', isCompleted: false};
        LocalStore.update(task);
        expect(LocalStore.get()).toEqual(task);
    });
    
  });