"use client";
import "./formulario.css"
import Link from "next/link"
import { usePathname } from "next/navigation";
export default function Contactos (){
  const router = usePathname();

return (
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
<section class="contacto" id="contacto">
      <h2>Contactame</h2>
      <div class="formulario-contacto-contenedor">
        <div class="formulario-contacto">
          <form action="https://formspree.io/f/xyylngw" method="POST">
            <div class="control-formulario">
              <label for="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Escribe tu nombre"
                class="input-field"
                required
              />
            </div>
            <div class="control-formulario">
              <label for="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Ingreso tu correo electrónico"
                class="input-field"
                required
              />
            </div>
            <div class="control-formulario">
              <label for="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                cols="60"
                rows="10"
                placeholder="Escribe tu mensaje"
                name="mensaje"
                class="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Enviar"
              id="submit-btn"
              class="submit-btn"
            />
          </form>
        </div>
      </div>
    </section>
</header>

)




}