'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        name: 'Boeing 747',
        model: '747-8',
        capacity: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Airbus A380',
        model: 'A380-800',
        capacity: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boeing 737',
        model: '737 MAX 8',
        capacity: 230,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Airbus A320',
        model: 'A320neo',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boeing 777',
        model: '777-200LR',
        capacity: 317,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Airbus A330',
        model: 'A330-900neo',
        capacity: 280,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boeing 787',
        model: '787-9 Dreamliner',
        capacity: 296,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bombardier CRJ200',
        model: 'CRJ200LR',
        capacity: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Embraer E175',
        model: 'E175LR',
        capacity: 88,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boeing 767',
        model: '767-300ER',
        capacity: 290,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Airbus A350',
        model: 'A350-900',
        capacity: 315,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boeing 737',
        model: '737-800',
        capacity: 160,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Airbus A321',
        model: 'A321XLR',
        capacity: 244,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boeing 757',
        model: '757-200',
        capacity: 239,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Airbus A220',
        model: 'A220-300',
        capacity: 145,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'McDonnell Douglas MD-11',
        model: 'MD-11F',
        capacity: 410,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boeing 727',
        model: '727-200',
        capacity: 189,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Airbus A310',
        model: 'A310-300',
        capacity: 280,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lockheed Martin C-130',
        model: 'C-130J Super Hercules',
        capacity: 92,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Douglas DC-10',
        model: 'DC-10-30',
        capacity: 380,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],{ignoreDuplicates:true});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
