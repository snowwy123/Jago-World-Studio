/* SPDX-License-Identifier: MIT · Uneven continental layouts */
'use strict';
const evenWorldLandLayout=generateAdvanced;
function worldLandLayout(m,settings={}){
 const s={style:'islands',count:3,coverage:65,roughness:50,seed:'world-1',landSpacing:45,landVariety:75,smallIslands:10,landDistribution:'mixed',...settings},rand=rng(s.seed+'-continental-layout'),W=m.width,H=m.height,min=Math.min(W,H),n=s.style==='continent'?1:Math.round(clamp(+s.count||3,1,12)),variety=clamp(+s.landVariety,0,100)/100,gap=min*(.008+clamp(+s.landSpacing,0,100)/100*.06),coverage=clamp(+s.coverage||65,1,100)/100,lands=[],ellipses=[],phase=rand()*Math.PI*2;
 if(s.landDistribution==='even')return evenWorldLandLayout(m,s);
 const weights=Array.from({length:n},(_,i)=>Math.pow(.44+rand()*.85,-.2)+(i===0?variety*3.5:0)),total=weights.reduce((a,b)=>a+b,0),area=W*H*(.09+coverage*.35)*(s.style==='archipelago'?.72:1),cluster=[W*(.3+rand()*.4),H*(.3+rand()*.4)];
 const make=(cx,cy,rx,ry,angle,seed,small=false)=>{const samples=small?48:Math.round(80+clamp(+s.coastDetail||50,0,100)*3),rough=clamp(+s.roughness||0,0,100)/100,points=[],co=Math.cos(angle),si=Math.sin(angle);for(let j=0;j<samples;j++){const a=j/samples*Math.PI*2,r=coastRadius(a,seed,rough,s)*(1+rough*.12*Math.sin(a*2+seed)),x=Math.cos(a)*rx*r,y=Math.sin(a)*ry*r;points.push([clamp(cx+x*co-y*si,10,W-10),clamp(cy+x*si+y*co,10,H-10)]);}return points;};
 for(let i=0;i<n;i++){
  const weight=(1-variety)/n+variety*weights[i]/total,aspect=.6+rand()*1.3,base=Math.sqrt(area*weight/Math.PI),angle=rand()*Math.PI,rx0=Math.min(W*.32,base*Math.sqrt(aspect)),ry0=Math.min(H*.34,base/Math.sqrt(aspect));let placed=null;
  for(let attempt=0;attempt<2400;attempt++){
   const shrink=1-Math.min(.84,Math.floor(attempt/250)*.12),rx=rx0*shrink,ry=ry0*shrink,r=Math.max(rx,ry)*1.3;
   let x,y;const distribution=s.landDistribution==='mixed'?(i%3===1?'cluster':'open'):s.landDistribution;
   if(distribution==='chain'&&attempt<1800){const t=(i+.4+rand()*.2)/n;x=W*(.12+t*.76);y=H*(.5+.22*Math.sin(t*4+phase))+(rand()-.5)*H*.14;}
   else if(distribution==='cluster'&&i&&attempt<1800){const a=rand()*Math.PI*2,d=Math.sqrt(rand())*min*.4;x=cluster[0]+Math.cos(a)*d;y=cluster[1]+Math.sin(a)*d;}
   else{x=W*(.1+rand()*.8);y=H*(.12+rand()*.76);}
   x=clamp(x,rx*1.35+12,W-rx*1.35-12);y=clamp(y,ry*1.35+12,H-ry*1.35-12);
   const coastSeed=rand()*6.28; // Keep the seed sequence independent of this broad-phase optimisation.
   if(ellipses.some(q=>Math.hypot(x-q.x,y-q.y)<(r+q.r)*.72+gap))continue;
   const poly=make(x,y,rx,ry,angle,coastSeed),box={x:Math.min(...poly.map(p=>p[0])),y:Math.min(...poly.map(p=>p[1])),w:0,h:0};box.w=Math.max(...poly.map(p=>p[0]))-box.x;box.h=Math.max(...poly.map(p=>p[1]))-box.y;
   if(ellipses.some(q=>{if(box.x>q.box.x+q.box.w||box.x+box.w<q.box.x||box.y>q.box.y+q.box.h||box.y+box.h<q.box.y)return false;const dx=x-q.x,dy=y-q.y;return Math.hypot(dx,dy)<(r+q.r)*.72+gap||poly.some(p=>pointInPolygon(...p,q.poly))||q.poly.some(p=>pointInPolygon(...p,poly));}))continue;
   placed={x,y,r,poly,box};break;
  }
  if(placed){ellipses.push(placed);lands.push(placed.poly);}
 }
 const target=Math.round(clamp(+s.smallIslands||0,0,30));for(let attempt=0,added=0;attempt<target*150&&added<target;attempt++){
  const parent=ellipses[Math.floor(rand()*ellipses.length)],a=rand()*Math.PI*2,near=parent&&rand()<.8,r=min*(.004+Math.pow(rand(),2)*.018),d=parent?parent.r*(.8+rand()*.8):0,x=near?parent.x+Math.cos(a)*d:W*(.04+rand()*.92),y=near?parent.y+Math.sin(a)*d:H*(.05+rand()*.9);
  if(x<r*2+12||y<r*2+12||x>W-r*2-12||y>H-r*2-12)continue;const poly=make(x,y,r*(.65+rand()),r*(.65+rand()),rand()*6.28,rand()*6.28,true);
  if(lands.some(q=>pointInPolygon(x,y,q)||poly.some(p=>pointInPolygon(...p,q))||q.some(p=>pointInPolygon(...p,poly))||q.some(p=>Math.hypot(p[0]-x,p[1]-y)<r*2+min*.004)))continue;lands.push(poly);added++;
 }
 return {...s,lands,decor:[],rivers:[],riverCount:0,layoutModel:'uneven-continents-1',majorLandmasses:ellipses.length};
}
generateAdvanced=worldLandLayout;
