import ServicesList from "@/app/_components/ServicesList"
import { servicesData } from "@/app/_components/ServicesList"
import Image from "next/image"


export default function page({params}) {
    const serviceData = servicesData.find(serviceData => serviceData.link === params.slug )
  
    return (
      <>
      <div className="flex flex-col gap-5 justify-center items-center py-10">
        <h3 className="text-foreground text-3xl font-bold text-center">{serviceData.name}</h3>
        <Image src={serviceData.imageUrl} width={100} height={100} />
      </div>
  
      <div className="flex flex-col border w-4/5 mx-auto px-5 py-10 text-foreground">
        <h2 className="text-foreground text-4xl font-bold">{serviceData.heading}</h2>
  
        <p className="my-6">{serviceData.p1}</p>
        <p>{serviceData.p2}</p>
  
      </div>
      </>
    )
  }