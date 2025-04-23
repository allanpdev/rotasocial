export default function Home() {
  return (
    <div id="ui" className="flex flex-col h-[100vh]">
      <div id="content" className="bg-gray-200 h-full">
        <h1 className="">tgestes</h1>
      </div>

      <div id="footer" className="flex fixed bottom-0 justify-center items-center w-[100vw] bg-blue-600 text-white py-5 px-2 gap-4 rounded-t-[18px]">
        <a href="" className="flex flex-col items-center gap-1">
          <i class="fa-solid fa-house text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Início</span>
        </a>
        
        <a href="" className="flex flex-col items-center gap-1">
          <i class="fa-solid fa-calendar-days text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Agenda</span>
        </a>

        <a href="" className="flex flex-col items-center gap-1">
          <i class="fa-solid fa-bars-progress text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Missões</span>
        </a>

        <a href="" className="flex flex-col items-center gap-1">
          <i class="fa-solid fa-eye text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Localizar</span>
        </a>

        <a href="" className="flex flex-col items-center gap-1">
          <i class="fa-solid fa-clock-rotate-left text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Histórico</span>
        </a>
      </div>
    </div>
  )
}