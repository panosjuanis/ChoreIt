const taskCtrl = require('../controllers/task.controller');
const Task = require('../models/task');

describe('Task Controller', () => {
    beforeEach(() => {
        Task.create = jest.fn();
        Task.find = jest.fn();
        Task.findById = jest.fn();
        Task.findByIdAndUpdate = jest.fn();
        Task.findByIdAndRemove = jest.fn();
    });

    describe('getTasks', () => {
        it('should retrieve all tasks from the database', async () => {
            const tasks = [{ task_name: 'Test Task' }];
            Task.find.mockResolvedValue(tasks);
            const req = {};
            const res = { json: jest.fn() };
            await taskCtrl.getTasks(req, res);
            expect(Task.find).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(tasks);
        });
    });

    
    describe('getTask', () => {
        it('should retrieve a task by id', async () => {
            const task = { task_name: 'Test Task' };
            Task.findById.mockResolvedValue(task);
            const req = { params: { id: '123' } };
            const res = { json: jest.fn() };
            await taskCtrl.getTask(req, res);
            expect(Task.findById).toHaveBeenCalledWith('123');
            expect(res.json).toHaveBeenCalledWith(task);
        });
    });

    describe('editTask', () => {
        it('should update a task by id', async () => {
            Task.findByIdAndUpdate.mockResolvedValue();
            const req = {
                params: { id: '123' },
                body: { task_name: 'Updated Task' }
            };
            const res = { json: jest.fn() };
            await taskCtrl.editTask(req, res);
            expect(Task.findByIdAndUpdate).toHaveBeenCalledWith('123', { $set: { task_name: 'Updated Task' } }, { new: true });
            expect(res.json).toHaveBeenCalledWith({ status: 'Task Updated' });
        });
    });

    describe('addUserToTask', () => {
        it('should add a user to a task', async () => {
            const task = { participant_ids: ['123'] };
            Task.findById.mockResolvedValue(task);
            Task.findByIdAndUpdate.mockResolvedValue();
            const req = {
                params: { id: '123' },
                body: { newUser: '456' }
            };
            const res = { json: jest.fn() };
            await taskCtrl.addUserToTask(req, res);
            expect(Task.findById).toHaveBeenCalledWith('123');
            expect(Task.findByIdAndUpdate).toHaveBeenCalledWith('123', { $set: { participant_ids: ['123', '456'] } }, { new: true });
            expect(res.json).toHaveBeenCalledWith({ status: 'Task Updated' });
        });
    });

});
