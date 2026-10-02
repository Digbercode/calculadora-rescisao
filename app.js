
const $=id=>document.getElementById(id);
const money=v=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(v)||0);
const d=id=>{const v=$(id)?.value;return v?new Date(v+'T12:00:00'):null};
const dayDiff=(a,b)=>Math.floor((b-a)/86400000);
function datedifYears(a,b){let y=b.getFullYear()-a.getFullYear();let x=new Date(a);x.setFullYear(a.getFullYear()+y);if(x>b)y--;return Math.max(0,y)}
function datedifMonths(a,b){let m=(b.getFullYear()-a.getFullYear())*12+b.getMonth()-a.getMonth();if(b.getDate()<a.getDate())m--;return Math.max(0,m)}
function row(n,v){return `<div class="row"><span>${n}</span><strong>${money(v)}</strong></div>`}
function calc(){
 const salary=+$('salary').value||0,a=d('start'),b=d('end'); if(!a||!b||b<a)return;
 const type=$('type').value,notice=$('notice').value,days=+$('days').value||0;
 const paid=$('salaryPaid').value==='Sim',vacTaken=+$('vacTaken').value||0,food=+$('food').value||0;
 const fgtsMonths=Math.max(0,12*(b.getFullYear()-a.getFullYear())+(b.getMonth()+1)-(a.getMonth()+1)+1-(a.getDate()>15?1:0)-(b.getDate()<15?1:0));
 const years=datedifYears(a,b);
 const fgtsMonth=(type==='Demissão por justa causa'||type==='Pedido de demissão')?0:salary/30*days*.08;
 const salaryBal=paid?0:salary/30*days;
 const noticeDays=Math.min(90,30+Math.max(0,Math.min(60,Math.floor(dayDiff(a,b)/365)*3)));
 const noticePay=(type==='Demissão sem justa causa'||type==='Acordo entre as partes')&&notice==='Indenizado'?salary/30*noticeDays:0;
 // 13º: conta somente os meses do ano civil da rescisão.
 // Cada mês vale 1/12 quando houve pelo menos 15 dias trabalhados nele.
 let avos13=0;
 if(type!=='Demissão por justa causa'){
   const ano=b.getFullYear();
   const inicioAno=new Date(ano,0,1,12);
   const inicioContrato=a>inicioAno?a:inicioAno;
   for(let mes=0;mes<=b.getMonth();mes++){
     const inicioMes=new Date(ano,mes,1,12);
     const fimMes=new Date(ano,mes+1,0,12);
     const inicioTrabalho=inicioContrato>inicioMes?inicioContrato:inicioMes;
     const fimTrabalho=b<fimMes?b:fimMes;
     if(fimTrabalho>=inicioTrabalho){
       const diasTrabalhados=dayDiff(inicioTrabalho,fimTrabalho)+1;
       if(diasTrabalhados>=15) avos13++;
     }
   }
 }
 const thirteenth=(type==='Demissão por justa causa')?0:salary/12*avos13;
 const vac=Math.max(0,(salary/12)*(12*(b.getFullYear()-a.getFullYear())+(b.getMonth()+1)-(a.getMonth()+1)+1-(a.getDate()>15?1:0)-(b.getDate()<15?1:0)-(vacTaken*12)));
 const vacThird=vac/3;
 const fgtsAccum=fgtsMonth*(datedifMonths(a,b)+(b.getDate()>=15?1:0));
 const fine=type==='Demissão sem justa causa'?fgtsAccum*.40:0;
 const inss=Math.max(0,(salaryBal+noticePay+thirteenth)*.08);
 const transport=salary*.07,foodDisc=Math.max(0,food*.10);
 const irrf=(salaryBal+noticePay+thirteenth)>5000?Math.max(0,(salaryBal+noticePay+thirteenth-5000)*.075):0;
 const other=0,totalDisc=inss+transport+foodDisc+irrf+other;
 const saqueRes=salaryBal+noticePay+thirteenth+vac+vacThird+fine+fgtsAccum-totalDisc;
 const saqueAni=salaryBal+noticePay+thirteenth+vac+vacThird+fine-totalDisc;
 $('fgtsMonths').textContent=fgtsMonths;$('avos13').textContent=avos13;$('vacPeriods').textContent=years;
 $('vacDue').textContent=Math.max(0,years-vacTaken);$('fgtsMonth').textContent=money(fgtsMonth);
 $('receipts').innerHTML=row('Saldo de salário',salaryBal)+row('Aviso-prévio indenizado',noticePay)+row('13º salário proporcional',thirteenth)+row('Férias',vac)+row('1/3 de férias',vacThird)+row('FGTS acumulado (estimado)',fgtsAccum)+row('Multa rescisória do FGTS',fine);
 $('discounts').innerHTML=row('INSS — 8%',inss)+row('Vale-transporte — 7%',transport)+row('Alimentação — 10%',foodDisc)+row('IRRF — estimativa',irrf)+row('Outros descontos',other);
 $('totalDiscounts').textContent=money(totalDisc);$('terminationWithdrawal').textContent=money(saqueRes);$('birthdayWithdrawal').textContent=money(saqueAni);
}
document.querySelectorAll('input,select').forEach(e=>e.addEventListener('input',calc));
const today=new Date().toISOString().slice(0,10);if($('end')&&!$('end').value)$('end').value=today;
if($('start')&&!$('start').value){const x=new Date();x.setFullYear(x.getFullYear()-1);$('start').value=x.toISOString().slice(0,10)}
calc();
$('printBtn')?.addEventListener('click',()=>window.print());
$('shareBtn')?.addEventListener('click',async()=>{try{if(navigator.share)await navigator.share({title:'Calculadora de Rescisão',url:location.href});else{await navigator.clipboard.writeText(location.href);$('shareBtn').textContent='Link copiado!'}}catch(e){}});
