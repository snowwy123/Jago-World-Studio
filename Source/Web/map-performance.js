/* SPDX-License-Identifier: MIT */
'use strict';
// Large encoded media and immutable named backups do not need copying for every undo step.
snapshot=function(){const {assets,soundtracks,snapshots,...state}=world;return {...structuredClone(state),assets:assets.map(a=>({...a})),soundtracks:(soundtracks||[]).map(a=>({...a})),snapshots:[...(snapshots||[])]};};
const fastObjectBase=objectSVG;objectSVG=function(o,m,exporting=false){const art=fastObjectBase(o,m,exporting);return exporting?art:`<g data-fast-object="${o.id}">${art}</g>`;};
const fullCartoStage=drawCartoStage;
const transformStageIndexes=new WeakMap();
function transformStageIndex(drag,m,svg){let index=transformStageIndexes.get(drag);if(index?.svg===svg)return index;const ids=new Set(drag.objects.map(o=>o.id)),objects=new Map(m.objects.map(o=>[o.id,o]));for(const o of m.objects)if(ids.has(o.linkFrom)||ids.has(o.linkTo))ids.add(o.id);const nodes=new Map();for(const node of svg.querySelectorAll('[data-fast-object]'))if(!nodes.has(node.dataset.fastObject))nodes.set(node.dataset.fastObject,node);index={svg,parts:[...ids].map(id=>objects.get(id)).filter(Boolean),nodes};transformStageIndexes.set(drag,index);return index;}
drawCartoStage=function(){const drag=cartoPointer,m=currentMap(),svg=$('#mapStage svg');if(!svg||!drag||!['move','resize','rotate'].includes(drag.mode)||drag.objects?.some(o=>o.coastEditable||o.kind==='land')){fullCartoStage();return;}const index=transformStageIndex(drag,m,svg);for(const o of index.parts){const node=index.nodes.get(o.id);if(!node?.isConnected){fullCartoStage();return;}const parent=node.parentNode,next=node.nextSibling;node.outerHTML=objectSVG(o,m,false);index.nodes.set(o.id,next?next.previousElementSibling:parent.lastElementChild);}if(drag.objects.some(o=>o.ambientEffect)){const local=svg.querySelector('[data-local-ambient]');if(local)local.innerHTML=ambientSVG(m,mediaClock);}const b=boundsFor(drag.objects),resize=svg.querySelector('[data-transform="resize"]'),rotate=svg.querySelector('[data-transform="rotate"]');if(resize){const rect=resize.previousElementSibling?.querySelector('rect');if(rect)for(const [k,v]of Object.entries({x:b.x-8,y:b.y-8,width:b.w+16,height:b.h+16}))rect.setAttribute(k,v);resize.setAttribute('x',b.x+b.w+3);resize.setAttribute('y',b.y+b.h+3);}if(rotate){rotate.setAttribute('cx',b.x+b.w/2);rotate.setAttribute('cy',b.y-36);rotate.previousElementSibling?.setAttribute('d',`M${b.x+b.w/2} ${b.y-8}v-24`);}};
// Avoid serialising a media-heavy world while the UI is completing a gesture or undo.
let fastStatusPending=false,fastStatusTimer=null;
const fastChangedBase=changed,fastStatusBase=syncStatus;
syncStatus=function(){if(!fastStatusPending){fastStatusBase();return;}$('#saveStatus').textContent=pendingSave?'Saving…':'Changes kept in local recovery · save a file to keep them';$('[data-action=undo]').disabled=!history.length;$('[data-action=redo]').disabled=!future.length;};
changed=function(){fastStatusPending=true;clearTimeout(fastStatusTimer);fastChangedBase();fastStatusTimer=setTimeout(()=>{fastStatusPending=false;deskDirtyWorld=null;syncStatus();},250);};
Object.assign(window.JagoWorld,{snapshot,undo,redo});

