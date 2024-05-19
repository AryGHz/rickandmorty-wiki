const app = require('../app');
const session = require('supertest');
const agent  = session(app);
const [users] = require('../utils/users')

describe('Test de Rutas', ()=> {

    const personajePrueba = {
        id: 1,
        name: 'prueba',
        species: 'specie',
        gender: 'gender',
        origin: {name: 'earth'},
        image: 'image.jpg',
        status: 'status',

    }

    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde con status: 200', async()=>{
            await agent.get('/rickandmorty/character/1').expect(200)
            
            // ---------se puede tambien de esta forma-----------

            // const response = await agent.get('/rickandmorty/character/1');
            // expect(response.statusCode).toBe(200)
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const res = await agent.get('/rickandmorty/character/1');
            for(const props in personajePrueba){
                expect(res.body).toHaveProperty(props)
            }
            // forma incorrecta :
            // expect(res.body).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image")
        })
        it('Si hay un error responde con status: 500', async()=>{
            await agent.get('/rickandmorty/character/1097766').expect(500)
        });
        
    });

    describe('GET /rickandmorty/login',()=>{
        it('Debe retornar access: true si el email y password son correctos',async ()=>{
            const res = await agent.get(`/rickandmorty/login/?email=${users.email}&password=${users.password}`)
            expect(res.body).toEqual({'access': 'true'})
        });
        it('Debe retornar access: true si el email y password son correctos',async ()=>{
            const res = await agent.get(`/rickandmorty/login/?email=wrongEmail&password=wrongPassword`)
            expect(res.body).toEqual({'access': 'false'})
        });

    });

    describe('POST /rickandmorty/fav', ()=>{
        // const randomCharacter = {
        //     name: 'randomChar',
        //     id: 1
        // }
        // const randomCharacter2 = {
        //     name: 'randomChar2',
        //     id: 2
        // }
        // it('Debe devolver en forma de arreglo lo enviado por body',async ()=>{
        //     const res = await agent.post('/rickandmorty/fav').send(randomCharacter);
        //     expect(res.body).toEqual(expect.arrayContaining([randomCharacter]));
        //     // console.log(res.body);
        // });
        // it('Debe devolver un arreglo con los elementos enviados previamente',async ()=>{
        //     const res = await agent.post('/rickandmorty/fav').send(randomCharacter2);
        //     expect(res.body).toEqual(expect.arrayContaining([randomCharacter, randomCharacter2]));
        //     // console.log(res.body);

        // });

        it('Debe devolver en forma de arreglo lo enviado por body',async ()=>{
            const res = await agent.post('/rickandmorty/fav').send(personajePrueba);
            expect(res.body).toContainEqual(personajePrueba)
            // console.log(res.body);
        });
        it('Debe devolver un arreglo con los elementos enviados previamente',async ()=>{
            personajePrueba.id = 2
            personajePrueba.name = 'personajePrueba2'
            const res = await agent.post('/rickandmorty/fav').send(personajePrueba);
            expect(res.body).toHaveLength(2)
            // console.log(res.body);

        });


    });

    describe('DELETE /rickandmorty/fav/:id', ()=> {
        // const randomCharacter = {
        //     name: 'randomChar',
        //     id: 1
        // }
        // const randomCharacter2 = {
        //     name: 'randomChar2',
        //     id: 2
        // }
        // it('Si el ID no pertenece a ningun personaje, debe devolver el arreglo sin modificar',async ()=>{
        //     const res = await agent.delete('/rickandmorty/fav/25');
        //     expect(res.body).toEqual(expect.arrayContaining([randomCharacter, randomCharacter2]));
        //     // console.log(res.body)
        // })
        // it('Si el ID es valido se debe eliminar al personaje',async ()=>{
        //     const res = await agent.delete('/rickandmorty/fav/2');
        //     expect(res.body).toEqual(expect.arrayContaining([randomCharacter]));
        //     console.log(res.body)
        // })

        it('Si el ID no pertenece a ningun personaje, debe devolver el arreglo sin modificar',async ()=>{
            const res = await agent.delete('/rickandmorty/fav/25');
            expect(res.body).toHaveLength(2)
            // console.log(res.body)
        })
        it('Si el ID es valido se debe eliminar al personaje',async ()=>{
            const res = await agent.delete('/rickandmorty/fav/2');
            expect(res.body).toHaveLength(1)
            // console.log(res.body)
        })
    })

})

