"use client"
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Container from "@/app/components/Container";
import ProgressBar from "@/app/components/ProgresBar";
import Button from "@/app/components/Button";

export default function ProjectDetails() {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-4xl font-bold mb-6 text-primary">
          Título de la Campaña
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Imagen de la campaña"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                I
              </div>
              <div>
                <h2 className="font-semibold text-primary">Creador</h2>
                <p className="text-sm text-muted-foreground">
                  Nombre del Creador
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                I<span>Categoría: Salud</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                I<span>Fecha de creación: 20/05/2024</span>
              </div>
            </div>
            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Descripción
              </h3>
              <p className="text-muted-foreground">
                Texto texto texto.... Aquí iría una descripción detallada de la
                campaña, explicando su propósito, objetivos y cómo se utilizarán
                los fondos recaudados.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card text-card-foreground rounded-lg border border-border shadow-sm">
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2 text-primary">
                  $100.000
                </h2>
                <p className="text-muted-foreground mb-4">
                  recaudados de $1.000.000 meta
                </p>
                <ProgressBar value={10} className="mb-4" />
                <div className="flex justify-between text-sm text-muted-foreground mb-6">
                  <span>10% completado</span>
                  <span>2 inversiones</span>
                </div>
                <Button
                  onClick={""}
                  className="w-full mb-4text-md font-semibold leading-6 text-customWhite bg-customGreen pt-1 pb-1 pl-4 pr-4 rounded-full border-customGreen border-2 hover:text-customGreen hover:bg-customGray hover:border-customGreen hover:scale-110 ease-in-out transition duration-500"
                >
                  Invertir
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  30 días restantes
                </p>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border border-border shadow-sm bg-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Inversores
                </h3>
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center mb-4 last:mb-0">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center mr-3">
                      I
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Maria</p>
                      <p className="text-sm text-muted-foreground">
                        $500
                      </p>
                    </div>
                  </div>
                ))}
                <Button onClick={""} className="w-full mb-4text-md font-semibold leading-6 text-customWhite bg-customGray pt-1 pb-1 pl-4 pr-4 rounded-full hover:text-customGreen hover:bg-customGray border-customGreen border-2 hover:scale-110 ease-in-out transition  duration-500">
                  Ver todos los Inversores
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
