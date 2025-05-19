// STRETCH
const cars = [{
    vin:'JH4DB1570MS001469',
    make:'toyota',
    model:'prius',
    mileage:125413,
    title:'clean',
    transmission:'manual',
},
{
    vin:'4F2CU08102KM50866',
    make:'toyota',
    model:'corolla',
    mileage:11500,
    title:'salvage',
},
{
    vin:'JTJHA31U940036422',
    make:'ford',
    model:'focus',
    mileage:50000,

}]

exports.seed = async function (knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
    }
    