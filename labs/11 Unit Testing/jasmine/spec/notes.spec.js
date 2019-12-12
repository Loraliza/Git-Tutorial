describe('notes module', function () {
    beforeEach(function () {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });

    describe('adding a note', function () {
        it('should be able to add a new note', function () {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6);
        });
        it('should ignore blank notes', function () {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should ignore notes containing only whitespace', function () {
            expect(notes.add('   ')).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should require a string parameter', function () {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });

    describe('deleting a note', function () {
        it('should be able to delete the first index',function () {
            expect(notes.remove(1)).toBe(true);
            expect(notes.count()).toBe(4);
        });
        it('should return false if index is out of range', function () {
            expect(notes.remove(9)).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should return false if the index is a parameter',function () {
            expect(notes.remove('hello')).toBe(false);
            expect(notes.remove('how are you')).toBe(false);
        });
    });

    describe('finding a note', function () {
       it('should return true to search for note',function () {
           expect(notes.find('note')).toBe(true);
       });
       it('should return true to search for Note',function () {
           expect(notes.find('Note')).toBe(true);
       });
       it('should return false to search for th',function () {
           expect(notes.find('th')).toBe(false);
       });
       it('should return false to search for four',function () {
           expect(notes.find('four')).toBe(false);
       });
       it('should return false to search for six',function () {
           expect(notes.find('six')).toBe(false);
       });
       it('should return false if search is a blank string',function () {
           expect(notes.find('')).toBe(false);
       });
       it('should return false if search doesnt have a parameter',function () {
           expect(notes.find()).toBe(false);
       });
    });

});
