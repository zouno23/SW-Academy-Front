"use client"; 

import { Input } from "@/components/ui/input"
import  { useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
   type Crop, 
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import NextImage  from "next/image" ;
import setCanvasPreview from "./SetCanvasPreview";
import { UploadImage } from "@/app/Actions/EditProfilAction";

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const ImageCropper = ({ closeModal, updateAvatar }:any) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef =  useRef<HTMLCanvasElement | null>(null);
  const [fil, setfil] = useState<File>();
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState <Crop> ( {
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50
  });

  const [error, setError] = useState("");
  const fillerImage = new Image();
  let fillerCanvas:HTMLCanvasElement 
//Selectfile+envoyer l'image vers backend 
  const onSelectFile = async (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (e.target.files?.[0])
      setfil(e.target.files?.[0])
    if (!file) return;
    


    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;

      imageElement.addEventListener("load", (e) => {
        if (error) setError("");
        const { naturalWidth, naturalHeight }:any = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Image must be at least 150 x 150 pixels.");
          return setImgSrc("");
        }
      });
      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
    //  //-----------------------------------------
    //  const formData= new FormData()
     
    //   await formData.append('file',file)
    //  console.log("ds"+file.name)
    //  UploadImage(formData)
 
  };

  const onImageLoad = (e: { currentTarget: { width: any; height: any; }; }) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop:any = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  return (
   <>
   <label className="block mb-3 w-fit">
        <span className="sr-only">Choose profile photo</span>
        <Input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs bg-transparent  ring-0 ring-offset-0 border-0 file:bg-gray-700 file:text-sky-300 hover:file:bg-gray-600"
        />

    </label>
    {error && <p className="text-red-400 text-xs">{error}</p>}
    {imgSrc && (
  <div className="flex flex-col items-center">
    <ReactCrop
      crop={crop}
      onChange={(pixelCrop, percentCrop:any) => setCrop(percentCrop)}
      circularCrop
      keepSelection
      aspect={ASPECT_RATIO}
      minWidth={MIN_DIMENSION}
    >
      <NextImage
        ref={imgRef}
        src={imgSrc}
        width={500}
        height={500}
        alt="Upload"
        style={{ maxHeight: "70vh" }}
        onLoad={onImageLoad}
      />
    </ReactCrop>
    <button
      className="text-white font-mono text-xs py-2 px-4 rounded-2xl mt-4 bg-sky-500 hover:bg-sky-600"
      onClick={(e) => {
        if (imgRef){
          setCanvasPreview(
             imgRef.current || fillerImage , // HTMLImageElement
            previewCanvasRef.current || fillerCanvas, // HTMLCanvasElement
            convertToPixelCrop(
              crop,
              imgRef.current?.width|| 1,
              imgRef.current?.height || 1
            )
          );

        }
        const dataUrl = previewCanvasRef.current?.toDataURL();
        console.log(dataUrl);
        updateAvatar(dataUrl);
        
        
        closeModal();
      }}
    >
      Crop Image
    </button>
  </div>
)}
{crop && (
  <canvas
    ref={previewCanvasRef}
    className="mt-4"
    style={{
      display: "none",
      border: "1px solid black",
      objectFit: "contain",
      width: 150,
      height: 150,
    }}
  />
)}
   </>
   );
};
export default ImageCropper;
