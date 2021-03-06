var pd = require('../controllers/customerCtrl');
var note = require('../controllers/notesCtrl');
var task = require('../controllers/defectCtlr');
var tabletasks = require('../controllers/tableController');
var dispatchcon = require('../controllers/dispatchcontroller');

app.get('/getCustomers', pd.getCustomers);
app.post('/postcustomers', pd.postCustomers);
app.delete('/deleteCustomers/:id', pd.deleteCustomers);
app.post('/api/v2/projectNote/createNote', note.createNotes);
app.get('/api/v2/projectNote/listNotes/:noteid', note.getNotes);
app.put('/api/v2/projectNote/updateNote', note.updateNotes);
app.post('/api/v2/task/create/uploadfile', task.createTask);
app.post('/api/tableController/createFile', tabletasks.postdocumens);
app.get('/api/tableController/sendDocuments', tabletasks.getdocumens);
app.post('/api/tableController/deleteDocuments', tabletasks.removedocuments);
app.post('/api/dispatchcontroller/orderProducts', dispatchcon.orderProducts);
app.get('/api/dispatchcontroller/productsOrdered', dispatchcon.productsOrdered);
app.post('/api/dispatchcontroller/removeproductsOrdered', dispatchcon.removeproductsOrdered);
app.post('/api/dispatchcontroller/getjoindocuments', dispatchcon.getjoindocuments);
rethDbs.record = './recordSchema.js';
var getcont =require('../modules/record/recordController');
app.post('/api/setrecords', getcont.postrecord);
app.get('/api/getrecords', getcont.getrecord);