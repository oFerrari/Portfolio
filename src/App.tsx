import { Avatar } from "./components/Avatar"
import { ThemeController } from "./components/ThemeController"

function App() {

  return (
    <>
      <section className="flex justify-center items-center gap-4 flex-col mt-4">
        <Avatar />
        <div>@oFerrari</div>
        <button className="btn btn-primary">Ola Daysy</button>
        <ThemeController />
        <h1 className="text-5xl">Desenvolvedor Front End</h1>
      </section>
    </>
  )
}

export default App
