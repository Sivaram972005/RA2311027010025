const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2bTk1MzFAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDU4OSwiaWF0IjoxNzc3NzAzNjg5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNWMzNjliODktNjhhZC00MjliLWIwYTQtMDg1YzZiODhhZGQ4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmVua2F0YSBzaXZhcmFtIG1hbWlkYWxhIiwic3ViIjoiNDRhOTUzMGQtOTU2Mi00MzI4LThlZjItMDJjMmQ2MWE1OWZiIn0sImVtYWlsIjoidm05NTMxQHNybWlzdC5lZHUuaW4iLCJuYW1lIjoidmVua2F0YSBzaXZhcmFtIG1hbWlkYWxhIiwicm9sbE5vIjoicmEyMzExMDI3MDEwMDI1IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNDRhOTUzMGQtOTU2Mi00MzI4LThlZjItMDJjMmQ2MWE1OWZiIiwiY2xpZW50U2VjcmV0IjoiYlh2ckZjQkZ0R1d1S0p3ZiJ9.0nNHumqVhKzpRsaZNNqDsM5cemxVNm2oJi6e9JVpuO8";

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log(" Log created:", response.data);
  } catch (err) {
    console.error(" Logging failed:", err.message);
  }
}

module.exports = Log;