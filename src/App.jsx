export default function App() {


    return (
        <div className="flex justify-center min-h-screen bg-blue-900">
            <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
                <h1 className="w-full p-6 font-extrabold bg-amber-100">
                    React App Starter
                </h1>
                <section className="flex w-full p-5 bg-amber-100">
                    <ul className="flex-1 list-disc list-inside">
                        <span className="font-semibold">Tech Stack:</span>
                        <li>Vite</li>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li className="p-4 text-center bg-amber-400">Tailwind</li>
                    </ul>
                </section>
            </div>
        </div>

    );
}