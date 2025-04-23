export default function Home() {
  return (
    <div id="ui" className="flex flex-col h-[100vh]">
      <div id="content" className="bg-gray-200 h-full">
        <h1 className="">tgestes</h1>
      </div>

      <div id="footer" className="flex justify-center items-center w-full bg-blue-600 text-white py-5 px-2 gap-4">
        <a href="" className="flex flex-col items-center">
          <i class="fa-solid fa-house text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Início</span>
        </a>
        
        <a href="" className="flex flex-col items-center">
          <i class="fa-solid fa-calendar-days text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Agenda</span>
        </a>

        <a href="" className="flex flex-col items-center">
          <i class="fa-solid fa-bars-progress text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Missões</span>
        </a>

        <a href="" className="flex flex-col items-center">
          <i class="fa-solid fa-eye text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Localizar</span>
        </a>

        <a href="" className="flex flex-col items-center">
          <i class="fa-solid fa-clock-rotate-left text-[18px]"></i>
          <span href="http://localhost:3000/home" className="text-[15px]">Histórico</span>
        </a>
      </div>
    </div>
  )
}