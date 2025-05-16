import Tarefa from "../components/tarefa";

const Home = () => {
    return (
        <div>
            <header className="bg-slate-600 flex justify-between py-4 px-[100px]">
                <h1 className="text-white text-2xl">React Tarefas</h1>
                <a href="/login" className="leading-[46px] bg-white px-4 rounded font-semibold">Login</a>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl: grid-cols-4 gap-4 py-8 px-[100px]">
                <Tarefa />
                <Tarefa />
                <Tarefa />
                <Tarefa />
            </div>
        </div>

    );
}

export default Home;