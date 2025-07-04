// IngredientList.jsx
import React from 'react'

const IngredientList = ({ myRef, ingredients, submitfunc, isGenerating }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-5 text-white">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Your Ingredients
                </h2>
            </div>
            
            <div className="p-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="bg-slate-50 rounded-lg p-3 flex items-center">
                            <span className="w-3 h-3 rounded-full bg-accent mr-3"></span>
                            <span className="text-slate-700">{ingredient}</span>
                        </li>
                    ))}
                </ul>
                
                {ingredients.length > 3 && (
                    <div ref={myRef} className="text-center">
                        <button
                            onClick={submitfunc}
                            disabled={isGenerating}
                            className="px-6 py-3 bg-gradient-to-r from-primary to-rose-500 text-white rounded-lg hover:from-rose-700 hover:to-rose-600 transition-all shadow-md font-medium flex items-center justify-center gap-2 w-full sm:w-auto mx-auto"
                        >
                            {isGenerating ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating...
                                </>
                            ) : (
                                'Generate Recipe'
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default IngredientList