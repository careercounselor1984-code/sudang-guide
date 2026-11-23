(function(){'use strict';
 const codec=window.GoodJobInitialGuideLink,card=document.getElementById('appointment-card');if(!codec||!card)return;
 try{const data=codec.decode(location.hash);if(!data)return;
  card.hidden=false;document.getElementById('appointment-datetime').textContent=codec.format(data);
  document.getElementById('appointment-counselor').textContent=(data.counselor?data.counselor+' 상담사':'담당 상담사')+(data.center?' · '+data.center:'');
  document.getElementById('completion-datetime').textContent=codec.format(data);
  document.getElementById('completion-counselor').textContent=data.counselor?data.counselor+' 상담사':'예약 안내의 담당 상담사';
  document.getElementById('completion-counselor-row').hidden=false;
  const conf=window.COUNSELING_CONFIG||{},north=data.center==='북부센터'&&data.place==='울산광역시 북구 송내4길 14, 2층';
  conf.center={...(conf.center||{}),name:data.center?'좋은일자리 '+data.center:'상담센터',address:data.place||'',mapAddress:north?'울산광역시 북구 송내4길 14':data.place||'',latitude:north?35.5888162515624:null,longitude:north?129.367400221771:null,contactPhone:'',entrancePhoto:'',busInfo:north?'':data.place?'길찾기에서 출발지와 대중교통을 선택해 주세요.':'상담 장소는 담당 상담사가 보내드린 안내를 확인해 주세요.'};
  window.COUNSELING_CONFIG=conf;
  if(!north){const entrance=document.querySelector('.entrance-card');if(entrance)entrance.hidden=true;}
  if(!data.place){document.getElementById('map').hidden=true;document.getElementById('address').textContent='담당 상담사가 보내드린 장소 안내를 확인해 주세요.';}
 }catch{card.hidden=false;card.classList.add('appointment-invalid');document.getElementById('appointment-datetime').textContent='예약 안내 링크를 확인해 주세요.';document.getElementById('appointment-counselor').textContent='상담 일시는 담당 상담사에게 확인해 주세요.';}
})();
