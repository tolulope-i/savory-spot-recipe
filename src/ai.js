import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT =
    ` You are an assistance that receives a list of ingredients that a user has and suggests a recipe 
 they could make with some or all of those ingredients. You do not need to use every ingredient they mention 
 in your recipe. The recipe can include additional ingredients they do not mention, but try not to include too many extra 
 ingredients. Format your response in markdown to make it easier to render in web pages`


 const hf = new InferenceClient(import.meta.env.VITE_CHEF_SAVORY_KEY)

export async function getRecipeFromMistral(ingredientsArray) {
    const ingredientsString = ingredientsArray.join(", ")
    try{
        const response = await hf.chatCompletion({
            // model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {role: "system", content: SYSTEM_PROMPT},
                {role: "user", content: `I have ${ingredientsString}, Please give me a recipe you would recommend`}
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } 
    catch(err){
        console.error(err.message)
    }
}