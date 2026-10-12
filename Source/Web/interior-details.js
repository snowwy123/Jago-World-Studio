/* Original Jago interior artwork · MIT */
'use strict';
const INTERIOR_DETAIL_ART={
 'firepit':'<circle r="40"/><circle r="29" fill="none"/><path d="M-21 20L22-18M-22-17L21 20"/><path d="M-13 17Q-29-3-6-24Q-9-6 7-30Q30-4 13 20Z"/>',
 'sword-rack':'<rect x="-44" y="-29" width="88" height="12"/><rect x="-44" y="24" width="88" height="10"/><path d="M-36-36V40M36-36V40M-23-42V22M0-42V22M23-42V22M-32-30h18M-9-30H9M14-30h18M-23 22l-5-8M0 22l5-8M23 22l-5-8" fill="none"/>',
 'armour-stand':'<path d="M-17-36L-34-20L-23-7L-17-15V20H17V-15L23-7L34-20L17-36Z"/><path d="M0 20V45M-22 45H22M-10-36V-43H10V-36M-17 7H17" fill="none"/>',
 'reception-desk':'<path d="M-47-29H47V30H26V-6H-26V30H-47Z"/><rect x="-13" y="-23" width="26" height="12"/><circle cx="34" cy="-16" r="5"/><path d="M-39 3h10M29 3h10" fill="none"/>',
 'workbench':'<rect x="-47" y="-29" width="94" height="58"/><path d="M-37-19H37M-29-5l18 20M-30 4l8-8M8-8l20 20M17-19v22M10-18h14" fill="none"/><rect x="25" y="-24" width="13" height="11"/>',
 'anvil':'<path d="M-43-20H42L32-5H14V15H30V31H-30V15H-14V-5H-32Z"/><path d="M-38 37H38M-8-5H8" fill="none"/>',
 'cauldron':'<circle r="32"/><circle r="23" fill="none"/><path d="M-32-8h-12v16h12M32-8h12v16H32M-17 27l-10 14M17 27l10 14" fill="none"/><circle cx="-8" cy="-7" r="4"/><circle cx="9" cy="8" r="6"/>',
 'alchemy-bench':'<rect x="-46" y="-28" width="92" height="56"/><path d="M-24-21v13l-8 15q8 12 16 0l-8-15M5-21V-8l-9 17h25L12-8v-13Z"/><circle cx="31" cy="13" r="7"/><path d="M-35 20H35" fill="none"/>',
 'ritual-circle':'<circle r="43" fill="none"/><circle r="35" fill="none"/><path d="M0-32L19 26L-31-10H31L-19 26Z" fill="none"/><circle cy="-43" r="4"/><circle cx="41" cy="13" r="4"/><circle cx="-41" cy="13" r="4"/>',
 'noticeboard':'<rect x="-39" y="-36" width="78" height="72"/><rect x="-32" y="-27" width="21" height="28"/><rect x="0" y="-23" width="29" height="17" transform="rotate(8)"/><rect x="-13" y="8" width="36" height="20"/><path d="M-28 42V36M28 42V36" fill="none"/>',
 'training-dummy':'<circle cy="-28" r="12"/><path d="M-16-11H16V23H-16Z M-16-2H-36V9H-16M16-2H36V9H16"/><path d="M0 23V43M-24 43H24" fill="none"/>',
 'loom':'<rect x="-36" y="-43" width="72" height="86"/><path d="M-27-32H27M-27 29H27M-20-32V29M-10-32V29M0-32V29M10-32V29M20-32V29M-30-8H30M-30 3H30M-30 14H30" fill="none"/>',
 'bathtub':'<rect x="-28" y="-46" width="56" height="92" rx="23"/><rect x="-20" y="-37" width="40" height="73" rx="17" fill="none"/><path d="M-8-44v14h16" fill="none"/>',
 'sarcophagus':'<path d="M-24-43H24L34-21L22 43H-22L-34-21Z"/><circle cy="-20" r="10"/><path d="M-14-3H14L9 31H-9ZM-10 2L10 16M10 2L-10 16" fill="none"/>',
 'prison-bars':'<rect x="-44" y="-36" width="88" height="72"/><path d="M-32-36V36M-19-36V36M-6-36V36M7-36V36M20-36V36M33-36V36M-44-12H44M-44 12H44" fill="none"/>',
 'banquet-table':'<rect x="-47" y="-22" width="94" height="44" rx="5"/><circle cx="-30" r="9"/><circle r="9"/><circle cx="30" r="9"/><path d="M-32-22v-11h14v11M18-22v-11h14v11M-32 22v11h14V22M18 22v11h14V22" fill="none"/>',
 'chart-table':'<rect x="-42" y="-30" width="84" height="60" rx="5"/><path d="M-31-22L-10-18L11-24L31-19V22L11 17L-10 24L-31 18ZM-10-18V24M11-24V17" fill="none"/><circle cx="20" cy="-2" r="7"/><path d="M20-12V8M10-2H30" fill="none"/>',
 'offering-shrine':'<path d="M-35 31V-14L0-43L35-14V31Z"/><path d="M-43 39H43M-20 27V-12H20V27" fill="none"/><circle cy="-4" r="9"/><path d="M-29 17v-13M29 17V4" fill="none"/>',
 'washbasin':'<ellipse rx="35" ry="26"/><ellipse rx="25" ry="17" fill="none"/><path d="M-8-29v14H8M-23 21v17M23 21v17" fill="none"/>',
 'potted-plant':'<circle r="20"/><path d="M0 4Q-39 1-29-25Q-6-34 0 4M0 4Q29-39 36-13Q36 9 0 4M0 4Q-11 36-29 24Q-32 4 0 4M0 4Q35 16 18 34Q-2 33 0 4"/>',
 'hanging-chain':'<ellipse cy="-32" rx="9" ry="14" fill="none"/><ellipse cy="-12" rx="6" ry="14" fill="none"/><ellipse cy="8" rx="9" ry="14" fill="none"/><ellipse cy="28" rx="6" ry="14" fill="none"/>',
 'coastal-rocks':'<path d="M-47 19L-36-10L-15-16L-3 12L-14 30Z M2 27L-4-21L19-37L43-15L38 26Z"/><path d="M19-37L14-7L38 26M-36-10L-26 9L-14 30M-48 40q14-8 28 0t28 0t28 0" fill="none"/>',
 'beacon-tower':'<circle r="33"/><circle r="24" fill="none"/><path d="M-10-18H10V18H-10Z M0-43V-34M0 34V43M-43 0h9M34 0h9M-30-30l7 7M23 23l7 7" fill="none"/>',
 'harbour-lighthouse':'<circle r="32"/><circle r="21" fill="none"/><circle r="10"/><path d="M-9-4L9 4M-9 4L9-4M-44-12L-29-8M29 8L44 12M-44 12L-29 8M29-8L44-12" fill="none"/>'
};
MAP_ASSET_CATEGORIES['Interior details']=Object.keys(INTERIOR_DETAIL_ART).filter(k=>!['coastal-rocks','beacon-tower','harbour-lighthouse'].includes(k));
MAP_ASSET_CATEGORIES.Infrastructure.push('beacon-tower','harbour-lighthouse');MAP_ASSET_CATEGORIES.Terrain.push('coastal-rocks');
for(const role of Object.keys(INTERIOR_DETAIL_ART)){ALL_MAP_ASSETS.push(role);SYMBOLS[role]={name:role.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' '),glyph:'✦'};}
const detailGlyphBase=packGlyph;packGlyph=function(role,style,variant=0,c='#59452c',paper='#eadbb1'){
 if(!INTERIOR_DETAIL_ART[role])return detailGlyphBase(role,style,variant,c,paper);
 const v=Math.abs(Math.round(variant))%4,tech=['scifi','cyberpunk','modern'].includes(style),trim=v===1?'<path d="M-48-39h9M39 39h9"/>':v===2?'<path d="M-43-40l5 5M38 35l5 5"/>':v===3?'<circle cx="-42" cy="-39" r="3"/><circle cx="42" cy="39" r="3"/>':'';
 return `<g fill="${paper}" stroke="${c}" stroke-width="${tech?2:1.6}" stroke-linejoin="round" stroke-linecap="round" transform="rotate(${v%2?90:0}) scale(${v>1?.86:1} ${v>1?1.08:1})">${INTERIOR_DETAIL_ART[role]}<g fill="none">${trim}</g></g>`;
};
Object.assign(INTERIOR_PRESETS,{forge:{name:'Forge & armoury',rooms:['Workshop','Forge','Armoury','Reception','Store','Rest room']},guild:{name:'Adventurers’ guild',rooms:['Reception','Common room','Training hall','Armoury','Map room','Office']},temple:{name:'Temple & ritual house',rooms:['Sanctuary','Ritual chamber','Archive','Offering room','Vestry','Store']},clinic:{name:'Clinic / infirmary',rooms:['Reception','Treatment room','Ward','Wash room','Apothecary','Office']}});
function interiorRoomRoles(name){if(/reception|office/i.test(name))return ['reception-desk','noticeboard','potted-plant'];if(/armoury|training/i.test(name))return ['sword-rack','armour-stand','training-dummy'];if(/forge|workshop/i.test(name))return ['anvil','workbench','firepit'];if(/ritual|sanctuary|offering/i.test(name))return ['ritual-circle','offering-shrine','cauldron'];if(/pantry/i.test(name))return ['shelf','crate','barrel'];if(/kitchen/i.test(name))return ['stove','workbench','cauldron'];if(/bath|wash/i.test(name))return ['bathtub','washbasin'];if(/treatment|ward|medical/i.test(name))return ['medical-pod','washbasin','alchemy-bench'];if(/alchemy|apothecary/i.test(name))return ['alchemy-bench','cauldron','shelf'];if(/map|bridge/i.test(name))return ['chart-table','desk','noticeboard'];if(/bed|guest|crew/i.test(name))return ['bed','desk','potted-plant'];if(/archive|library|store|cargo|vestry/i.test(name))return ['shelf','crate','barrel'];if(/engine/i.test(name))return ['engine','console','workbench'];return ['banquet-table','firepit','noticeboard'];}
const detailInteriorBase=generateInteriorPlan;generateInteriorPlan=function(m,s){const result=detailInteriorBase(m,s);if(s.furniture===false)return result;const rooms=result.objects.filter(o=>o.room),t=mapTheme(m);
 for(const room of rooms){const b=objectBounds(room),group=room.groupId;room.labelDx=0;room.labelDy=0;room.labelPoint=[b.x+b.w/2,b.y+30];if(!pointInPolygon(...room.labelPoint,room.points))room.labelPoint=room.roomCenter||[b.x+b.w/2,b.y+b.h/2];result.objects=result.objects.filter(o=>!(o.furniture&&o.groupId===group&&!['door','window'].includes(o.symbol)));const positions=[[.5,.58],[.23,.65],[.76,.7]],roles=interiorRoomRoles(room.label||room.displayName||'');
  roles.forEach((symbol,i)=>{const p=[b.x+b.w*positions[i][0],b.y+b.h*positions[i][1]],size=clamp(Math.min(b.w,b.h)*.18,10,42),corners=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,y])=>[p[0]+x*size*.6,p[1]+y*size*.6]);if(!corners.every(q=>pointInPolygon(...q,room.points)))return;result.objects.push(generatedObject('symbol',{symbol,x:p[0],y:p[1],size,color:t.ink,furniture:true,groupId:group,displayName:(room.label||room.displayName)+' · '+SYMBOLS[symbol].name}));});
 }return result;
};
Object.assign(window.JagoWorld,{packGlyph,generateInteriorPlan,interiorRoomRoles,mapAssetTypes:ALL_MAP_ASSETS});
