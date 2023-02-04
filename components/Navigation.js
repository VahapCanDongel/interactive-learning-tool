export default function Navigation(){
    return(
        <div className="w-full h-[80px] bg-cyan-800 flex justify-between items-center p-2">
            <div className="text-white">Interactive Learning Tool</div>
            <ul className="flex gap-6 justify-center items-center">
                <li className="text-white">
                    Login
                </li>
                <li>
                    <input type="search" name="" value="" placeholder="Search..." className="outline-none rounded-sm w-[200px] h-[40px] p-1"/>
                </li>
            </ul>
        </div>
    )
}