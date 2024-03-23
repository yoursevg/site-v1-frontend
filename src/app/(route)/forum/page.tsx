"use client"
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useTimeAgo } from 'next-timeago';


function Forum() {

    const {TimeAgo} = useTimeAgo()

    const data = [
        {
            title: "Пластик",
            lastUpdate: "January 5, 2024 14:00",
            discussions: "23123"
        },
        {
            title: "Стекло",
            lastUpdate: "March 12, 2024 10:00",
            discussions: "12414"
        },
        {
            title: "Металл",
            lastUpdate: "March 12, 2024 11:00",
            discussions: "200"
        },
        {
            title: "Картон",
            lastUpdate: "March 11, 2024 9:00",
            discussions: "1234"
        },
        {
            title: "Бумага",
            lastUpdate: "March 9, 2024 17:00",
            discussions: "441"
        },
        {
            title: "Дерево",
            lastUpdate: "April 1, 2023 20:00",
            discussions: "515"
        },
    ]
    return (
        <div className="">
            <Card>
                <CardHeader>
                    <CardTitle>Форум</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">Название форума</TableHead>
                                <TableHead>Последняя активность</TableHead>
                                <TableHead className="text-right">Количество дискуссий</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((forum, index) => (
                                <TableRow>
                                    <TableCell className="font-medium">{forum.title}</TableCell>
                                    <TableCell>
                                        <TimeAgo date={forum.lastUpdate} locale='ru' />
                                    </TableCell>
                                    <TableCell className="text-right">{forum.discussions}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

export default Forum;