import { Button } from "./Button"
import Header from "./Header"

function Mainbg(){
    return(<>
        <div className="bg-blue-950 h-screen w-screen -m-px">
                <Button disabled={true}>Sign up</Button>
        </div>
    </>)
}

export default Mainbg