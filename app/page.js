
"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
<time datetime="2016-10-25" suppressHydrationWarning />
export default function Home() {
  const router = usePathname();
 
  
  return (
   
    <html lang="en">
       

      <header>
      <nav>
      <ul class="navegacion">
    
      <li>
        <Link href="/" class="nav-link"
        className={

          router.pathname ==="/"
          


        }
   
        
        >Inicio</Link></li>


      <li>
        <Link href="/webdirec/formulario" class="nav-link"
        className={

          router.pathname ==="/webdirec/formulario"
          


        }
   
        
        >Enviar Correo</Link></li>
      <li><Link href="/webdirec/proyectos" class="nav-link"
       className={

        router.pathname ==="/webdirec/proyectos"
        


      }
      
      >Proyectos</Link></li>
      <li><Link href="/webdirec/sobremi"class="nav-link"
       className={

        router.pathname ==="/webdirec/sobremi"
        


      }
      
      
      >Contacto</Link></li>
    </ul>
   
</nav>
<section className="yo-mismo" id="about">
      <Image
        src="/imagen.svg"
        alt="Claudio Fanelli Rodriguez"
        width={300}
        height={300}
        
      />
      <div class="animated">
        <h2 class="Mi portafolio">Sobre Mí</h2>
        <p class="texto">
        Estudiante de DAM y especializado Junior en Front End, con gran interés en acceder al mercado laboral para poner en práctica mis conocimientos. Soy una persona trabajadora, comunicativa y comprometida. Desearía encontrar una oportunidad para adquirir más experiencia profesional.
        </p>
        <p>Idiomas : Español,Italiano,Ingles.</p>
        <p></p>
      </div>
</section>




  </header>

  <footer>
      <p class="finalcopy">&copy; Copyright 2024</p>
      <p class="finalcopy">
         &#x2661; by
        <a href="" target="_blank"
          >Claudio Fanelli Rodriguez</a>
        </p>
      
</footer>

    </html>

   

  )
  
}