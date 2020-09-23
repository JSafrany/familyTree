const familyTree = require('./testedFamilyTree.js')



console.log("NODE ENV",process.env.NODE_ENV)
describe('family tree',function (){
    test('i am in my family tree',function(){
        const me = familyTree[0]
        expect(me.name).toEqual('John')
    })

    test("my sister is also there", function() {
        const sister = familyTree[1]
        expect(sister.name).toEqual("Kathryn")
    })
    test("my brother is also there", function() {
        const brother = familyTree[2]
        expect(brother.name).toEqual("Ewan")
    })
    test("my dad is in the family tree", function() {
        const dad = familyTree[3]
        expect(dad.name).toEqual('Steve')
    })
    test("my mum is in the family tree", function() {
        const dad = familyTree[4]
        expect(dad.name).toEqual('Fiona')
    })
    test("my sister's mum is Fiona", function(){
        const K = familyTree[1]
        expect(K.parents[0].name).toEqual("Fiona")
    })
    test("my brother's mum is Fiona", function(){
        const E = familyTree[2]
        expect(E.parents[0].name).toEqual("Fiona")
    })
    test("my mum is Fiona", function(){
        const J = familyTree[0]
        expect(J.parents[0].name).toEqual("Fiona")
    })
    test("my dad is Steve", function(){
        const me = familyTree[0]
        expect(me.parents[1].name).toEqual("Steve")
    })
    test("my brother's dad is Steve", function(){
        const E = familyTree[2]
        expect(E.parents[1].name).toEqual("Steve")
    })
    test("my sister's dad is Steve", function(){
        const K = familyTree[1]
        expect(K.parents[1].name).toEqual("Steve")
    })
    test('my maternal grandmother is on the family tree',function(){
        const Mgrandmother = familyTree[5]
        expect(Mgrandmother.name).toEqual("Lesley")
    })
    test('my maternal grandfather is on the family tree',function(){
        const MGF = familyTree[6]
        expect(MGF.name).toEqual("Malcolm")
    })
    test("my mum's mum is lesley",function(){
        const M = familyTree[4]
        expect(M.parents[0].name).toEqual("Lesley")
    })
    test("my mum's dad is Malcolm",function(){
        const M = familyTree[4]
        expect(M.parents[1].name).toEqual("Malcolm")
    })
    test('my paternal grandmother is on the family tree',function(){
        const PGM = familyTree[7]
        expect(PGM.name).toEqual("Erzsebet")
    })
    test('my paternal grandfather is on the family tree',function(){
        const MGF = familyTree[8]
        expect(MGF.name).toEqual("Laszlo")
    })
    test("my dad's mum is Erzsebet",function(){
        const D = familyTree[3]
        expect(D.parents[0].name).toEqual("Erzsebet")
    })
    test("my dad's dad is Laszlo",function(){
        const D = familyTree[3]
        expect(D.parents[1].name).toEqual("Laszlo")
    })
    test("all my great grandparents are unknown", function(){
        const MGM = familyTree[5]
        expect(MGM.parents[0].name).toEqual("unknown")
        expect(MGM.parents[1].name).toEqual("unknown")
        const MGF = familyTree[6]
        expect(MGM.parents[0].name).toEqual("unknown")
        expect(MGM.parents[1].name).toEqual("unknown")
        const PGM = familyTree[7]
        expect(MGM.parents[0].name).toEqual("unknown")
        expect(MGM.parents[1].name).toEqual("unknown")
        const PGF = familyTree[8]
        expect(MGM.parents[0].name).toEqual("unknown")
        expect(MGM.parents[1].name).toEqual("unknown")
    })

})

//family-tree export in form of array of objects, [0me,1sister,2brother,3dad,4mum,
//5Mgrandmother,6M grandfather, 7P grandmother, 8Pgrandfater]
//object =  {name,parents:[mother,father]}
