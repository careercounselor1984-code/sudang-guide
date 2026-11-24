(function(root){'use strict';
const rounds=[{number:3,start:'2026-11-10',end:'2026-12-09',due:'2026-12-09',appointment:{date:'2026-11-27',time:'오후 2시',name:'재진단 상담'}},{number:4,start:'2026-12-10',end:'2027-01-09',due:'2027-01-09',appointment:null}];
const day=s=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(s))return NaN;const n=Date.parse(s+'T00:00:00Z');return Number.isFinite(n)&&new Date(n).toISOString().slice(0,10)===s?n:NaN};
function resolve(date){const n=day(date);if(!Number.isFinite(n))return{state:'invalid'};const round=rounds.find(r=>date>=r.start&&date<=r.end);if(!round)return{state:date<rounds[0].start?'before':'unconfirmed'};return{state:'active',round,daysLeft:(day(round.due)-n)/86400000,appointment:round.appointment&&round.appointment.date>=date?round.appointment:null,pastAppointment:round.appointment&&round.appointment.date<date?round.appointment:null};}
const api={rounds,resolve};if(typeof module==='object'&&module.exports)module.exports=api;else root.DemoSchedule=api;
})(typeof window==='object'?window:this);
