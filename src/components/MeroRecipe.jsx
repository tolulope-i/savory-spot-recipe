// MeroRecipe.jsx
import React from 'react'
import IngredientList from './IngredientList'
import MeroGeneratedRecipe from './MeroGeneratedRecipe'
import { getRecipeFromMistral } from '../ai'

const Form = () => {
    const [addedIngredients, setAddedIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    const [inputValue, setInputValue] = React.useState("")
    const [isGenerating, setIsGenerating] = React.useState(false)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            setAddedIngredients(prev => [...prev, inputValue.trim()])
            setInputValue("")
        }
    }

    const handleGetRecipe = async () => {
        try {
            setIsGenerating(true)
            const generatedRecipe = await getRecipeFromMistral(addedIngredients)
            setRecipe(generatedRecipe)
            setRecipeShown(true)
        } catch (error) {
            console.error("Error generating recipe:", error)
        } finally {
            setIsGenerating(false)
        }
    }

    const handleNewRecipe = () => {
        setAddedIngredients([])
        setRecipe("")
        setRecipeShown(false)
        setInputValue("")
        // Scroll to top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const handleSaveRecipe = () => {
        const element = document.createElement("a")
        const file = new Blob([recipe], { type: 'text/plain' })
        element.href = URL.createObjectURL(file)
        element.download = "savory-spot-recipe.txt"
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-3">Savory Spot</h1>
                    <p className="text-slate-600 text-lg">Transform your ingredients into culinary masterpieces</p>
                </header>

                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Enter ingredients (e.g. chicken, tomatoes, pasta...)"
                            className="flex-grow px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-pry focus:border-deeper-light outline-none transition text-slate-700 placeholder-slate-400"
                        />
                        <button
                            type="submit"
                            className="px-6 bg-primary hover:bg-accent text-white rounded-lg transition-all ease-in-out duration-700 font-medium shadow-sm"
                        >
                            Add Ingredient
                        </button>
                    </form>
                </div>

                {addedIngredients.length > 0 && (
                    <IngredientList
                        myRef={recipeSection}
                        ingredients={addedIngredients}
                        submitfunc={handleGetRecipe}
                        isGenerating={isGenerating}
                    />
                )}

                {recipeShown && (
                    <div className="mt-8" ref={recipeSection}>
                        <MeroGeneratedRecipe 
                            recipe={recipe} 
                            onNewRecipe={handleNewRecipe} 
                            onSaveRecipe={handleSaveRecipe} 
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form