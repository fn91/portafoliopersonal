"use client";
/* eslint-disable @next/next/no-img-element */
import  "./proyectos.css"
import Link from "next/link"
import { usePathname } from "next/navigation";
export default function Proyectos() {
  const router = usePathname();
return(
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

<section class="proyectos" id="proyectos">
      <h2 class="titulo-de-proyectos">Algunos de mis proyectos recientes</h2>
      <div class="contenedor-de-proyectos">
        <div class="contenedor-de-proyectos tarjeta-de-proyectos">
          <img
            src="/lab3react.png"
            alt="REACTeJERCICIO2"
            height={250}
            width={350}
            loading="lazy"
            class="project-pic"
          />
          <h3 class="titulo-de-proyectos">React3</h3>
          <p class="detalle-de-proyectos">
            Añadir Nuevas FUNCIONALIDADES CON HOOKS 
            Con el proceso de enrutado de aplicaciones mediante el uso de la librería React Router.
          </p>
          <a href="https://github.com/fn91/react3/tree/ejercicio3practica" target="_blank" class="enlace-de-proyecto">Entra aqui para verlo</a>
        </div>
        <div class="contenedor-de-proyectos tarjeta-de-proyectos ">
          <img
            src="/lab4react.png"
            alt="reactlab4"
            height={250}
            width={350}
            loading="lazy"
            class="project-pic"
          />
          <h3 class="titulo-proyecto">React4</h3>
          <p class="detalles-proyecto">
           Diseñar una fakeapi y a establecer  nuestras primeras operaciones CRUD  en nuestra aplicacion de React.
           Tanto tambien con las herramientas y recursos disponibles como Axios,fundamental para conectar cualquier App con el mundo exterior.
          </p>
          <a href="https://github.com/fn91/react3/tree/lab4" target="_blank" class="project-link">Entra aqui para verlo</a>
        </div>
        <div class="contenedor-de-proyecto tarjeta-de-proyecto">
          <img
            src="/react5.png"
            alt="react5"
            height={250}
            width={350}
            loading="lazy"
            class="project-pic"
          />
          <h3 class="titulo-de-proyecto">react5</h3>
          <p class="detalles-de-proyecto">
          Modifica tu aplicacion para gestion a redux Añadir a la aplicacion nuevas herramientas y recursos
          disponiles para usarla como una librería Redux Toolkit.

          </p>
          <a href="https://github.com/fn91/react3/tree/lab5" target="_blank" class="enlace-de-proyecto">Entra aqui para verlo</a>
        </div>
      </div>
    </section>
    </header>
)
}