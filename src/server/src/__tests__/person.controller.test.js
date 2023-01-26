const personCtrl = require('../controllers/person.controller');
const Person = require('../models/person');

describe('Person Controller', () => {
    beforeEach(() => {
        Person.create = jest.fn();
        Person.find = jest.fn();
        Person.findById = jest.fn();
        Person.findByIdAndUpdate = jest.fn();
        Person.findByIdAndRemove = jest.fn();
    });

    describe('getPersons', () => {
        it('should retrieve all persons from the database', async () => {
            const persons = [{ tag: 'Test Person' }];
            Person.find.mockResolvedValue(persons);
            const req = {};
            const res = { json: jest.fn() };
            await personCtrl.getPersons(req, res);
            expect(Person.find).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(persons);
        });
    });

    
    describe('getPerson', () => {
        it('should retrieve a person by id', async () => {
            const person = { person_name: 'Test Person' };
            Person.findById.mockResolvedValue(person);
            const req = { params: { id: '123' } };
            const res = { json: jest.fn() };
            await personCtrl.getPerson(req, res);
            expect(Person.findById).toHaveBeenCalledWith('123');
            expect(res.json).toHaveBeenCalledWith(person);
        });
    });

    describe('editPerson', () => {
        it('should update a person by id', async () => {
            Person.findByIdAndUpdate.mockResolvedValue();
            const req = {
                params: { id: '123' },
                body: { person_name: 'Updated Person' }
            };
            const res = { json: jest.fn() };
            await personCtrl.editPerson(req, res);
            expect(Person.findByIdAndUpdate).toHaveBeenCalledWith('123', { $set: { person_name: 'Updated Person' } }, { new: true });
            expect(res.json).toHaveBeenCalledWith({ status: 'Person Updated' });
        });
    });
});
