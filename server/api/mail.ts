const fromEmailAddress = "victormurrwa@gmail.com";
// const toEmailAddress = "citychurchchrisco@gmail.com";
const toEmailAddress = "victor.anaminyi@strathmore.edu";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const apiKey = "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";

  const data = {
    personalizations: [
      {
        to: [
          {
            email: toEmailAddress,
          },
        ],
      },
    ],
    from: {
      email: fromEmailAddress,
    },
    subject: "New Contact Form Submission from Chrisco Website",
    content: [
      {
        type: "text/plain",
        value: `Name: ${body.name}, Email address: ${body.email}, Subject: ${body.subject}, Message: ${body.message}`
      },
    ],
  };

  const url = "https://api.sendgrid.com/v3/mail/send";

  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Email sent successfully!");
        return {
          msg: "Email sent successfully!"
        }
      } else {
        console.error(
          "Failed to send email:",
          response.status,
          response.statusText
        );
        return {
          msg: response.statusText
        }
      }
    })
    .catch((error) => {
      console.error("Error occurred:", error.message);
      return {
        msg: error.message
      }
    });
});
