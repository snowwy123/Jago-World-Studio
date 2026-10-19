const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),web=path.join(__dirname,'Web');
const modules=['app','world-model','continental-layout','geography','world-views','world-actions','map-worlds','interiors','map-checks','animation-codecs','world-exports','suite-bridge','suite-adapter','validation','bootstrap','studio-next','map-art','map-generation-next','map-interaction','story-desk','atmosphere','next-validation','anime-example','map-explore','desk-polish','architecture','map-assets-expanded','map-cycles','cartography-geography','cartography-render','cartography-editor','city-structure','geography-quality','story-workspace','friendly-writing','map-refinement','story-presentation','living-maps','living-world','world-scripts','living-example','next-stage','city-depth','reader-depth','mystery-example','interior-details','city-terraces','generation-usability','water-polish','city-natural-fabric','city-landscape','city-network','regional-route-network','city-building-detail','map-usability','studio-desks','world-workshop','interior-workshop','map-workshop','world-workshop-polish','map-shape-studio','map-blueprints'];
modules.push('space-example');
modules.push('studio-appearance');
modules.push('story-navigation');
modules.push('builtin-kits');
modules.push('kit-creator','map-living-detail','world-workshop-expansion','map-home','moody-cartography','map-performance','map-room-footprints','final-refinement','adventure-refinement','region-refinement','city-final-polish','refinement-atmosphere','refinement-maps','refinement-world','refinement-sites','refinement-finish','fortified-followup');
modules.push('space-architecture','family-studio','world-continuity','generation-review','manual-workshop','environment-fields','site-architecture-depth','studio-usability-round','refinement-showcases','local-generation','map-furniture-workshop','consolidation-workflows');
const fonts=[['Cinzel','Cinzel.ttf'],['IM Fell English','IM-Fell-English.ttf'],['Rajdhani','Rajdhani.ttf']];
modules.push('studio-completion','suite-round','portrait-workshop','family-workshop');
modules.push('world-refresher','harbour-refresher');
const fontCSS=fonts.map(([name,file])=>`@font-face{font-family:'${name}';src:url(data:font/ttf;base64,${fs.readFileSync(path.join(__dirname,'Fonts',file)).toString('base64')}) format('truetype');font-weight:100 900;font-display:swap;}`).join('\n');
const audio=JSON.parse(fs.readFileSync(path.join(__dirname,'Audio/catalog.json'),'utf8')).map(a=>{const data=fs.readFileSync(path.join(__dirname,'Audio',a.file));return {...a,credit:a.credit||'Kenney',license:a.license||'CC0',url:a.url||'https://kenney.nl/assets/rpg-audio',bytes:data.length,src:'data:'+a.mime+';base64,'+data.toString('base64')};});
const js='const JAGO_STARTER_AUDIO='+JSON.stringify(audio)+';\nconst BUNDLED_FONT_CSS='+JSON.stringify(fontCSS)+';\n'+modules.map(n=>fs.readFileSync(path.join(web,n+'.js'),'utf8')).join('\n');
new(require('vm').Script)(js);
let html=fs.readFileSync(path.join(web,'shell.html'),'utf8');
html=html.replace('/*STYLE*/',()=>fontCSS+'\n'+['style','expansion','next','cartography','story-workspace','map-refinement','living-world','next-stage','map-usability','workshop','appearance','studio-completion'].map(n=>fs.readFileSync(path.join(web,n+'.css'),'utf8')).join('\n')).replace('/*APP*/',()=>js.replace(/<\/script/gi,'<\\/script'));
fs.writeFileSync(path.join(root,'Jago-Worldbuilding-Studio.html'),html);fs.writeFileSync(path.join(root,'index.html'),html);console.log('Offline HTML built with map assets and fonts.');






