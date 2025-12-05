function Button({operador,fn}) {
    return(
        <div>
            <button 
            type="button"
            className="h-10 w-10 flex items-center justify-center font-bold text-white text-2x1
            bg-lime-600 rouded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hove:ring-lime-500 rounded-full"
            onClick={fn}
            >{operador}</button>
        </div>
    )
}

export default Button