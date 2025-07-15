export const Button = (
    {disabled,
    children,
    onClick})=>{
    return(<>
        <span onClick={onClick} className={`${disabled ? 'bg-blue-100' : 'bg-blue-400'}
                text-white cursor-pointer rounded-2xl text-4xl px-32 py-8`}>
            {children}
        </span>
    </>)
}