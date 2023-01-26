const homeCtrl = require('../controllers/home.controller');
const Home = require('../models/home');

describe('Home Controller', () => {
    beforeEach(() => {
        Home.create = jest.fn();
        Home.find = jest.fn();
        Home.findById = jest.fn();
        Home.findByIdAndUpdate = jest.fn();
        Home.findByIdAndRemove = jest.fn();
    });

    describe('getHomes', () => {
        it('should retrieve all homes from the database', async () => {
            const homes = [{ name: 'Test Home' }];
            Home.find.mockResolvedValue(homes);
            const req = {};
            const res = { json: jest.fn() };
            await homeCtrl.getHomes(req, res);
            expect(Home.find).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(homes);
        });
    });

    
    describe('getHome', () => {
        it('should retrieve a home by id', async () => {
            const home = { home_name: 'Test Home' };
            Home.findById.mockResolvedValue(home);
            const req = { params: { id: '123' } };
            const res = { json: jest.fn() };
            await homeCtrl.getHome(req, res);
            expect(Home.findById).toHaveBeenCalledWith('123');
            expect(res.json).toHaveBeenCalledWith(home);
        });
    });

    describe('editHome', () => {
        it('should update a home by id', async () => {
            Home.findByIdAndUpdate.mockResolvedValue();
            const req = {
                params: { id: '123' },
                body: { home_name: 'Updated Home' }
            };
            const res = { json: jest.fn() };
            await homeCtrl.editHome(req, res);
            expect(Home.findByIdAndUpdate).toHaveBeenCalledWith('123', { $set: { home_name: 'Updated Home' } }, { new: true });
            expect(res.json).toHaveBeenCalledWith({ status: 'Home Updated' });
        });
    });
});
