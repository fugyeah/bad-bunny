const generateMessage = async ({
  recipientName,
  extra,
}) => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: `Write a message (no more than 88 words) of abandonment for ${recipientName}. You miss him and want him to return to Florida to help with (pick 2 of the following) the property insurance crisis, flooding, inflation, housing shortages, education policy, pollution, and higher taxes and fees. Some relevant information are ${extra}.`,
          max_tokens: 120,
          temperature: 1,
          top_p: 0.77,
        }),
      }
    );
    
    const GPTdata = await response.json();
    
    
    return GPTdata.choices[0].text;

  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default generateMessage;