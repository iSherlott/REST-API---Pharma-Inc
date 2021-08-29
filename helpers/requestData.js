const axios = require("axios");

module.exports = async (page) => {
  return new Promise(async (res, rej) => {
    try {
      const result = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: `https://randomuser.me/api/?page=${page}&results=100&nat=br`,
      });

      res(result.data);
    } catch (error) {
      res(`Erro interno`);
    }
  });
};
