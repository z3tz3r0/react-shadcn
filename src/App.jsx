import { Button } from "@/components/ui/button";
import CardTest from "./components/Card";


export default function App() {


    return (
        <>
            <div className='grid h-screen bg-blue-400 place-content-center'>

                <Button variant="outline" size="lg">
                    test
                </Button>
                <CardTest />
            </div>
        </>

    );
}