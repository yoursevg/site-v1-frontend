// "use client"
// import React, {useState} from 'react';
// import GlobalApi from "@/app/_utils/GlobalApi";
// import {toast} from "@/components/ui/use-toast";
//
// const ImageUploader = () => {
//     const [images, setImages] = useState([]);
//     const [uploadedImageIds, setUploadedImageIds] = useState([]);
//
//     const validateFile = (file: { size: number; type: string; }) => {
//         const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//         return file.size <= 5 * 1024 * 1024 && validTypes.includes(file.type);
//     };
//
//     const uploadImageToStrapi = async (file: File | Blob) => {
//         const formData = new FormData();
//         formData.append('files', file);
//
//         try {
//             const response = await GlobalApi.uploadPhoto(file)
//             return response.data[0].id; // Предполагаем, что Strapi возвращает идентификаторы
//         } catch (error) {
//             console.error("Ошибка при загрузке файла:", error);
//             return null;
//         }
//     };
//
//     const handleFiles = async (files: FileList) => {
//         const validatedFiles = [];
//         for (let i = 0; i < files.length; i++) {
//             if (validateFile(files[i])) {
//                 const uploadedId = await uploadImageToStrapi(files[i]);
//                 if (uploadedId) {
//                     validatedFiles.push(files[i]);
//                     // @ts-ignore
//                     setUploadedImageIds(prev => [...prev, uploadedId]);
//                 }
//             } else {
//                 toast({
//                     title: "Ошибка загрузки",
//                     variant: "destructive",
//                     description: `Файл ${files[i].name} невалиден.`,
//                 });
//             }
//         }
//         // @ts-ignore
//         setImages(validatedFiles);
//     };
//
//     const handleSubmit = async () => {
//         // Здесь логика отправки формы. В случае успеха, просто очищаем загруженные ID
//         setUploadedImageIds([]);
//     };
//
//     const handleCancel = async () => {
//         // Удаление изображений из Strapi
//         for (const id of uploadedImageIds) {
//             await GlobalApi.deletePhoto(id)
//         }
//         setUploadedImageIds([]);
//     };
//
//     return (
//         <div>
//             <input type="file" multiple onChange={(e) => handleFiles(e.target.files)}/>
//             <button onClick={handleSubmit}>Отправить форму</button>
//             <button onClick={handleCancel}>Отмена</button>
//             {images.length > 0 && (
//                 <div>
//                     {images.map((file, index) => (
//                         <div key={index}>{file?.name}</div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default ImageUploader;
