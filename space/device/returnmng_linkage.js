(function() {
  'use strict';

  kintone.events.on('app.record.edit.show',async function(event) {
    var linkage_return=setBtn('btn_linkage_return','シリアルテーブル作成');
    $('#'+linkage_return.id).on('click', function(){
      startLoad();
      var eRecord = kintone.app.record.get();
      let createDLResult = createDeviceList(eRecord)
      if(!createDLResult.result){
        endLoad();
        return event;
      } else {
        eRecord.record.sNums.value = '';
        eRecord.record.returnDate_into.value = '';
        eRecord.record.returnCheacker_into.value = '';
        eRecord.record.sState_into.value = '';
      }

      kintone.app.record.set(eRecord);
    });

    return event;
  });
})();

function createDeviceList(eRecord){
  let snArray = (eRecord.record.sNums.value).split(/\r\n|\n/);
  for(const snums of snArray){
    if(!snums || !snums.match(/\S/g)){
      alert('空白文字か空の改行が含まれています')
      return {result: false, error: {target: 'createDeviceList', code: 'createDeviceList_snumEmpty'}};
    }
  }



  return {result: true, error: {target: 'createDeviceList', code: 'createDeviceList_success'}};
}