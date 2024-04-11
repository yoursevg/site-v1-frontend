// "use client"
// import {zodResolver} from "@hookform/resolvers/zod"
// import {useForm} from "react-hook-form"
// import {z} from "zod"
//
//
// import {Button} from "@/components/ui/button"
// import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
// import {Input} from "@/components/ui/input"
// import {Textarea} from "@/components/ui/textarea";
// import {useToast} from "@/components/ui/use-toast";
// import {cn} from "@/lib/utils";
// import React, {useEffect, useState} from "react";
// import {FileImage} from "lucide-react";
// import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
// import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
// import GlobalApi from "@/app/_utils/GlobalApi";
//
// const MAX_FILE_SIZE = 1024 * 1024 * 5;
//
// const ACCEPTED_IMAGE_MIME_TYPES = [
//     "image/jpeg",
//     "image/jpg",
//     "image/png",
//     "image/webp",
// ];
//
// const categoryIds = {
//     "Бумага": 1, // Пример ID для категории "Бумага"
//     "Дерево": 2,
//     "Металл": 3,
//     "Картон": 4,
//     "Стекло": 5,
//     "Пластик": 6,
//     "Другое": 7,
// };
//
// let formSchema:any
//
// function AdForm() {
//
//     const [selectedImage, setSelectedImage] = useState<File | null>(null);
//     const [selectedImageId, setSelectedImageId] = useState("")
//     const [fetchedCategories, setFetchedCategories] = useState({})
//
//     const {toast} = useToast()
//
//     async function createSchema() {
//         const categories = await GlobalApi.getCategories();
//         return categories?.data?.data.map((category: { attributes: any; id: any; }) => {
//             if (category?.id && category?.attributes.name) {
//                 setFetchedCategories(prevCategories => ({
//                     ...prevCategories,
//                     [category.attributes.name]: category.id
//                 }));
//             }
//             return category?.attributes?.name
//         })
//     }
//
//
//     useEffect(() => {
//         createSchema().then((categories) => {
//             formSchema = z.object({
//                 title: z.string().min(5, {message: "Название должно быть минимум 5 символов."}),
//                 description: z.string().min(10, {message: "Описание должно быть минимум 10 символов."}),
//                 price: z.string().min(1, {message: "Цена должна быть указана."}),
//                 stock: z.string().min(1, {message: "Остаток должен быть указан."}),
//                 category: z.enum(categories),
//                 condition: z.enum(["Новый", "Б/У"]),
//                 address: z.string().min(5, {message: "Адрес должен быть минимум 5 символов."}),
//                 adImage: z
//                     .any()
//                     .refine((files) => {
//                         return files?.[0]?.size <= MAX_FILE_SIZE;
//                     }, `Max image size is 5MB.`)
//                     .refine(
//                         (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
//                         "Only .jpg, .jpeg, .png and .webp formats are supported."
//                     ),
//             });
//         })
//     }, []);
//
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             title: "",
//             description: "",
//             price: "",
//             stock: "",
//             category: "Другое",
//             condition: "Новый",
//             address: "",
//             adImage: undefined,
//         },
//     })
//
//     async function handleImageUpload(file?: File | Blob) {
//         if (!file) {
//             console.error('No file provided for upload');
//             toast({
//                 title: "Ошибка загрузки",
//                 variant: "destructive",
//                 description: "Файл для загрузки не предоставлен",
//             });
//             return;
//         }
//
//         try {
//             const res = await GlobalApi.uploadPhoto(file);
//             console.log(res);
//             return res.data[0].id; // Возвращает ID загруженного изображения
//         } catch (error) {
//             console.error('Error uploading image:', error);
//             toast({
//                 title: "Ошибка загрузки",
//                 variant: "destructive",
//                 description: "Произошла ошибка при загрузке изображения",
//             });
//             return null; // В случае ошибки возвращает null
//         }
//     }
//
//     async function onSubmit(data: z.infer<typeof formSchema>) {
//
//         const newPost = {
//             title: data.title,
//             description: data.description,
//             price: data.price,
//             stock: data.stock,
//             // category: fetchedCategories[data.category],
//             condition: data.condition,
//             location: data.address,
//             images: selectedImageId, // ID загруженного изображения
//         };
//
//         // Отправляем запрос на создание поста
//         try {
//             console.log(JSON.stringify({ data: {...newPost} }, null, 2));
//             await GlobalApi.createPost(newPost).then((res) => {
//                 console.log(res)
//                 toast({
//                     title: "Объявление создано!",
//                     variant: "success",
//                     description: "Ваше объявление успешно добавлено",
//                 });
//             });
//
//         } catch (error) {
//             console.error('Error creating post:', error);
//             toast({
//                 title: "Ошибка создания объявления",
//                 variant: "destructive",
//                 description: "Произошла ошибка при создании объявления",
//             });
//         }
//     }
//
//     return (
//         <Card className="w-[600px] mx-auto">
//             <CardHeader>
//                 <CardTitle>Создать объявление</CardTitle>
//             </CardHeader>
//             <CardContent className="pb-6">
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//
//                         <FormField
//                             control={form.control}
//                             name="title"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Заголовок</FormLabel>
//                                     <FormControl>
//                                         <Input {...field} />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         <FormField
//                             control={form.control}
//                             name="description"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Описание</FormLabel>
//                                     <FormControl>
//                                         <Textarea
//                                             placeholder="Придумайте описание к вашему объявлению"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         {/* Цена */}
//                         <FormField
//                             control={form.control}
//                             name="price"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Цена</FormLabel>
//                                     <FormControl>
//                                         <Input type="number" step="1" {...field} />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         {/* Остаток */}
//                         <FormField
//                             control={form.control}
//                             name="stock"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Остаток</FormLabel>
//                                     <FormControl>
//                                         <Input type="number" step="1" {...field} />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         {/* Состояние */}
//                         <FormField
//                             control={form.control}
//                             name="condition"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Состояние</FormLabel>
//                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                         <FormControl>
//                                             <SelectTrigger className="w-[180px]">
//                                                 <SelectValue {...field}/>
//                                             </SelectTrigger>
//                                         </FormControl>
//                                         <SelectContent>
//                                             <SelectItem value="Новый">Новое</SelectItem>
//                                             <SelectItem value="Б/У">Б/У</SelectItem>
//                                         </SelectContent>
//                                     </Select>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         {/* Адрес */}
//                         <FormField
//                             control={form.control}
//                             name="address"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Адрес</FormLabel>
//                                     <FormControl>
//                                         <Input {...field} />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         {/* Категория */}
//                         <FormField
//                             control={form.control}
//                             name="category"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Категория</FormLabel>
//                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                         <FormControl>
//                                             <SelectTrigger className="w-[180px]">
//                                                 <SelectValue {...field}/>
//                                             </SelectTrigger>
//                                         </FormControl>
//                                         <SelectContent>
//                                             <SelectItem value="Другое">Без категории</SelectItem>
//                                             <SelectItem value="Дерево">Дерево</SelectItem>
//                                             <SelectItem value="Металл">Металл</SelectItem>
//                                             <SelectItem value="Стекло">Стекло</SelectItem>
//                                             <SelectItem value="Картон">Картон</SelectItem>
//                                             <SelectItem value="Бумага">Бумага</SelectItem>
//                                         </SelectContent>
//                                     </Select>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         {/* Фото */}
//                         <div className={cn("flex md:flex-row w-[100%] gap-4 flex-col")}>
//                             <div className="flex  w-[100%] gap-4 flex-col ">
//                                 <FormLabel>Добавьте фото</FormLabel>
//                                 <div
//                                     className={`flex w-[100%] gap-4 p-4 rounded border border-neutral-200 flex-col items-center md:flex-row md:justify-between md:items-center`}>
//                                     <div
//                                         className={`flex  md:flex-[1] h-[fit-content] md:p-4 md:justify-between md:flex-row`}>
//                                         {selectedImage ? (
//                                             <div className="md:max-w-[200px]">
//                                                 <img
//                                                     src={URL.createObjectURL(selectedImage)}
//                                                     alt="Selected"
//                                                 />
//                                             </div>
//                                         ) : (
//                                             <div className="inline-flex items-center justify-between">
//                                                 <div className="p-3 justify-center items-center flex">
//                                                     <FileImage/>
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                     <FormField
//                                         control={form.control}
//                                         name="adImage"
//                                         render={({field}) => (
//                                             <FormItem>
//                                                 <FormControl>
//                                                     <Button size="lg" type="button">
//                                                         <input
//                                                             type="file"
//                                                             className="hidden"
//                                                             id="fileInput"
//                                                             onBlur={field.onBlur}
//                                                             name={field.name}
//                                                             onChange={(e) => {
//                                                                 const files = e.target.files;
//                                                                 if (files) {
//                                                                     const file = files[0];
//                                                                     handleImageUpload(file)
//                                                                         .then((id) => {
//                                                                             if (id) {
//                                                                                 field.onChange(e.target.files);
//                                                                                 setSelectedImageId(id.toString())
//                                                                                 setSelectedImage(file); // Показываем выбранное изображение в интерфейсе
//                                                                             } else {
//                                                                                 // Обработка случая, если ID изображения не возвращён
//                                                                                 toast({
//                                                                                     title: "Ошибка загрузки",
//                                                                                     variant: "destructive",
//                                                                                     description: "Не удалось получить ID изображения после загрузки",
//                                                                                 });
//                                                                             }
//                                                                         })
//                                                                 }
//                                                             }}
//                                                             ref={field.ref}
//                                                         />
//                                                         <label
//                                                             htmlFor="fileInput"
//                                                             className="text-neutral-90  rounded-md cursor-pointer inline-flex items-center">
//                                                             <span
//                                                                 className="whitespace-nowrap">Выбрать изображение</span>
//                                                         </label>
//                                                     </Button>
//                                                 </FormControl>
//                                                 <FormMessage/>
//                                             </FormItem>
//                                         )}/>
//                                 </div>
//                             </div>
//                         </div>
//                         <Button type="submit">Разместить объявление</Button>
//
//                     </form>
//                 </Form>
//             </CardContent>
//         </Card>
//     )
// }
//
// export default AdForm
//
//

"use client"
import React, {useEffect, useState} from 'react';
// import ImageUploader from "@/app/_components/ImageUploader";
import GlobalApi from "@/app/_utils/GlobalApi";
import * as v from 'valibot';

const HomePage = () => {

    const [categories, setCategories] = useState([])

    // const LoginSchema = v.object({
    //     title: v.string().min(5, "Название должно быть минимум 5 символов."),
    //             description: v.string().min(10, {message: "Описание должно быть минимум 10 символов."}),
    //             price: v.string().min(1, {message: "Цена должна быть указана."}),
    //             stock: v.string().min(1, {message: "Остаток должен быть указан."}),
    //             category: v.enum(categories),
    //             condition: v.enum(["Новый", "Б/У"]),
    //             address: v.string().min(5, {message: "Адрес должен быть минимум 5 символов."}),
    // });

    useEffect(() => {
        GlobalApi.getCategories().then(r => {
            setCategories(r?.data.data.map((c: { attributes: { name: any; }; }) => c.attributes?.name))
        })
    }, []);

    return (
        <div>
            <h1>Загрузка изображений</h1>
            {/*<ImageUploader />*/}
        </div>
    );
};

export default HomePage;
