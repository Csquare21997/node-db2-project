// STRETCH
const cars = [{
    vin:'11111111',
    make:'toyota',
    model:'prius',
    mileage:125413,
    title:'clean',
    transmission:'manual',
},
{
    vin:'222222222',
    make:'toyota',
    model:'corolla',
    mileage:11500,
    title:'salvage',
},
{
    vin:'3333333',
    make:'ford',
    model:'focus',
    mileage:50000,

}]

exports.seed = async function (knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
    }
    