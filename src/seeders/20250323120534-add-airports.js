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
    await queryInterface.bulkInsert('Airports', [
      {
        name: "Indira Gandhi International Airport",
        address: "New Delhi, Delhi 110037, India",
        cityid: 4,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        address: "Andheri East, Mumbai, Maharashtra 400099, India",
        cityid: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kempegowda International Airport",
        address: "Devanahalli, Bengaluru, Karnataka 560300, India",
        cityid: 28,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Netaji Subhas Chandra Bose International Airport",
        address: "Kolkata, West Bengal 700052, India",
        cityid: 27,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Chennai International Airport",
        address: "Meenambakkam, Chennai, Tamil Nadu 600027, India",
        cityid: 26,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Rajiv Gandhi International Airport",
        address: "Shamshabad, Hyderabad, Telangana 500409, India",
        cityid: 25,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Sardar Vallabhbhai Patel International Airport",
        address: "Ahmedabad, Gujarat 380008, India",
        cityid: 8,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Pune International Airport",
        address: "Lohegaon, Pune, Maharashtra 411032, India",
        cityid: 23,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Cochin International Airport",
        address: "Nedumbassery, Kochi, Kerala 683111, India",
        cityid: 12,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Goa International Airport",
        address: "Dabolim, Goa 403801, India",
        cityid: 22,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Jaipur International Airport",
        address: "Sanganer, Jaipur, Rajasthan 302029, India",
        cityid: 21,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Trivandrum International Airport",
        address: "Thiruvananthapuram, Kerala 695008, India",
        cityid: 20,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Mangalore International Airport",
        address: "Mangaluru, Karnataka 575007, India",
        cityid: 19,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Chandigarh International Airport",
        address: "Chandigarh, Punjab 160003, India",
        cityid: 18,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Madurai Airport",
        address: "Madurai, Tamil Nadu 625022, India",
        cityid: 17,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Surat International Airport",
        address: "Surat, Gujarat 395007, India",
        cityid: 16,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Bagdogra Airport",
        address: "Siliguri, West Bengal 734421, India",
        cityid: 14,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Lucknow International Airport",
        address: "Amausi, Lucknow, Uttar Pradesh 226009, India",
        cityid: 15,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Vadodara Airport",
        address: "Vadodara, Gujarat 390022, India",
        cityid: 13,
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: "Hindon Airport",
        address: "Hindon, New Delhi, India",
        cityid: 4,
        createdAt: new Date(),
         updatedAt: new Date()
      }
    ]
    
,{})                     
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
