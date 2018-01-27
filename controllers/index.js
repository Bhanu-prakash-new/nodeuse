var pd = require('../controllers/customerCtrl')
app.get('/getCustomers', pd.getCustomers);
app.post('/postcustomers', pd.postCustomers);
app.delete('/deleteCustomers/:id', pd.deleteCustomers);