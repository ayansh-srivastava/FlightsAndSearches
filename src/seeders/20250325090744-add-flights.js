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
    await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: "AI101",
        airplaneId: 1,
        departureAirportId: 1,
        arrivalAirportId: 2,
        arrivalTime: new Date("2025-03-24T10:30:00Z"),
        departureTime: new Date("2025-03-24T08:00:00Z"),
        price: 5000,
        boardingGate: "A12",
        totalSeats: 180
      },
      {
        flightNumber: "BA202",
        airplaneId: 2,
        departureAirportId: 2,
        arrivalAirportId: 3,
        arrivalTime: new Date("2025-03-24T14:00:00Z"),
        departureTime: new Date("2025-03-24T11:30:00Z"),
        price: 6200,
        boardingGate: "B5",
        totalSeats: 220
      },
      {
        flightNumber: "LH303",
        airplaneId: 3,
        departureAirportId: 3,
        arrivalAirportId: 4,
        arrivalTime: new Date("2025-03-24T16:15:00Z"),
        departureTime: new Date("2025-03-24T13:45:00Z"),
        price: 5500,
        boardingGate: "C3",
        totalSeats: 200
      },
      {
        flightNumber: "QR404",
        airplaneId: 4,
        departureAirportId: 4,
        arrivalAirportId: 5,
        arrivalTime: new Date("2025-03-24T19:20:00Z"),
        departureTime: new Date("2025-03-24T17:00:00Z"),
        price: 7200,
        boardingGate: "D7",
        totalSeats: 250
      },
      {
        flightNumber: "EK505",
        airplaneId: 5,
        departureAirportId: 5,
        arrivalAirportId: 6,
        arrivalTime: new Date("2025-03-24T21:30:00Z"),
        departureTime: new Date("2025-03-24T19:00:00Z"),
        price: 4800,
        boardingGate: "E2",
        totalSeats: 190
      },
      {
        flightNumber: "SQ606",
        airplaneId: 6,
        departureAirportId: 6,
        arrivalAirportId: 1,
        arrivalTime: new Date("2025-03-25T02:00:00Z"),
        departureTime: new Date("2025-03-24T23:30:00Z"),
        price: 8100,
        boardingGate: "F1",
        totalSeats: 230
      },
      {
        flightNumber: "AF707",
        airplaneId: 7,
        departureAirportId: 1,
        arrivalAirportId: 3,
        arrivalTime: new Date("2025-03-25T06:45:00Z"),
        departureTime: new Date("2025-03-25T04:15:00Z"),
        price: 6500,
        boardingGate: "G9",
        totalSeats: 210
      },
      {
        flightNumber: "UA808",
        airplaneId: 8,
        departureAirportId: 2,
        arrivalAirportId: 5,
        arrivalTime: new Date("2025-03-25T09:10:00Z"),
        departureTime: new Date("2025-03-25T06:40:00Z"),
        price: 5700,
        boardingGate: "H3",
        totalSeats: 180
      },
      {
        flightNumber: "DL909",
        airplaneId: 9,
        departureAirportId: 4,
        arrivalAirportId: 2,
        arrivalTime: new Date("2025-03-25T12:30:00Z"),
        departureTime: new Date("2025-03-25T10:00:00Z"),
        price: 4900,
        boardingGate: "I5",
        totalSeats: 220
      },
      {
        flightNumber: "AI111",
        airplaneId: 10,
        departureAirportId: 3,
        arrivalAirportId: 6,
        arrivalTime: new Date("2025-03-25T15:00:00Z"),
        departureTime: new Date("2025-03-25T12:30:00Z"),
        price: 7400,
        boardingGate: "J7",
        totalSeats: 240
      },
      {
        flightNumber: "BA212",
        airplaneId: 1,
        departureAirportId: 5,
        arrivalAirportId: 1,
        arrivalTime: new Date("2025-03-25T18:20:00Z"),
        departureTime: new Date("2025-03-25T16:00:00Z"),
        price: 6800,
        boardingGate: "A3",
        totalSeats: 200
      },
      {
        flightNumber: "LH313",
        airplaneId: 2,
        departureAirportId: 2,
        arrivalAirportId: 4,
        arrivalTime: new Date("2025-03-25T21:45:00Z"),
        departureTime: new Date("2025-03-25T19:15:00Z"),
        price: 5600,
        boardingGate: "B6",
        totalSeats: 210
      },
      {
        flightNumber: "QR414",
        airplaneId: 3,
        departureAirportId: 6,
        arrivalAirportId: 3,
        arrivalTime: new Date("2025-03-26T00:30:00Z"),
        departureTime: new Date("2025-03-25T22:00:00Z"),
        price: 7300,
        boardingGate: "C9",
        totalSeats: 220
      },
      {
        flightNumber: "EK515",
        airplaneId: 4,
        departureAirportId: 3,
        arrivalAirportId: 5,
        arrivalTime: new Date("2025-03-26T03:00:00Z"),
        departureTime: new Date("2025-03-26T00:30:00Z"),
        price: 5200,
        boardingGate: "D8",
        totalSeats: 230
      }
    ], {ignoreDuplicates:true});
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
