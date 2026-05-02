const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2bTk1MzFAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDU4OSwiaWF0IjoxNzc3NzAzNjg5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNWMzNjliODktNjhhZC00MjliLWIwYTQtMDg1YzZiODhhZGQ4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmVua2F0YSBzaXZhcmFtIG1hbWlkYWxhIiwic3ViIjoiNDRhOTUzMGQtOTU2Mi00MzI4LThlZjItMDJjMmQ2MWE1OWZiIn0sImVtYWlsIjoidm05NTMxQHNybWlzdC5lZHUuaW4iLCJuYW1lIjoidmVua2F0YSBzaXZhcmFtIG1hbWlkYWxhIiwicm9sbE5vIjoicmEyMzExMDI3MDEwMDI1IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNDRhOTUzMGQtOTU2Mi00MzI4LThlZjItMDJjMmQ2MWE1OWZiIiwiY2xpZW50U2VjcmV0IjoiYlh2ckZjQkZ0R1d1S0p3ZiJ9.0nNHumqVhKzpRsaZNNqDsM5cemxVNm2oJi6e9JVpuO8";

async function getTopNotifications() {
  try {
    const res = await axios.get(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    const notifications = res.data.notifications;

    const priority = {
      Placement: 3,
      Result: 2,
      Event: 1
    };

    // Sort by priority + latest
    notifications.sort((a, b) => {
      if (priority[b.Type] !== priority[a.Type]) {
        return priority[b.Type] - priority[a.Type];
      }
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    const top10 = notifications.slice(0, 10);

    console.log(" TOP 10 NOTIFICATIONS:");
    console.log(top10);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

getTopNotifications();