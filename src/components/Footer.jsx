export default function Footer(){
    return(
        <div id="footer" className="flex fixed bottom-0 justify-center items-center w-[100vw] bg-white text-blue-900 py-5 px-2 gap-4 rounded-t-[18px]">
            <a href="" className="flex flex-col items-center gap-1">
                <i class="fa-solid fa-house text-[18px]"></i>
                <span href="http://localhost:3000/home" className="text-[15px] font-[500]">Início</span>
            </a>
            
            <a href="" className="flex flex-col items-center gap-1">
                <i class="fa-solid fa-calendar-days text-[18px]"></i>
                <span href="http://localhost:3000/home" className="text-[15px] font-[500]">Agenda</span>
            </a>

            <a href="" className="flex flex-col items-center gap-1">
                <i class="fa-solid fa-bars-progress text-[18px]"></i>
                <span href="http://localhost:3000/home" className="text-[15px] font-[500]">Missões</span>
            </a>

            <a href="" className="flex flex-col items-center gap-1">
                <i class="fa-solid fa-eye text-[18px]"></i>
                <span href="http://localhost:3000/home" className="text-[15px] font-[500]">Localizar</span>
            </a>

            <a href="" className="flex flex-col items-center gap-1">
                <i class="fa-solid fa-clock-rotate-left text-[18px]"></i>
                <span href="http://localhost:3000/home" className="text-[15px] font-[500]">Histórico</span>
            </a>
        </div>
    )
}