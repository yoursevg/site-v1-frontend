"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl, FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/components/ui/use-toast";
import {cn} from "@/lib/utils";
import React, {useState} from "react";
import {FileImage} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const formSchema = z.object({
    title: z.string().min(5, {message: "Название должно быть минимум 5 символов."}),
    description: z.string().min(10, {message: "Описание должно быть минимум 10 символов."}),
    price: z.string().min(1, {message: "Цена должна быть указана."}),
    category: z.enum(["Бумага", "Дерево", "Металл", "Картон", "Стекло", "Пластик", "Другое"]),
    condition: z.enum(["Новый","Б/У"]),
    address: z.string().min(5, {message: "Адрес должен быть минимум 5 символов."}),
    adImage: z
        .any()
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `Max image size is 5MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
})


function AdForm() {

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const {toast} = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            price: "",
            category: "Другое",
            condition: "Новый",
            address: "",
            adImage: undefined,
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "Объявление успешно добавлено!",
            variant: "success",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })

        console.log(data);
    }

    return (
        <Card className="w-[600px] mx-auto">
            <CardHeader>
                <CardTitle>Создать объявление</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        <FormField
                            control={form.control}
                            name="title"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Заголовок</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Описание</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Придумайте описание к вашему объявлению"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {/* Цена */}
                        <FormField
                            control={form.control}
                            name="price"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Цена</FormLabel>
                                    <FormControl>
                                        <Input type="number" step="1" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {/* Состояние */}
                        <FormField
                            control={form.control}
                            name="condition"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Состояние</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue {...field}/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Новый">Новое</SelectItem>
                                                <SelectItem value="Б/У">Б/У</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {/* Адрес */}
                        <FormField
                            control={form.control}
                            name="address"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Адрес</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {/* Категория */}
                        <FormField
                            control={form.control}
                            name="category"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Категория</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue {...field}/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Другое">Без категории</SelectItem>
                                            <SelectItem value="Дерево">Дерево</SelectItem>
                                            <SelectItem value="Металл">Металл</SelectItem>
                                            <SelectItem value="Стекло">Стекло</SelectItem>
                                            <SelectItem value="Картон">Картон</SelectItem>
                                            <SelectItem value="Бумага">Бумага</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {/* Фото */}
                        <div className={cn("flex md:flex-row w-[100%] gap-4 flex-col")}>
                            <div className="flex  w-[100%] gap-4 flex-col ">
                                <FormLabel>Добавьте фото</FormLabel>
                                <div
                                    className={`flex w-[100%] gap-4 p-4 rounded border border-neutral-200 flex-col items-center md:flex-row md:justify-between md:items-center`}>
                                    <div
                                        className={`flex  md:flex-[1] h-[fit-content] md:p-4 md:justify-between md:flex-row`}>
                                        {selectedImage ? (
                                            <div className="md:max-w-[200px]">
                                                <img
                                                    src={URL.createObjectURL(selectedImage)}
                                                    alt="Selected"
                                                />
                                            </div>
                                        ) : (
                                            <div className="inline-flex items-center justify-between">
                                                <div className="p-3 justify-center items-center flex">
                                                    <FileImage/>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="adImage"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Button size="lg" type="button">
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            id="fileInput"
                                                            onBlur={field.onBlur}
                                                            name={field.name}
                                                            onChange={(e) => {
                                                                field.onChange(e.target.files);
                                                                setSelectedImage(e.target.files?.[0] || null);
                                                            }}
                                                            ref={field.ref}
                                                        />
                                                        <label
                                                            htmlFor="fileInput"
                                                            className="text-neutral-90  rounded-md cursor-pointer inline-flex items-center">
                                                            <span
                                                                className="whitespace-nowrap">Выбрать изображение</span>
                                                        </label>
                                                    </Button>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}/>
                                </div>
                            </div>
                        </div>
                        <Button type="submit">Разместить объявление</Button>

                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default AdForm
