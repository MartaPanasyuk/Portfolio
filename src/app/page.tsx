"use client"
import Image from "next/image";
import HomeBackground from '../../public/images/home-background.png'
import RenderModel from "../components/RenderModel";
import WizardModel from "../components/models/Wizard";
import Navigation from "../components/navigation/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
    <Image 
      src={HomeBackground} 
      alt="background-image" 
      fill 
      className="object-cover object-center"
      quality={100}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
    <div className="w-full h-screen z-10">
      <Navigation/>
      <RenderModel>
        <WizardModel />
      </RenderModel>
    </div>
  </main>
  );
}
