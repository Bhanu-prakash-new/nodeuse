//dbs.notes.changes().run(function (err, cursor) {
//      var data = {
//        note_data: null,
//        type: ''
//    };
//    cursor.each(function (err, new_val) {
//        dbs.notes.get(new_val.id).run().then(function (resData) {
//            var old_val = new_val.getOldValue();
//            if (err)
//                throw err;
//            data.note_data = resData;
//            if (new_val != null && old_val != null) {
//                if (new_val.is_active == false && old_val.is_active == true) {
//                    data.type = 'note_in_trash'
//                } else if (new_val.is_active == true && old_val.is_active == false) {
//                    data.type = 'note_restore'
//                } else {
//                    data.type = 'note_updated';
//                }
//            } else {
//                if (old_val == null) {
//                    data.type = 'note_created'
//                    console.log(data,'was end')
//                }
//            }
//            io.emit('NoteModified', data);
//
//        })
//    });
//});
dbs.dispatch.changes().run(function (err, cursor) {
    var data = {
        dispatch_data: '',
        type: ''
    };
    cursor.each(function (err, new_val) {
        console.log(new_val,'new change in the dispatch')
        dbs.dispatch.get(new_val.id).run().then(function (resData) {
            var old_val = new_val.getOldValue();
            if (err)
                throw err;
            data.dispatch_data = resData;
            if (new_val != null && old_val != null) {
//                if (new_val.is_active == false && old_val.is_active == true) {
//                    data.type = 'note_in_trash'
//                } else if (new_val.is_active == true && old_val.is_active == false) {
//                    data.type = 'note_restore'
//                } else {
//                    data.type = 'note_updated';
//                }
            } else {
                if (old_val == null) {
                    data.type = 'productordered'
                }
            }
            io.emit('Dispatcher', data);

        })
    });
});