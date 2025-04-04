
import CardTest from "./components/CardTest";

const teamMember = [
    { id: 1, name: "13_Kob", image: "https://ca.slack-edge.com/T08AK72NJM6-U08AHG61AUD-b3fe0a759dff-512" },
    { id: 2, name: "16_Sheik", image: "https://ca.slack-edge.com/T08AK72NJM6-U08B3MUTYL9-b279d604aedc-512" },
    { id: 3, name: "23_P'Eak", image: "https://ca.slack-edge.com/T08AK72NJM6-U08AUJ750NQ-aa42855844cd-512" },
    { id: 4, name: "27_Nut", image: "https://ca.slack-edge.com/T08AK72NJM6-U08BE3BNPPA-1b2917b9b31f-512" },
    { id: 5, name: "31_Art", image: "https://ca.slack-edge.com/T08AK72NJM6-U08B233G7GR-a34a2e0cee7c-512" },
]


export default function App() {


    return (
        <>
            <div className='grid h-screen bg-black place-content-center text-center'>
                <h1 className="text-white text-5xl font-semibold mb-8">G-Male</h1>

                <div className="flex gap-4 flex-wrap">
                    {teamMember.map((item) => (
                        <CardTest key={item.id} name={item.name} image={item.image} />
                    ))}
                </div>
            </div>
        </>

    );
}