export const Input = (onchange,
    placeholder,
    type) =>{
    return (<>
    <span className={`text-white cursor-pointer rounded-2xl text-4xl px-32 py-8`}>
            <input type={type} placeholder={placeholder} className="bg-blue-200 outline-none p-4" />
        </span>
    </>)
}