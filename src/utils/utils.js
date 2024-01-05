export async function sendApiRequest(userInput) {
  const apiUrl = "https://api.langdrive.ai/v1/completions";
  const requestData = {
    prompt: userInput,
    model: "mistralai/Mistral-7B-Instruct-v0.1",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    // console.log(data);
    if (data.success) {
      return data.generated_text;
    } else {
      throw new Error("API response error");
    }
  } catch (error) {
    console.error("Error:", error);
    return "Sorry something went wrong. Please try again.";
  }
}
