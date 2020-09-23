
const unknown = {name:"unknown"}
unknown.parents = [unknown,unknown]

const PGM = {name:'Erzsebet', parents : [unknown,unknown] }
const PGF  = {name:'Laszlo', parents : [unknown,unknown] }
const MGM = {name:'Lesley', parents : [unknown,unknown] }
const MGF  = {name:'Malcolm', parents : [unknown,unknown] }
const dad = {name : 'Steve', parents: [PGM,PGF]}
const mum = {name: 'Fiona',parents : [MGM,MGF]}
const me = {name:'John', parents : [mum,dad] }
const sister = {name:'Kathryn', parents : [mum,dad]}
const brother = {name : 'Ewan', parents : [mum,dad]}



module.exports = [me,sister,brother,dad,mum,MGM,MGF,PGM,PGF]
