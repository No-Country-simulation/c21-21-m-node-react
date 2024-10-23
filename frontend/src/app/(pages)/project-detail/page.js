"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Container from "@/app/components/Container";
import ProgressBar from "@/app/components/ProgresBar";
import PaypalButton from "@/app/components/investment/PaypalButton";
import { useRouter } from "next/router";
import Button from "@/app/components/Button";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

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
                src="/banner.webp"
                alt="Imagen de la campaña"
                layout="fill"
                objectFit="cover"
                className=" transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <FaUser size={24} />
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
            <div className="grid p-6 rounded-lg border border-border shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-primary">Updates</h2>
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="mb-4 bg-card text-card-foregound rounded-lg border border-border shadow-sm"
                >
                  <div className="p-6">
                    <h4 className="text-3xl font-bold mb-2 text-primary">
                      Titulo
                    </h4>
                    <p className="text-xs mb-2 text">16/10/2024</p>
                    <p className="text-base">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum."
                    </p>
                  </div>
                </div>
              ))}
              <Button className="w-5/6 place-self-center  text-md font-semibold leading-6 bg-customWhite pt-1 pb-1 pl-4 pr-4 rounded-full border-2 shadow-md hover:shadow-lg hover:text-customGreen  border-customGreen">
                Ver Todos Los Updates
              </Button>
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
                <ProgressBar value={30} className="mb-4" />
                <div className="flex justify-between text-sm text-muted-foreground mb-6">
                  <span>30% completado</span>
                  <span>2 inversiones</span>
                </div>
                <PaypalButton investmentAmount={1000} />

                <p className="text-center text-sm text-muted-foreground">
                  30 días restantes
                </p>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border border-border shadow-sm bg-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Recompensas
                </h3>
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center mb-4 last:mb-0">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center mr-3">
                      I
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Bronce</p>
                      <p className="text-sm text-muted-foreground">$500</p>
                    </div>
                  </div>
                ))}
                <Button className="w-full text-md font-semibold leading-6 bg-customWhite pt-1 pb-1 pl-4 pr-4 rounded-full border-2 shadow-md hover:shadow-lg hover:text-customGreen  border-customGreen">
                  Ver Todas las Recompensas
                </Button>
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
                      <p className="text-sm text-muted-foreground">$500</p>
                    </div>
                  </div>
                ))}
                <Button className="w-full text-md font-semibold leading-6 bg-customWhite pt-1 pb-1 pl-4 pr-4 rounded-full border-2 shadow-md hover:shadow-lg hover:text-customGreen  border-customGreen">
                  Ver Todas las Inversores
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
