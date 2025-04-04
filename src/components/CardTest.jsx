import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from 'react';

const CardTest = ({ name, image }) => {
    return (
        <Card className="w-2xs h-110">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={image} className="rounded aspect-square" alt={`${name} profile picture`} />
            </CardContent>
            <CardFooter>
                <Button size="lg">
                    Message
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CardTest