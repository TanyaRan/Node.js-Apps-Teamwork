const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('../controllers/regions.controller').init(data);

    router
        .get('/regions/all', (req, res) => {
            return controller.getAll(req, res);
        })
        // .get('/gallery', (req, res) => {
        //     return controller.getRegionsGallery(req, res);
        // })
        // .get('/:id/gallery', (req, res) => {
        //     return controller.getOneRegionGallery(req, res);
        // })
        // ================= TO: DELETE this
        .get('/admin/panel', (req, res) => {
            return controller.getAdminPanel(req, res);
        })
        .get('/regions/orderroom', (req, res) => {
            return controller.getOrderRoomForm(req, res);
        })
        .get('/regions/orderservice', (req, res) => {
            return controller.getOrderServiceForm(req, res);
        }) // =============== TO: DELETE
        .get('/regions', (req, res) => {
            return controller.getCreateForm(req, res);
        })
        .post('/regions', (req, res) => {
            return controller.createRegion(req, res);
        });
    // .get('/regions/:id', (req, res) => {
    //     return controller.getRegionDetails(req, res);
    // });
    // .put('/regions/:id', (req, res)=> {
    //     return controller.updateRegion(req, res);
    // });
    // .delete('/regions/:id', (req, res)=> {
    //     return controller.deleteRegion(req, res);
    // });

    app.use(router);
};

module.exports = { attachTo };