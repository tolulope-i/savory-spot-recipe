// MeroGeneratedRecipe.jsx
import React from 'react'
import ReactMarkdown from 'react-markdown'

const MeroGeneratedRecipe = ({ recipe, onNewRecipe, onSaveRecipe }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-red-400 to-primary p-5 text-white">
                <h2 className="text-2xl font-bold font-serif">Your Custom Recipe</h2>
            </div>
            
            <div className="p-6 prose max-w-none text-slate-700">
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </div>
            
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap gap-3 justify-between">
                <button
                    onClick={onNewRecipe}
                    className="px-5 py-2.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    New Recipe
                </button>
                <button
                    onClick={onSaveRecipe}
                    className="px-5 py-2.5 bg-primary hover:bg-accent text-white rounded-lg transition-all ease-in-out duration-700 flex items-center gap-2 shadow-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Save Recipe
                </button>
            </div>
        </div>
    )
}

export default MeroGeneratedRecipe