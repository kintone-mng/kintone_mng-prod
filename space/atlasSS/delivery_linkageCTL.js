(function() {
  'use strict';
  kintone.events.on(['app.record.create.submit.success','app.record.edit.submit.success'], function(event) {
    if(!event.record.working_status.value=='出荷完了'){
      return event;
    }
    if(event.record.syncStatus_batch.value=='error'){
      event.error='デバイス登録がエラーです。';
      return event;
    }
    if(!event.record.syncStatus_serial.value=='success'){
      console.log(event.record.syncStatus_serial.value);
    }


    return event;
  });

})();
